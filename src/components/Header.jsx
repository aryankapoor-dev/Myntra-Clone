function Header(){
    return (
        <div  style={{display: "flex", height: "10vh", borderBottom: "2px solid #000", alignItems: "center", justifyContent: "space-evenly"}}>
            <div style={{width: "5vw"}}>
                <img src="https://adgully.com/img/800/201704/myntra-logo.jpg" height="90rem"/>
            </div>
            <div style={{display: "flex", width: "35vw", justifyContent: "space-evenly"}}>
                <h3>MEN</h3>
                <h3>WOMEN</h3>
                <h3>KIDS</h3>
                <h3>HOME & LIVING</h3>
                <h3>BEAUTY</h3>
                <h3>STUDIO</h3>
            </div>
            <div>
                <input placeholder="Search for Products, Brands or More" type="search" style={{height: "4vh", width: "35vw", borderRadius: "0.5rem"}}/>
            </div>
            <div style={{display: "flex", width: "25vw", justifyContent: "space-evenly"}}>
                <h3>Profile</h3>
                <h3>Wishlist</h3>
                <h3>Bag</h3>
            </div>
        </div>
    )
}
export default Header;