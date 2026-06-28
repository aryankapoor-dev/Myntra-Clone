function Card(props){
    return(
        <div style={{border: "2px solid #000", padding: "1rem 1rem 1rem 1rem", borderRadius: "0.5rem", display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "1rem"}}>
            <img src={props.imagesource} height="200px"/>
            <div style={{textAlign: "center"}}>
                <h2>{props.productname}</h2>
                <h1>{props.discount}</h1>
                <h2>Shop Now</h2>
                <h3>Price: ₹{props.price}</h3>
            </div>
        </div>
    )
}

export default Card;