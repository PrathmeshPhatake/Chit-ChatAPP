
import './chatlist.css'
import search from "../../../../public/search.png"
import plus from "../../../../public/plus.png"
import minus from "../../../../public/minus.png"
import avatar from "../../../../public/avatar.png"

import { useState } from 'react'
const Chatlist = () => {
  const[addMode,setAddmode]=useState(false);


  
  return (
    <div className="chatlist custom-scrollbar">
      <div className='search'>
        <div className='searchbar'>
          <img src={search} alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img src={addMode?plus:minus} 
        alt=""
        className='add'
         onClick={()=>setAddmode((prev)=>!prev)}
        />

      </div>
      <div className='item'>
        <img src={avatar} alt="" />
        <div className='texts'>
          <span>ravi deo</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src={avatar} alt="" />
        <div className='texts'>
          <span>ravi deo</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src={avatar} alt="" />
        <div className='texts'>
          <span>ravi deo</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src={avatar} alt="" />
        <div className='texts'>
          <span>ravi deo</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src={avatar} alt="" />
        <div className='texts'>
          <span>ravi deo</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src={avatar} alt="" />
        <div className='texts'>
          <span>ravi deo</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src={avatar} alt="" />
        <div className='texts'>
          <span>ravi deo</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src={avatar} alt="" />
        <div className='texts'>
          <span>ravi deo</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src={avatar} alt="" />
        <div className='texts'>
          <span>ravi deo</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chatlist