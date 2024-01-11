import "../../assets/styles/Project.scss"
import { MoveableImage } from "../CommonComponents/movableImage"
import image from '../../assets/images/thumbnail5.jpg'
const Projects = () => {
    return (
        <div className="main-container-project">
            <div className="project-container">
                <p className="project-name">project1</p>
                <div className="project-image-container">
                {/* <img className="image-container" src={image} alt="sdf" /> */}
                <MoveableImage/>
                </div>
            </div>
        </div>
    )
}
export default Projects