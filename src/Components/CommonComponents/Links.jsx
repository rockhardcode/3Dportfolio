import '../../assets/styles/Links.css'
import { Link } from 'react-router-dom'
const Links = (prop) => {
 const {toLink, text} = prop
 console.log(toLink, text)
    return (
        <>
        <ul className="links-decoration">
            <Link to={toLink}>
              <li>
                {text}
              </li>
            </Link>
        </ul>
        </>
    )
}
export default Links