import Girl from "./img/6girl.jpg";
import Bloga from "./img/blog2.jpg";
import Blogb from "./img/blog3.jpg";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="row justify-content-center" id="blog">
      <div className="col-12 text-center">
        <h1 id="blog-title">Recent Posts</h1>
        <p id="blog-p">
          Stay informed about the latest health trends and <br />
          practices for a healthy and happy lifestyle.
        </p>
      </div>

      <div className="col-md-3 col-11 mt-4">
        <img src={Girl} className="img-fluid" alt="girl" />
        <div className="article-detail">
          <h4 className="article-title">
            As an animal enthusiast and veterinarian{" "}
          </h4>
          <p className="article-date">March 15, 2023</p>
          <p className="article-desc">
            Regular exercise and a balanced diet are crucial for maintaining
            optimal health and preventing chronic diseases.
          </p>
          <p>
            <a className="article-link" href="#">
              Read More+
            </a>
          </p>
        </div>
      </div>
      <div className="col-md-3 col-11 mt-4">
        <img src={Bloga} className="img-fluid" alt="" />
        <div className="article-detail">
          <h4 className="article-title">
            As an animal enthusiast and veterinarian{" "}
          </h4>
          <p className="article-date">March 09, 2023</p>
          <p className="article-desc">
            Regular exercise and a balanced diet are crucial for maintaining
            optimal health and preventing chronic diseases.
          </p>
          <p>
            <a className="article-link" href="#">
              Read More+
            </a>
          </p>
        </div>
      </div>
      <div className="col-md-3 col-11 mt-4">
        <img src={Blogb} className="img-fluid" alt="" />
        <div className="article-detail">
          <h4 className="article-title">
            As an animal enthusiast and veterinarian{" "}
          </h4>
          <p className="article-date">March 11, 2023</p>
          <p className="article-desc">
            Regular exercise and a balanced diet are crucial for maintaining
            optimal health and preventing chronic diseases.
          </p>
          <p>
            <a className="article-link" href="#">
              Read More+
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
