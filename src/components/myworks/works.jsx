import Navbar from "../navbar/navbar"
import './works.css';
const Myworks = () => {
  return (
    <div className="myworkspage">
      <Navbar />
      <h1>Projects</h1>
      <div className="projectscontainer">
        
        <div className="project">
          <h2 className="projectname">Farm Link</h2>
          <p>
            Farm Link is a web application that connects farmers with customers, allowing them to sell their produce directly. This is build by using the Base44 AI. Application has two interfaces one for farmer and the other for customers.
          </p>
          <p><a className="prolink" href="https://app--farm-link-ddbff139.base44.app" target="blank">View project</a></p>
        </div>
        <div className="project">
          <h2 className="projectname">Grocers Galaxy</h2>
          <p>
            Grocers Galaxy is a web application that allows users to order groceries online. It has a user-friendly interface. The application is built using Angular. This application also has two interfaces one for admin to manage the products and the other for customers to place orders.
          </p>
          <p><a className="prolink" href="https://github.com/laxmiprasads/Grocers-Galaxy" target="blank">Source Code</a></p>
        </div>
        <div className="project">
          <h2 className="projectname">Optisight</h2>
          <p>OptiSight eye hospital website,built by using HTML, CSS, Bootstrap. It has different sections 
            like diseases, food care, blogs. The website is responsive and has a clean design.
          </p>
          <p><a className="prolink" href="https://slpoptisight.niat.tech/" target="blank">View project</a></p>
        </div>
      </div>
    </div>
  )
}


export default Myworks;