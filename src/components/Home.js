import React from 'react';
import { VscGithub } from "react-icons/vsc";
import { SiCodewars } from "react-icons/si";
// Components
import ProjectCard from './ProjectCard';

const Home = () => {
    const data = [
        {image: "projectTasks", title: "ProjectTasks", description: "This is an application for managing project tasks -> Allows to create an account, login, create projects, create, update and delete tasks of your own projects.", git: "https://github.com/EdvinCV/ProjectTasks", live: "", skills: ["Javascript", "React.js", "Context API", "Hooks", "React Router", "Node.js", "Express", "Express Router", "JWT Authentication", "MongoDB"],},
        {image: "tuixter", title: "Tuixter - *RECENTLY STARTED*", description: "This project is a clone of the basic functionality of Twitter -> Allows to create an account, login, write a tuix, follow people, searching by hashtags and select favorites tuixs.", git: "https://github.com/EdvinCV/TuixterApp", live: "", skills: ["Express", "Express.js", "Sequelize", "JWT", "Oauth 2.0", "Dotenv", "Express-Validator", "React.js", "Redux", "React Router", "Ant Design"],},
    ]
    return (
        <div className="home">
            <h1 className="title">
                Welcome to my portfolio...
                <div className="line"></div>
            </h1>
            <div className="info">
                <div>
                    <img src={process.env.PUBLIC_URL + '/dev.png'} alt="Developer" width="300px" />
                    <div className="line"></div>
                    <div className="pages-link">
                        <a href="https://github.com/EdvinCV" target="blank">
                            <VscGithub size="2rem" />
                        </a>
                        <a href="https://www.codewars.com/users/EdvinCV" target="blank">
                            <SiCodewars size="2rem" />
                        </a>
                        {/* <a href="https://github.com">
                            <FiYoutube size="2rem" />
                        </a> */}
                    </div>
                </div>
                <div>
                    <p align="justify">
                        Since I had the opportunity to have my first computer,
                        I knew what I was going to do for the rest of my life,
                        this led me to delve into this world and study engineering.
                        I'm currently a computer science and systems engineer 
                        with a passion for everything related to software development.
                        I'm an enthusiastic person, responsible but above all passionate and 
                        an eternal learner in the world of computing.
                        Along the different pages you can find about my different skills and knowledge
                        and some personal projects.
                    </p>
                </div>
            </div>
            <div className="projects">
                {
                    data.map((project, index) => {
                        return <ProjectCard key={index} data={project} />
                    })
                }
            </div>
        </div>
    );
}
 
export default Home;