function Btn({palceholder = "SHOP NOW", arrow = true, size="md"}){
    return(
        <button className="btn">{palceholder}{arrow? <img className="icon" src="https://cdn.iconscout.com/icon/free/png-64/right-arrow-14-460282.png" alt="Arrow"/> : null}</button>
    )
}

export default Btn;