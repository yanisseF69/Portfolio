import personal from '../data/personal.json'

const Personal = () => (
    <div className="container mt-5 px-1" style={{textAlign: 'center'}}>
        <h1>About Me</h1>
        <br></br><br></br>
        <div className="container row align-items-center">
    
            <div className="col-md-6">
            {personal.desc.map((item) => (
                <h6 className='mb-4'>{item}</h6>
            ))}
            </div>

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
