import React from 'react';
// Import Data
import {dataProjects as data} from '../data/data';
// Components
import ProjectCard from './ProjectCard';


const Projects = () => {
    return (
        <div className="home">
            <h1>
                Here, Some projects...
                <div className="line"></div>
            </h1>
            <div className="info">
                <div>
                    <h2>Projects</h2>
                    <p align="justify">
                        Below are some personal projects that I have developed
                        in different technologies, if you want to see the source 
                        code of each project it is available in the link of each 
                        one, also in my github repository you can find different 
                        repositories of small projects or practices carried out.
                        Most of the projects are in constant development and 
                        improvement or even some may not have a working version yet.
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
 
export default Projects;