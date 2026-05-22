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
        Software Engineer with a Master’s degree, focused on 3D graphics, C++ development, and artificial intelligence.<br /><br />

        I enjoy building things that connect low-level systems (C++, GPU, OpenGL) with modern AI and computer vision. Through academic and personal projects, I’ve worked on everything from real-time 3D rendering engines to AI-powered tools and medical imaging applications.<br /><br />

        I’m particularly interested in R&D environments where I can explore complex technical problems, learn continuously, and turn ideas into working systems.
      </h6>
    </div>

  </div>
);

export default Home;
