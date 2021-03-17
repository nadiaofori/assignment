

function Navbar(props){

    return(
        <div>
            <nav
            style ={{backgroundColor:props.color,
                fontWeight:props.fontWeight,
                padding:props.padding,
                color:props.bgcolor, 
                
            }}>
                {props.text}
             </nav>
        </div>
    )
}

export default Navbar;