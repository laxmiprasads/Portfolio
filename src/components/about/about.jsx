import Navbar from "../navbar/navbar";
import './about.css';
const About = () => {
  return(
    <div className="aboutpage">
      {/* <Navbar /> */}
      <div className="container">
        <div className="aboutcontent">
          <h1>Hello, I am <span className="goldcolortext">Laxmi Prasad</span></h1>
          <h3>First Year Engineering Student & Aspiring Developer</h3>
          <p>Currently, I am pursuing a Bachelor's degree in Computer Science at NIAT, where I am in my first year.<br></br> My goal is to work in a technology-driven company where I can apply my knowledge and continue<br></br> to grow as a developer. Outside of academics I love to play table tennis and listen to music.</p>
          <p>Passionate about technology, innovation, and creating solutions that make a difference.<br></br>Currently exploring the fascinating world of engineering and programming.</p>
        </div>
        <div className="educationcontainer">
        <h1 className="educationheading">Education</h1>
        <div>
          <div className="containers">
          <div className="education">
            <img src="https://content3.jdmagicbox.com/v2/comp/jaipur/b5/0141px141.x141.250317153224.y5b5/catalogue/nxtwave-institute-of-advanced-technologies-niat-jaipur-kanota-jaipur-colleges-cl2cyl1vev.jpg" className="logopic" alt="NIAT" />
            <h3>NxtWave Institute of Advanced Technologies</h3>
            <p><span className="boldtext">Course: </span>Computer Science Program in Data Science and Machine Learning Specialization</p>
            <p><span className="boldtext">Year: </span>2024-2028</p>
          </div>
          <div className="education">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png" className="logopic" alt="BITS" />
            <h3>BITS Pilani, Hyderabad Campus</h3>
            <p><span className="boldtext">Degree: </span>Bsc in Computer Science</p>
            <p><span className="boldtext">Year: </span>2024-2027</p>
          </div>
          </div>
          <div className="containers">
          <div className="education">
            <img src="https://www.eduska.com/assets/user_logo/705e8b2fa1bb84a4e9e2c57ae1975bcc.jpg" className="logopic" alt="srichaitanya" />
            <h3>Sri Chaitanya College of Education</h3>
            <p><span className="boldtext">Course: </span>MPC</p>
            <p><span className="boldtext">Year: </span>2022-2024</p>
            <p><span className="boldtext">Grade: </span>88%</p>
          </div>
          <div className="education">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQ7C_B1uzAbnp57Q_rZmyZ6W2KnrRjM1vHg&s" className="logopic" alt="paramita" />
            <h3>Paramitha Heritage School</h3>
            <p><span className="boldtext">Board: </span>CBSE</p>
            <p><span className="boldtext">Year: </span>2021-2022</p>
            <p><span className="boldtext">Grade: </span>80%</p>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About;
