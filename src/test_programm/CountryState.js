import React, { useState } from 'react';

const CountryState = () => {

    const county = [
        {
            "country": "India",
            "id": "1"
        },
        {
            "country": "US",
            "id": "2"
        },
    ];

    const state = [
        {
            "India": [
                {
                    "state": "Tamil Nadu",
                    "id": 1
                },
                {
                    "state": "Karnataka",
                    "id": 2
                },
                {
                    "state": "Kerala",
                    "id": 3
                }
            ]
        },
        {
            "US": [
                {
                    "state": "TX",
                    "id": 1
                },
                {
                    "state": "NY",
                    "id": 2
                },
                {
                    "state": "CA",
                    "id": 3
                }
            ]
        }
    ];

    const [countries, setCountries] = useState(county);
    const [states, setStates] = useState(state);

    function countryNameHandler(e) {
        let countryName = e.target.value;
        let newArr = [];
        if (countryName != "") {
            for (let i = 0; i < state.length; i++) {
                let obj = state[i];
                for (const [key] of Object.entries(obj)) {
                    newArr.push(key.toLowerCase());
                }
            }
            let countryIndex = newArr.indexOf(countryName.toLowerCase());
            let newStateObject = state[countryIndex];
            //console.log(">>", newStateObject[countryName]);
            let newStateArr = newStateObject.countryName;
            setStates(newStateObject[countryName]);
        }
    }

    return (
        <div>
            <div>
                <select className='countryDiv' onChange={countryNameHandler}>
                    <option value="">--Country--</option>
                    {
                        countries.length > 0 ? (
                            countries.map((val, index) => (
                                <option key={`id_${index}`} value={val.country}>{val.country}</option>
                            ))
                        ) : (
                            <option>No Record Found</option>
                        )
                    }
                </select>
            </div>
            <div>
                <select className='stateDiv'>
                    <option value="">--State--</option>
                    {
                        states.length > 0 ? (
                            states.map((val, index) => (
                                <option key={`id_${index}`} value={val.state}>{val.state}</option>
                            ))
                        ) : (
                            <option>No Record Found</option>
                        )
                    }
                </select>
            </div>
        </div>
    );

}
export default CountryState;