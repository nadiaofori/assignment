

function Checkbox(props){


    return(
        <div>
            <h3>My Checkbox</h3>
            <form>
                <input type="checkbox" style={{margin:props.margin, outerHeight:props.outer}}/> mangoes
                <input type="checkbox" style={{margin:props.margin, outerHeight:props.outer}}/> apples
                <input type="checkbox" style={{margin:props.margin, outerHeight:props.outer}}/> avocado
            </form>
        </div>
    )
}


export default Checkbox