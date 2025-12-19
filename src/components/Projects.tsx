import projects from '../data/projects.json'

const Projects = () => (
    <div className="container mt-5 px-1" style={{textAlign: 'center'}}>
        <h1>My projects</h1>
        <h6>There is some projects I made and contribute during my free time and my academic years.</h6>
        {projects.map((project, index) => (
            <div key={index} className="card border-primary mb-3" style={{ textAlign: 'left' }}>
                <div className="card-header"><h5><b>{project.title}</b></h5></div>
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <img src={"images/projects/" + project.image} alt={"Project " + index} className="img-fluid rounded" style={{width:'100%'}}/>
                        </div>
                        <div className="col-md-8">
                            <ul className="card-text mb-0" style={{display: 'flow', gap: '5rem'}}>
                                {project.bodyText.map((text, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{__html: text}} />
                                ))}
                            </ul>
                            <div style={{marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center'}}>
                                {project.links?.map((link, index) => (
                                    <a key={index} href={link.href} target="_blank"><button type="button" className="btn btn-outline-primary">{link.text}</button></a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default Projects;
