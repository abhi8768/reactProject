import { useState } from "react";
import Alert from "../Includes/Alert";

const Create = () => {
    const [fname,setFname] = useState('');
    const [age,setAge] = useState('');
    const [salary,setSalary] = useState('');
    const [message,setMessage] = useState('');

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
            name: fname,
            age: age,
            salary: salary
        }
        console.log(submitData);
        
    }
    return (
        <div className="create-form">
            <div>
                <h2><center><u>CREATE EMPLOYEE</u></center></h2>
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Create;