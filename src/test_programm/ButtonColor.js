import React, { useState } from "react";
import "./myapp.css";

const arr = [
    "Japan - Tokyo",
    "France - Paris",
    "Brazil - Brasília",
    "Canada - Ottawa",
    "Australia - Canberra"
];

const ButtonColor = () => {
    const [data, setData] = useState(arr);
    const [countryColors, setCountryColors] = useState({});
    const [capitalColors, setCapitalColors] = useState({});
    const [countryIndex, setCountryIndex] = useState(null);
    const [capitalIndex, setCapitalIndex] = useState(null);

    function handleCountry(index){
        //setColorTr()
        setCountryIndex(index)
        if(index == capitalIndex){
            //console.log("true",data[index]);
            document.getElementById(index).remove();
            setCountryIndex(null);
            setCapitalIndex(null);

            setCountryColors({});
            setCapitalColors({});
        }else if(capitalIndex == null){
            setCountryColors(prevColors => ({
                ...prevColors,
                [index]: "green"
              }));
        }else{
              setCountryColors(prevColors => ({
                ...prevColors,
                [index]: "red"
              }));
              setCapitalColors(prevColors => ({
                ...prevColors,
                [capitalIndex]: "red"
              }));
        }
    }
    function handleCapital(index){
        setCapitalIndex(index);
        if(index == countryIndex){
            document.getElementById(index).remove();
            setCountryIndex(null);
            setCapitalIndex(null);

            setCountryColors({});
            setCapitalColors({});

        }else if(countryIndex == null){
            setCapitalColors(prevColors => ({
                ...prevColors,
                [index]: "green"
              }));
        }else{
              setCountryColors(prevColors => ({
                ...prevColors,
                [countryIndex]: "red"
              }));
              setCapitalColors(prevColors => ({
                ...prevColors,
                [index]: "red"
              }));
        }
    }

    return (
        <div className=''>
            <table className="table">
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Capital</th>
                    </tr>

                </thead>
                <tbody>
                    {data && data.map((val, index) => (
                        <tr key={index} id={index}>
                            <td style={{ color: countryColors[index] || 'black' }} onClick={()=>handleCountry(index)}>{val.split(" - ")[0]}</td>
                            <td style={{ color: capitalColors[index] || 'black' }} onClick={()=>handleCapital(index)}>{val.split(" - ")[1]}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}
export default ButtonColor;