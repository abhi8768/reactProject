import React from 'react';

const Chield = (props) => {

    function clickEvent(e){
        let id = e.target.id;
        props.colourProps(id);
    }
    return(
        <div>
            <div onClick={clickEvent}>
                <button style={{ color: 'red'}} id='red' >Red</button>
                <button style={{ color: 'green'}} id='green' >Green</button>
                <button style={{ color: 'blue'}} id='blue' >Blue</button>
            </div>
        </div>
    );
}

export default Chield;