import "./style.scss"

function Heading(props){
    return(
        <div className="heading-wrapper">
            <h1>
                {props.children}
                <span data-testid="page-title">{props.title}</span>
            </h1>
        </div>
    )
}

export default Heading;