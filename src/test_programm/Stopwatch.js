import React,{ useState} from "react";
let defaultcounter = undefined;

const Stopwatch = () => {
    const [count, setCount] = useState(0);
    const [disable, setDisable] = useState(false);

    const handleStart = () => {
        defaultcounter = setInterval(()=>{
            setCount((prev)=>prev + 1)
        }, 1000);
        setDisable(true);
    }
    const handleStop = () => {
        clearInterval(defaultcounter)
        setDisable(false);
    }
    const handleReset = () => {
        setCount(0)
    }

    return (
        <div className=''>
            <h2> {count} </h2>
            <div>
                <button className="btn btn-sm btn-success mr-2" onClick={handleStart} disabled = {disable}>Start</button>                
                <button className="btn btn-sm btn-primary mr-2" onClick={handleStop}>Stop</button>
                <button className="btn btn-sm btn-info mr-2" onClick={handleReset}>Reset</button>
            </div>

        </div>
    );
}
export default Stopwatch;