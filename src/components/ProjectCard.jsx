import React from 'react'
import { VscGithub } from "react-icons/vsc";

const ProjectCard = ({data}) => {
    const {image, title, description, git, skills} = data;
    return (
        <div className="card-container">
	        <img className="" src={process.env.PUBLIC_URL + `/${image}.png`} alt="user" width="200px" />
	        <h3>{title}</h3>
	        <p>{description}</p>
            <div className="pages-link">
                <a href={git} target="blank">
                    <VscGithub size="2rem" />
                </a>
                {/* <a href={live} target="blank">
                    <AiOutlineCloudServer size="2rem" />
                </a> */}
            </div>
            <div className="skills">
                <h6>Technologies:</h6>
                <ul>
                    {
                        skills.map((i, index) => {
                            return <li key={index}>{i}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}
 
export default ProjectCard;
