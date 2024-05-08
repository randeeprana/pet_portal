import Man from "./img/7man.jpg";

import "./Service.css";

const Service = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-5 col-11" id="service-text">
        <h1>
          As a veterinarian and <br></br> lover of animals.
        </h1>
        <p>
          As a veterinarian and animal lover, I am committed to promoting the
          health and well-being of all creatures great and small. Through
          compassionate care, education, and advocacy, we can create a world
          where all animals can thrive and live their best lives.
        </p>
        <button type="button" className="btn" id="Service-btn">
          Our Service
        </button>
      </div>
      <div className="col-md-5" id="service-img">
        <img src={Man} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default Service;
