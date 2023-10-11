import React from "react";
import "./skills.css";


export default function Skills () {

    return (
        <section id="skills">
            
            <div className="text"> 
                <h1>What I do</h1>
                <p>In this tutorial we will make personal portfolio website design in React JS. This personal portfolio website or Resume website will contains the personal information, skills, work experience or portfolio, clients details and contact section with fully function contact form. This contact form will send the enquiries to your email address.</p>
            </div>

            <div className="cards">
            
                <div className="cardss">
                    <img src="../images/ui-design.png"></img>
                        <div>
                            <h1 className="text2"> UI/UX design</h1>
                            <p>This is a demo demo deemmmoooooo jjjh</p>
                        </div>
                </div>

                <div className="cardss">
                    <img src="../images/website-design.png" ></img>
                    <div>
                        <h1> Website design</h1>
                        <p>This is a demo sssssssssssssssssssssssssssssssssssssss demo deemmmoooooo jjjh</p>
                    </div>
                </div>

                <div className="cardss">
                <img src="../images/app-design.png" ></img>
                    <div>
                        <h1> App design</h1>
                        <p>This is a demo demo deemmmoooooo jjjh</p>
                     </div>
                </div>

            </div>

        </section>
    )


}

