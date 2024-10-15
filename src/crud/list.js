import { useEffect, useState } from "react";
import Alert from "../Includes/Alert";
import { Link } from 'react-router-dom';

const List = () => {
    const [data, setData] = useState('');
    const [message,setMessage] = useState('');

    const getData = () => {
        fetch('https://dummy.restapiexample.com/api/v1/employees')
        .then((response)=>response.json())
        .then((json)=>{
            if(json.status === 'success'){
                setData(json.data)
            }else{
                const alertMsg = {
                    status: 0,
                    message: "Oops! Some error occured. Please try again leter."
                }
                setMessage(alertMsg)
            }
        })
    }
    useEffect(()=>{
        getData()
    },[])


    return (
        <div className="list-employee">
            <div>
                <h2><center><u>EMPLOYEE LIST</u></center></h2>
            </div>
            <br />
            <Alert msg={message}></Alert>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length > 0 ?
                                data.reverse().map(
                                    (emp) => (
                                        <tr key={`id_${emp.id}`}>
                                            <th scope="row">{emp.id}</th>
                                            <td>{emp.employee_name}</td>
                                            <td>{emp.employee_age}</td>
                                            <td>{emp.employee_salary}</td>
                                            <td><Link to={`/edit/${window.btoa(emp.id)}`} className="btn btn-sm btn-primary">edit</Link>
                                                <button className="btn btn-sm btn-danger">delete</button>
                                            </td>
                                        </tr>
                                    )
                                ) : (
                                    <tr>
                                        <th scope="row" colSpan={5}> No Record Found</th>
                                    </tr>
                                )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default List;