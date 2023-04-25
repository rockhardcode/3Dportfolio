import React from "react"
import '../../assets/styles/Home.css'
import ProfileName from "../CommonComponents/ProfileName"

const Home = () => {
    return (
        <div className="home-container">
            <div className="profile-name">
                <ProfileName/>
            </div>
            <div className="canvas-container">canvas</div>
        </div>
    )
}
export default Home