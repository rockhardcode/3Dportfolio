import React from "react"
import '../../assets/styles/NavBar.css'
import Logo from '../../assets/images/flogo.png'
import Links from "../CommonComponents/Links"

const NavBar = () => {
    // const navLinks = ['Home', 'About', 'Skills', 'Experience', 'ContactMe']
    const navLinks = [{
        text:'Home',
        linkName:'/'
    },
    {
        text:'About',
        linkName:'/about'
    },
    {
        text:'Skills',
        linkName:'/skills'
    },
    {
        text:'Projects',
        linkName:'/projects'
    },
    {
        text:'Experience',
        linkName:'/experience'
    },
    {
        text:'Contact Me',
        linkName:'/contactme'
    },
]
    return (
        <div className="nav-container">
            <div><img src={Logo} alt="logo" /></div>
            <div className="nav-link-container">
                {navLinks.map((link)=>{
                   return <Links toLink={`${link.linkName}`} key={link.text} text={link.text}/>
                })}
            </div>
        </div>
    )
}
export default NavBar