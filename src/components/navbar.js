

function Navbar(props){

    return(
        <div>
            <nav
            style ={{backgroundColor:props.color,
                fontWeight:props.fontWeight,
                padding:props.padding,
                color:props.bgcolor, 
                
            }}>
                <h1 className='ht'>NADIA'S FRUITS SHOP</h1>
             </nav>
        </div>
    )
}

export default Navbar;