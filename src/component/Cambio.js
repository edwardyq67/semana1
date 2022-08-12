import React, { useState } from 'react';
import user from '../user.json';
import { Icon } from '@material-ui/core';


const colors=[
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871"
]

const Cambio = () => {
    const random=Math.floor(Math.random()*user.length);
    const [index,setIndex]=useState(random);
    const changet=()=>{
        const random=Math.floor(Math.random()*user.length);
        setIndex(random);
    }
    const NumColor=Math.floor(Math.random()*colors.length);
    const color=colors[NumColor];
    document.body.style=`background:${color}`;
    return (
        <div>
            <div className="todo" style={{color:color}}>
                <h2>{user[index].quote}</h2>
                <h3>{user[index].author}</h3>
                <div className="boton" >
                    <button onClick={changet}><Icon>forward</Icon></button>
                    
                </div>
            </div>
        </div>
    );
};

export default Cambio;