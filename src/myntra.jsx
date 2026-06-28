import React, {useState} from "react"
import ReactDOM from "react-dom/client"
import Card from "./components/Card"
import Header from "./components/Header"
import Footer from "./components/Footer"
import arr from "./utils/dummydata"
function App(){
    let [A, setA]=useState(arr);
    function sort(){
        let sortedA = [...A].sort((a,b)=>a.price-b.price);
        setA(sortedA);
    }
    function priceabove499(){
        let filteredA = [...A].filter((value)=>value.price>499);
        setA(filteredA);
    }
    return(
        <>
            <Header/>
            <h3 style={{margin: "1rem 0rem 0rem 1rem", display: "inline", background: "#fff", fontWeight:"bold"}}>Filters |</h3>
            <button onClick={sort} style={{margin: "1rem 0rem 0rem 1rem", border: "none", background: "#fff", fontWeight:"bold", cursor: "pointer"}}>Sort by Price</button>
            <button onClick={priceabove499} style={{margin: "1rem 0rem 0rem 1rem", border: "none", background: "#fff", fontWeight:"bold", cursor: "pointer"}}>Price above ₹499</button>
            <div style={{display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1rem"}}>
                {
                A.map((value, index)=> <Card key={index} imagesource={value.imagesource} productname={value.productname} discount={value.discount} price={value.price}/>)
                }
            </div>
            <Footer/>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);