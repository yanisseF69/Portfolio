import me from "../assets/yanisse.jpg"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.png"

const Home = () => (
        <div className="container mt-5 px-1" style={{textAlign: 'center'}}>
            <div>
                <p><a href="https://github.com/yanisseF69" target="_blank"><img src={me} style={{marginLeft: '10px',float: 'right', maxWidth: '30%'}}></img></a></p>
                <br/><br/>
                <h1><b>Yanisse FERHAOUI</b></h1>
                <h2>Junior Software Engineer</h2>
                <h4>Contact : <a href="mailto:yanisseferhaoui@gmail.com">yanisseferhaoui@gmail.com</a></h4>
                <div style={{display: 'flex', gap: '10%', alignItems: 'center', justifyContent: 'center',}}>
                    <a href="https://github.com/yanisseF69" target="_blank"> <img src={github} style={{width: '3rem'}}></img></a>
                    <a href="https://www.linkedin.com/in/yanisse-ferhaoui/" target="_blank"><img src={linkedin} style={{width: '3rem'}}></img></a>
                </div>
            </div>
            <br/><hr/><br/>
            <div className="container px-lg-5">
                <p>
                    Junior Software Engineer graduated with a Master's degree, specializing in 3D Graphics and C++ development.

                    Through my academic and personal projects, I have built strong expertise in Qt, OpenGL, and computational geometry.
                    I am passionate about solving complex challenges and am looking for an opportunity to apply my technical skills in a dynamic R&D team.
                </p>
            </div>
        </div>
);

export default Home;
