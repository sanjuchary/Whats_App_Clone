import React from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import './Sidebarchat.css'

async function Sidebarchat({name})  { 
  
  return (<>
    <div className='sidebarchat'>
        <BsPersonCircle size={35}/>
        <div className='info'>
            <h2>{name}</h2>
            <p>message...</p>
        </div>
    </div>
    </>
    
  );
}

export default Sidebarchat;