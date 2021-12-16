import React from 'react'
import "./About.css"

function About() {
    const socials = [
        {
            id: "insta",
            link: "https://www.instagram.com/imsaifx/",
            image: "https://o.remove.bg/downloads/6d7e0fdf-7620-4b93-b1f6-a753b0637c7c/images-removebg-preview.png"
        },
        {   
            id: "fb",
            link: "https://www.facebook.com/imsaifeldin",
            image: "https://worldsummit.ai/wp-content/uploads/sites/4/2021/07/Facebook-logo.png"
        },
        {
            id: "twitter",
            image: "https://upload.wikimedia.org/wikipedia/ar/thumb/9/9f/Twitter_bird_logo_2012.svg/950px-Twitter_bird_logo_2012.svg.png",
            link: "https://twitter.com/imsaifx"
        }
    ]

    return (
        <div className="footer">
            {socials.map(app=>{
                return(
                    <div>
                        <a href={app.link} rel="noreferrer" target="_blank"><img src={app.image} alt="" className="about-logos" id={app.id}/></a>
                    </div>
                )
            })}
        </div>
    )
}

export default About
 