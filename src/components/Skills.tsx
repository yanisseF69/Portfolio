import skills from '../data/skills.json'

const Skills = () => (
  <div className="container mt-5">
    <h1 className="text-center mb-5">Computer Skills</h1>
    <h5 className="text-center" >Here’s a list of programming languages and tools I’m familiar with, along with the reasons I’ve used them.</h5>
    <br></br>
    <div className="row g-4">
        <h4>Languages</h4>

      {skills.languages.map((skill, index) => (
        <div key={index} className="col-md-4">
          <div className="card h-100 shadow-sm text-center p-3">
            <img
              src={"images/skills/" + skill.logo}
              alt={skill.name}
              style={{width: "60px", margin: "0 auto 15px auto"}}
            />

            <h5>{skill.name}</h5>
            <br></br>
            <ul style={{ textAlign: 'left'}}>
                {skill.examples.map((ex) => (
                    <li style={{textAlign: 'left'}}>
                        <h6>{ex}</h6>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      ))}

    </div>

    <br></br>

    <div className="row g-4">
        <h4>Frameworks</h4>

      {skills.frameworks.map((framework, index) => (
        <div key={index} className="col-md-4">
          <div className="card h-100 shadow-sm text-center p-3">
            <img
              src={"images/skills/" + framework.logo}
              alt={framework.name}
              style={{width: "60px", margin: "0 auto 15px auto"}}
            />

            <h5>{framework.name}</h5>
            <br></br>
            <ul style={{ textAlign: 'left'}}>
                {framework.examples.map((ex) => (
                    <li style={{textAlign: 'left'}}>
                        <h6>{ex}</h6>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      ))}

    </div>

    <br></br>

    <div className="row g-4">
        <h4>Tools</h4>

      {skills.tools.map((tool, index) => (
        <div key={index} className="col-md-4">
          <div className="card h-100 shadow-sm text-center p-3">
            <img
              src={"images/skills/" + tool.logo}
              alt={tool.name}
              style={{width: "60px", margin: "0 auto 15px auto"}}
            />

            <h5>{tool.name}</h5>
            <br></br>
            <ul style={{ textAlign: 'left'}}>
                {tool.examples.map((ex) => (
                    <li style={{textAlign: 'left'}}>
                        <h6>{ex}</h6>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      ))}

    </div>
  </div>
);

export default Skills;