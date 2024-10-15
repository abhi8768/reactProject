import React,{useState,useRef} from "react";

const Addsearch = () => {

    const inputRef = useRef();
    const[item,setItem] = useState([]);
    const[filteredName,setFilteredName] = useState([]);

    function submitHandler(e){
        e.preventDefault();
        const inputVal = inputRef.current.value;
        if(inputVal === "") return
        setItem((prev)=>{
            return [...prev, inputVal]
        })
        setFilteredName((prev)=>{
            return [...prev, inputVal]
        })
        inputRef.current.value = "";
    }

    function HandleFilter(e){
        const searchVal = e.target.value;
        setFilteredName(
            item.filter(itm=>itm.toLowerCase().includes(searchVal.toLowerCase()))
        )
    }

    return(
        <div className="create-form">
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Add Name</label>
                    <input type="text" placeholder="Enter name" className="form-control" ref={inputRef} />
                </div>
            </form>
            <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Search</label>
                    <input type="text" placeholder="Enter name" className="form-control" onChange={HandleFilter} />
                </div>
            <div>
                <div>
                    <h5>List</h5>
                </div>
                <div>
                    {filteredName.length > 0 ? (
                        filteredName.map((val, index) => (
                                <p key={`id_${index}`}>{val}</p>
                        ))
                    ) : (
                        <p>No record found.</p>
                    )
                    }
                </div>
            </div>
        </div>
    );
}

export default Addsearch;