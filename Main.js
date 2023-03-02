import React from "react"
import Interest from "./components/Interest.js"
import About from "./components/About.js"
import Footer from "./components/Footer.js"
import Myself from "./components/Myself.js"

export default function Main(){
    return(
        <div className="cls-main">
           <Myself />
            <div className="cls-main-abt">
                 <About />
                 <Interest />
            </div>
            <Footer />
        </div>
                
    )
}