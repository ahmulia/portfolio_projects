
import React, {useRef} from "react";
import "./contact.css"
import emailjs from '@emailjs/browser';


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
                <div >
                    <img  src="../images/linked_in.png" alt="" className="linkedIn"/> 
                </div>
        </section>
    )

}