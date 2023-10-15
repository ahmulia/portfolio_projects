
import React, {useRef} from "react";
import "./contact.css"
import emailjs from '@emailjs/browser';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import { Link } from 'react-router-dom';

export default function Contact () {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_bknmm3o', 'template_ewt589e', form.current, 'JFwT4RnDnBO4i-FB1')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email Sent!");
          }, (error) => {
              console.log(error.text);
          });
      };
    

    return (

        <section id="contact"> 
            <h1> Contact Me </h1>
            <span className="contactDesc"> Please fill out the form below to discuss any work or intership opportunities</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name="from_name"/> 
                <input type="email" className="email" placeholder="Your Email" name="from_email"/>
                <textarea name="message" className="msg" rows="5" placeholder="Your Message"></textarea>
                <button type="submitBtn" value="Send" className="submitBtn">Submit</button>

            </form>
            <h1>Look up my profile on: </h1>
            <AnimationOnScroll animateIn="linkedInN">
                   <Link  to="https://www.linkedin.com/in/ahmed-kukuruz-b0225a278/"  > <img  src="../images/linked_in.png" alt="" className="linkedIn"/> </Link>
            </AnimationOnScroll>
            

         
            
        </section>
    )

}