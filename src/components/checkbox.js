

function Checkbox(props){


    return(
        <div>
            <h3> Checkbox</h3>

            <h1>Please Tick Your Prefered Fruit


            <form>
                <input type="checkbox" style={{margin:props.margin, outerHeight:props.outer, outline: props.outline}} /> mangoes
                <input type="checkbox" style={{margin:props.margin, outerHeight:props.outer, outline: props.outline}}/> apples
                <input type="checkbox" style={{margin:props.margin, outerHeight:props.outer, outline: props.outline}}/> avocado
            </form>
            </h1>
        </div>
    )
}


export default Checkbox