import me from "../assets/yanisse.jpg"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.png"

const Home = () => (
  <div className="container mt-5 px-1">

    <div className="d-flex align-items-center justify-content-center flex-wrap text-center gap-5">

      <div style={{ maxWidth: "600px" }}>
        <h1><b>Yanisse FERHAOUI</b></h1>
        <h2>Software Engineer</h2>
        <h4>
          Contact : <a href="mailto:yanisseferhaoui@gmail.com">yanisseferhaoui@gmail.com</a>
        </h4>

        <div className="d-flex justify-content-center gap-4 mt-3">
          <a href="https://github.com/yanisseFrh" target="_blank" rel="noreferrer">
            <img src={github} style={{ width: "3rem", height: "3rem" }} />
          </a>

          <a href="https://www.linkedin.com/in/yanisse-ferhaoui/" target="_blank" rel="noreferrer">
            <img src={linkedin} style={{ width: "3rem", height: "3rem" }} />
          </a>
        </div>
      </div>

      <div>
        <a href="https://github.com/yanisseFrh" target="_blank" rel="noreferrer">
          <img
            src={me}
            alt="Yanisse"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "250px" }}
          />
        </a>
      </div>

    </div>

    <br /><hr /><br />

    {/* DESCRIPTION */}
    <div className="container px-lg-5 text-center">
      <h6 style={{ maxWidth: "800px", margin: "0 auto" }}>
        Software Engineer graduated with a Master's degree, specializing in 3D Graphics, C++ development and AI.<br></br>

        Through my academic and personal projects, I have built strong expertise in Qt, OpenGL, computer vision and computational geometry.<br></br>
        I am passionate about solving complex challenges and am looking for an opportunity to apply my technical skills in a dynamic R&D team.
      </h6>
    </div>

  </div>
);

export default Home;
