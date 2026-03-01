import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import education from '../data/education.json'

const Education = () => (
    <div className="container mt-5 px-1" style={{textAlign: 'center'}}>
        <h1>Education</h1>
        <br></br>
        <VerticalTimeline
        lineColor='DodgerBlue'
        >
            {education.map((data, index) => (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(240, 240, 240, 1)', color: '#000000ff', border: '1px solid DodgerBlue' }}
                    contentArrowStyle={{ borderRight: '7px solid DodgerBlue'}}
                    date={data.date}
                    iconStyle={{ 
                        background: 'DodgerBlue', 
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    icon={<img 
                        src={"images/education/" + data.logo} 
                        alt={"Logo " + index}
                        style={{ width: '3rem', height: '3rem', alignContent: '', borderRadius: '50%'}}
                        />}
                >
                    <h3 className="vertical-timeline-element-title">{data.curriculum}</h3>
                    <h5 className="vertical-timeline-element-subtitle" style={{ color: 'dodgerblue'}}>{data.school}</h5>
                    <br></br>
            
                    <ul style={{ listStyleType: '', textAlign: 'left', marginBottom: '10px'}}>
                    {data.description.map((item) => (
                        <li style={{ marginBottom: '10px'}}>
                            <p key={index}>
                                <b>{item.title} :</b> {item.content}
                            </p>
                        </li>
                        
                    ))}
                    </ul>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
            </div>
        )

export default Education;