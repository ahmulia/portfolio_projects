import React from 'react'
import "./navBar.css"
import { Link } from "react-scroll";


const NavBar = () => {
  const[showMenu, setShowMenu] =  React.useState(false);
  return (
    <nav id="navBar">
        
            <img className='W' src='../images/logo.png'></img>

            <div className='sections'>
                <Link activeClass="active" to="main" spy={true}  smooth={true} offset={-100} duration={500} className='ccc'>Home</Link>      
                <Link activeClass="active" to="skills" spy={true}  smooth={true} offset={-140} duration={500} className='ccc'>About</Link>      
                <Link activeClass="active" to="works" spy={true}  smooth={true} offset={-100} duration={500} className='ccc'>Portfolio</Link>      
                <Link activeClass="active" to="tools" spy={true}  smooth={true} offset={-140} duration={500} className='ccc'>Contact</Link>      
            </div>

            <button className='contactEl' onClick={() => { document.getElementById('contact').scrollIntoView({behavior:"smooth"})}}>
                <img src='../Images/contact.png'></img>
                <h3>Contact me</h3>      
            </button>

            <img src='../images/menu.png' className='mobMenu' onClick={ () => setShowMenu (!showMenu)}/>

            <div className='navMenu' style={ {display: showMenu? "flex" : "none"}}>
                <Link activeClass="active" to="main" spy={true}  smooth={true} offset={-100} duration={500} className = 'listItem' onClick={ () => setShowMenu (false) } >Home</Link>      
                <Link activeClass="active" to="skills" spy={true}  smooth={true} offset={-140} duration={500} className = 'listItem' onClick={ () => setShowMenu (false) } >About</Link>      
                <Link activeClass="active" to="works" spy={true}  smooth={true} offset={-100} duration={500} className = 'listItem' onClick={ () => setShowMenu (false) } >Portfolio</Link>      
                <Link activeClass="active" to="tools" spy={true}  smooth={true} offset={-140} duration={500} className = 'listItem' onClick={ () => setShowMenu (false) } >Contact</Link>      
            </div>
        
            

    </nav>
  )
}

export default NavBar