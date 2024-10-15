import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/slice/todos";

const ReduxThunk = () => {
   const dispatch = useDispatch();
   const state = useSelector((state)=>state);

    return(
        <div>
          <button style={{ float: "right"}} type="button" className="btn btn-primary" onClick={(e)=>dispatch(fetchTodos())}>Get Todos</button>
          {
            state.todo.isLoading == true ? ( 
                <h2>Loading...</h2>
            ) : 
                state.todo.data && state.todo.data.map((val, index)=>(
                    <li key={index}>{val.title}</li>
                ))
            
          }
          
        </div>
    );
}
export default ReduxThunk;