

function Textarea(props){


    return(
        <div>
            <textarea clasName="test" style={{margin:props.margin, width:props.width,
                height:props.height, borderRadius:props.borderRadius }}/>
            {props.Textarea}
        </div>
    )
}

export default Textarea