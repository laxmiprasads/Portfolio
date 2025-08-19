import './home.css';
import Navbar from '../navbar/navbar.jsx';
import { Link } from 'react-router-dom';
import About from '../about/about.jsx';
import Skills from '../skill/skills.jsx';



const Home = () => {
  return(
    <div>
    <div className='homepage'>
      <Navbar />
      <div className='text'>
        <div className='textandimage'>
          <div className="hero">
            <h1>Welcome to My Portfolio</h1>
            <h4>Explore my projects and skills</h4>
            <button className='contactmebtn'>
              <Link className='linkcmbtn' to="/contactme">
              Contact Me
            </Link>
            </button>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dsjnzy0du/image/upload/v1752557634/portfolio_pp_tfwn9l.jpg" alt="Profile" className='profilepic' />
          </div>
        </div>
      </div>
    </div>
    <About />
    <Skills />
    </div>
  )
}

export default Home;