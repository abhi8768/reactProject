import React,{useReducer} from "react";

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "add": return state + 1;
        case "subtract": return state - 1;
        case "reset": return 0;
        default: throw new Error("Unexpected action");
    }
}
const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div className=''>
            <h2> {count} </h2>
            <div>
                <button className="btn btn-sm btn-success mr-2" onClick={()=>dispatch("add")}>Add</button>                
                <button className="btn btn-sm btn-primary mr-2" onClick={()=>dispatch("subtract")}>Subtract</button>
                <button className="btn btn-sm btn-info mr-2" onClick={()=>dispatch("reset")}>Reset</button>
            </div>

        </div>
    );
}
export default UseReducer;