import React, { useState } from 'react';
import Chield from './Chield';

const Parent = () => {

    const [colourName,setColourName] = useState('black');
    
    function colourFunc(id){
        setColourName(id);
    }

    return (
        <div>
            <h5 style={{ color: colourName }}> Your Button colour</h5>
            <Chield colourProps={ colourFunc }/>
        </div>
    );
}

export default Parent;