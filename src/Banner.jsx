import './Banner.css';
import Dog from "./img/dog.png"


const Banner = () => {
  return (
    
    <div className="row justify-content-center" id="banner">
      <div className="col-md-6 col-11" id="bannertext">
        <h1>First i wanted to be a Veterinarian</h1>
        <p>
          From a young age, I found myself drawn to animals and their welfare.
          As I grew older, I realized that my passion for helping animals could
          be fulfilled through a career as a veterinarian. It is my aspiration
          to heal and care for animals for years to come.
        </p>
        <button type="button" className="btn" id="banner-btn-1">
          Contact Us
        </button>
        <button type="button" className="btn" id="banner-btn-2">
          Our Service
        </button>
      </div>
      <div className="col-md-4 d-none d-md-block" id="bannerimg">
        <img src={Dog} alt="dog" className="img-fluid" />
      </div>
    </div>
  );
};

export default Banner;
