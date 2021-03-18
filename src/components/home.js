// import React, { useState } from 'react'
// import './index.css'


import Button from'./button';
import Checkbox from'./checkbox';
import Dropdown from'./dropdown';
import Inputfield from'./inputfield';
import Navbar from'./navbar';
import Radiobutton from'./radiobutton';
import Textarea from'./textarea';
import Typography from'./typography';
import './home.css'

function Home(){
    return(
        <div className="mother">
            <div className="nav">
            <Navbar  
            Button text="Login" bgcolor="#FFF200" width={100} height={40} color="black" 
             color="green" 
             fontWeight="800" 
             padding="10px 10px"
             bgcolor="#fff"  />
             <section className="button">
             <Button text="Login" bgcolor="#FFF200" width={100} height={40} color="white" />
             </section>
             </div>

            <h1 className='slip'>YOUR ORDERS </h1>
        <div className='main'>

            <Checkbox margin="10px 10px" outer="20px 20px" outline="20px"/>
            <Dropdown />
            <Inputfield Inputfield="number"/>
            <Radiobutton />
           <div className="textarea">
                <h2><Typography text="Why is it your prefered fruit?"/></h2>
            
            <Textarea   margin={10}  width={1000} height={80} borderRadius={15}/>
        </div>
            </div>
            <div className="but">
                <Button text="Submit" bgcolor="#FC6600" width={100} height={40} color="white" />
                <Button text="Cancel" bgcolor="#FF2400" width={100} height={40} color="white" />
            </div>     
</div>
    )
}

export default Home
