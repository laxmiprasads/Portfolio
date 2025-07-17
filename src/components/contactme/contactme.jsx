import Navbar from "../navbar/navbar";
import './contactme.css';
const ContactMe = () => {
  return(
    <div className="contactmepage">
      <Navbar/>
      <div className="contactmecontainer">
        <h1 className="contactmeheading">Contact Me</h1>
        <div className="contactmedetailscontainer">
        <div className="contactmedetails">
          <i class="fa-solid fa-phone"></i>
          <p>+91 9879879879</p>
        </div>
        <div className="contactmedetails">
          <i class="fa-solid fa-envelope"></i>
          <p>s.laxmiprasad2006@gmail.com</p>
        </div>
        <div className="contactmedetails">
          <i class="fa-brands fa-linkedin"></i>
          <p>https://www.linkedin.com/in/laxmi-prasad-suraram</p>
        </div>
        <div className="contactmedetails">
          <i class="fa-brands fa-github"></i>
          <p>https://github.com/laxmiprasads</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe;
