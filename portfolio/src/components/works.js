import React, {useEffect,useState} from "react";
import { Link } from 'react-router-dom';
import "./works.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export default function Works () {
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);

    const handleClick = () => {

        setIsActive(current => !current);
    };
    const handleClick2 = () => {

        setIsActive2(current => !current);
    };
    const handleClick3 = () => {

        setIsActive3(current => !current);
    };
    const handleClick4 = () => {

        setIsActive4(current => !current);
    };
    const handleClick5 = () => {

        setIsActive5(current => !current);
    };
    const handleClick6 = () => {

        setIsActive6(current => !current);
    };

   


    return (
        <section id="works">
           
                <h1>Portfolio Projects</h1>
                <p> Here are screenshot's of some projects that I have been working on to show my acquired expirience and knowledge in the field. For more detailed code review of the enlisted projects please click the button bellow the images to visit my Github repo: </p>
                <p> (click on the image for better view)</p>
                
                <div className="pics">
                
                    <img style={{
                                  opacity: isActive ? 1 : " ",
                                  position: isActive ? "absolute" : " ",
                                  backgorundColor: isActive ? "rgb(58, 54, 54)" : " ",
                                  zIndex: isActive ? 1 : " ",
                                  height: isActive ? "115%" : "",
                                  width: isActive ? "100%": " ",  
                                  objectFit: isActive ? "scale-down" : " "

                                }} onClick={handleClick} src="../images/candy.png" ></img>


                    <img style={{
                                  opacity: isActive2 ? 1 : " ",
                                  position: isActive2 ? "absolute" : " ",
                                  backgorundColor: isActive2 ? "rgb(58, 54, 54)" : " ",
                                  zIndex: isActive2 ? 1 : " ",
                                  height: isActive2 ? "115%" : "",
                                  width: isActive2 ? "100%": " ",  
                                  objectFit: isActive2 ? "scale-down" : " "

                                }} onClick={handleClick2} src="../images/e-shop.png" ></img>
                    <img style={{
                                  opacity: isActive3 ? 1 : " ",
                                  position: isActive3 ? "absolute" : " ",
                                  backgorundColor: isActive3 ? "rgb(58, 54, 54)" : " ",
                                  zIndex: isActive3 ? 1 : " ",
                                  height: isActive3 ? "115%" : "",
                                  width: isActive3 ? "100%": " ",  
                                  objectFit: isActive3 ? "scale-down" : " "

                                }} onClick={handleClick3} src="../images/meme_gen.png" ></img>
                    <img style={{
                                  opacity: isActive4 ? 1 : " ",
                                  position: isActive4 ? "absolute" : " ",
                                  backgorundColor: isActive4 ? "rgb(58, 54, 54)" : " ",
                                  zIndex: isActive4 ? 1 : " ",
                                  height: isActive4 ? "115%" : "",
                                  width: isActive4 ? "100%": " ",  
                                  objectFit: isActive4 ? "scale-down" : " "

                                }} onClick={handleClick4} src="../images/pacman.png" ></img>
                    <img style={{
                                  opacity: isActive5 ? 1 : " ",
                                  position: isActive5 ? "absolute" : " ",
                                  backgorundColor: isActive5 ? "rgb(58, 54, 54)" : " ",
                                  zIndex: isActive5 ? 1 : " ",
                                  height: isActive5 ? "115%" : "",
                                  width: isActive5 ? "100%": " ",  
                                  objectFit: isActive5 ? "scale-down" : " "

                                }} onClick={handleClick5} src="../images/quiz.png" ></img>
                    <img style={{
                                  opacity: isActive6 ? 1 : " ",
                                  position: isActive6 ? "absolute" : " ",
                                  backgorundColor: isActive6 ? "rgb(58, 54, 54)" : " ",
                                  zIndex: isActive6 ? 1 : " ",
                                  height: isActive6 ? "115%" : "",
                                  width: isActive6 ? "100%": " ",  
                                  objectFit: isActive6 ? "scale-down" : " "

                                }} onClick={handleClick6} src="../images/E-shop2.png" ></img>

                </div>

                <AnimationOnScroll animateIn="sM"> <Link  to="https://github.com/ahmulia/portfolio_projects">Click here to inspect code from listed projects on my Github profile...  </Link>  </AnimationOnScroll>
        </section>
    )
}

