import './Hello.css'

function Hello(props) {
    console.log(props)
    return(
        <div className="Hello">
            I am {props.name}, and I am {props.age} old.
        </div>
    )
}

export default Hello