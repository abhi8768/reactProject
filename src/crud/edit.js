import { useState, useEffect } from "react";
import Alert from "../Includes/Alert";

const Edit = () => {
    const [userId,setUserId] = useState('');
    const [fname,setFname] = useState('');
    const [age,setAge] = useState('');
    const [salary,setSalary] = useState('');
    const [message,setMessage] = useState('');
    const [data, setData] = useState('');


    const urlArr  = window.location.pathname.split('/');
    const id = window.atob(urlArr[2]);
    useEffect(()=>{
        getData()
    },[])

    const getData = () => {
        fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
        .then((response)=>response.json())
        .then((json)=>{
            if(json.status === 'success'){
                setData(json.data)
                setFname(json.data.employee_name)
                setAge(json.data.employee_age)
                setSalary(json.data.employee_salary)
                setUserId(json.data.id)
            }else{
                const alertMsg = {
                    status: 0,
                    message: "Oops! Some error occured. Please try again leter."
                }
                setMessage(alertMsg)
            }
        })
    }
    
    const fnameChangeHandler = (event) => {
        setFname(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }
    const salaryChangeHandler = (event) => {
        setSalary(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (fname === '' || age === '' || salary === ''){ 
            const alertMsg = {
                status: 0,
                message: "Please fillout the form correctly"
            }
            setMessage(alertMsg)
            return
        }
        const submitData = {
            employee_name: fname,
            employee_age: age,
            employee_salary: salary
        }
        //console.log(submitData);
        addEmployee(submitData,userId)
        
    }
    const addEmployee = (submitdata) => {
        fetch(`https://dummy.restapiexample.com/api/v1/update/${userId}`, {
            method: 'PUT',
            body: JSON.stringify(submitdata),
            headers: {
                'content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((json) => {
                //console.log(json)
                if(json.status === 'success'){
                    const alertMsg = {
                        status: 1,
                        message: "Success! Profile update successfully."
                    }
                    setMessage(alertMsg)
                }else{
                    const alertMsg = {
                        status: 0,
                        message: "Oops! Some error occured. Please try again leter."
                    }
                    setMessage(alertMsg)
                }
            } );
    }
    return (
        <div className="create-form">
            <div>
                <h2><center><u>EDIT EMPLOYEE</u></center></h2>
            </div>
            <br />
            <Alert msg={message}></Alert>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" value={fname} onChange={fnameChangeHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
                    <input type="number" min="1" className="form-control" value={age} onChange={ageChangeHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Salary</label>
                    <input type="number" min="1" className="form-control" value={salary} onChange={salaryChangeHandler} />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
}

export default Edit;