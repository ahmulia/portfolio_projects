import React from "react";
import "./tools.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export default function Tools () {

    return (
        <section id="tools">

            <h1> My developing tools <span>:</span> </h1>

            <div className="images">

                    <div className="trica">
                    <AnimationOnScroll animateIn="trica2"> <img className="trica2" src="../images/trica_log.png" ></img> </AnimationOnScroll>
                    <AnimationOnScroll animateIn="react"> 
                        <img className="react" src="../images/react2_logo.png" ></img>
                    </AnimationOnScroll>
                    </div>

                 

            </div>

            
        </section>


    )
}