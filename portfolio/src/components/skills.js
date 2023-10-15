import React from "react";
import "./skills.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
export default function Skills () {

/* const [animate, setAnimate ] =  React.useState("cardss") */


    return (
        <section id="skills">
            
            <div className="text"> 
                <h1>What I do</h1>
                <AnimationOnScroll animateIn="wId">I'm passionate and self-tought web designer equiped with skills needed for creating interesting and user-friendly websites. I have a good understanding of software design and consistent aditute towards reaching a set out goals. I have been trained in working with HTML, CSS, JavaScript and React as well as in NodeJS. Front-end developing is something that interests me and I see it as huge field with lots of opportunities for improvement on daily basis.  </AnimationOnScroll>
            </div>

            <AnimationOnScroll animateIn="cards">
            
                <div className="cardss">
                    <img src="../images/ui-design.png"></img>
                        <div>
                            <h1 className="text2"> UI/UX design</h1>
                            <p>Creating easy to use yet "attention stealing" software products </p>
                        </div>
                </div>

                <div className="cardss">
                    <img src="../images/website-design.png" ></img>
                    <div>
                        <h1> Website design</h1>
                        <p>Responsive details but in the bigger picture</p>
                    </div>
                </div>

                <div className="cardss">
                <img src="../images/app-design.png" ></img>
                    <div>
                        <h1> App design</h1>
                        <p>Because its much more easier when you use an app for it! 😉 </p>
                     </div>
                </div>

            </AnimationOnScroll>

        </section>
    )


}

