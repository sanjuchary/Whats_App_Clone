import React from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import './Sidebarchat.css'

function Sidebarchat({name,age})  { 
  
  return (<>
    <div className='sidebarchat'>
        <BsPersonCircle size={35}/>
        <div className='info'>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    </div>
    </>
    
  );
}

export default Sidebarchat;