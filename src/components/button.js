
function Button(props){

return(
    <div>
        <button
        style= {{ backgroundColor: props.bgcolor,
                  height: props.height,
                  width: props.width,
                  color:props.color,
                  borderRadius:5,
                  boxShadow: '2px 2px 2px'
        }}> 
        {props.text} 
         </button>
    </div>
    )

}

export default Button;

