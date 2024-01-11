import '../../assets/styles/Links.scss'
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
              <div className='hover-color'></div>
              <div className='hover-color1'></div>
            </Link>
        </ul>
        </>
    )
}
export default Links