const Logo = (props) => {
    return (
        <h1>
            <a href='#'>
                <img src={props.img} alt= {props.alt} width={props.width} height={props.height}/>
            </a>
        </h1>
    )
}
export default Logo