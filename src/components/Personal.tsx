import personal from '../data/personal.json'

const Personal = () => (
    <div className="container mt-5 px-1" style={{textAlign: 'center'}}>
        <h1>About Me</h1>
        <br></br><br></br>
        <div className="container row align-items-center">
    
            {/* LEFT SIDE - TEXT */}
            <div className="col-md-7">
            {personal.desc.map((item) => (
                <p>{item}</p>
            ))}
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="col-md-5 text-center">
            <img
                src="images/personal/profile.png"
                alt="Portrait"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "300px" }}
            />
            </div>

        </div>
    </div>
)

export default Personal;
