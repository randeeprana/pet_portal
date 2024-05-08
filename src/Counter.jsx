
import "./Counter.css";


const Counter = () => {
  return (
    <div className="row justify-content-center" id="counter-section">
      <div className="col-md-3 text-center text-white mt-5 mb-3">
        <i className="bi bi-heart-pulse counter-icon"></i>
        <h3>
          +3584564
          <br />
          Happy Client
        </h3>
      </div>
      <div className="col-md-3 text-center text-white mt-5 mb-3">
        <i className="bi bi-building-add counter-icon"></i>
        <h3>
          +7784677
          <br />
          Department
        </h3>
      </div>
      <div className="col-md-3 text-center text-white mt-5 mb-3">
        <i className="bi bi-eyedropper counter-icon"></i>
        <h3>
          +9776554
          <br />
          Vaccinations
        </h3>
      </div>
    </div>
  );
};

export default Counter;
