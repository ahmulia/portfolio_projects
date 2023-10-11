import React from "react";
import "./works.css"

export default function Works () {
    return (
        <section id="works">
           
                <h1>My portfolio</h1>
                <p>This react portfolio website can help you to showcase your work experience on online website. 
                    You can add this React JS portfolio website in your project and resume. </p>
                <div className="pics">
                
                <img src="../images/portfolio-1.png" ></img>
                <img src="../images/portfolio-2.png" ></img>
                <img src="../images/portfolio-3.png" ></img>
                <img src="../images/portfolio-4.png" ></img>
                <img src="../images/portfolio-5.png" ></img>
                <img src="../images/portfolio-6.png" ></img>
            </div>
        <button className="sM"> See more </button>
        </section>
    )
}