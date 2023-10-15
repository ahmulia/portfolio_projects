import React from "react"
import "./main.css"


const Main = () => {
    return (
        <section id="main">

            <div className="textPart">
                <h2>Hello,</h2>
                <h1>I'm <span className="span1">Ahmed </span> </h1>
                <h1> Front-end developer</h1> 
                <p className="p1">  <span className="span2">[ I CODE ]</span> tell that you are looking for <br/> 
                  creative front-end developer! <br/>
                And how do i know that !? 
                Well, sometimes the <br/> answer is right in front of you 😄  </p>
                
                <button>
                    <img src="../Images/hireme.png"></img>
                    <p className="p2"> Hire me so <span>[I CODE]</span> watch your businesses <span>[BUG]</span>! </p>
                </button>
            </div>

            
            <img className="mainImg" src="../images/slika.jpg"  ></img>
           
 
    </section>


    )

}

export default Main

