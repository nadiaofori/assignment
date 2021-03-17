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
            <Navbar text="NADIA'S FRUITS SHOP"
             color="blue" 
             fontWeight="800" 
             padding="10px 30px"
             bgcolor="#fff"  />
             </div>

            <h1>YOUR ORDERS </h1>

            <div className="but">

            <Button text="Clear" bgcolor="white" width={100} height={40} color="black" />
            <Button text="Login" bgcolor="#1e88e5" width={100} height={40} color="black" />
            <Button text="Cancel" bgcolor="#880e4f" width={100} height={40} color="black" />
            <Button text="Submit" bgcolor="#003300" width={100} height={40} color="black" />
            <Button text="Checkin" bgcolor="grey" width={100} height={40} color="black" />
            </div>

            {/* <Button text={text} color={color} /> */}

            <Checkbox margin="10px 10px" outer="20px 20px"/>
            <br/>
            <Dropdown className="dp"/>
            <br/>
            <br/>
            <Inputfield Inputfield="text" Inputfield="number"/>
            <Radiobutton />
            <br/>
            <br/>
            <br/>
            <Textarea textarea name="outputtext"/>
            <Typography text="What is your prefered fruit?"/>
        </div>
    )
}

export default Home
