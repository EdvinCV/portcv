import React from 'react';
import { VscGithub } from "react-icons/vsc";
import { SiCodewars } from "react-icons/si";
import SkillCard from './SkillCard';
// Import data
import {dataSkills as data} from '../data/data';

const About = () => {
    return (
        <div className="home">
            <h1 className="title">
                Hello, I'm Edvin Calderón Software Engineer
                <div className="line"></div>
            </h1>
            <div className="info-about">
                <div>
                    <img src={process.env.PUBLIC_URL + '/about-me.png'} alt="Developer" width="300px" />
                    <div className="line"></div>
                    <div className="pages-link">
                        <a href="https://github.com/EdvinCV" target="blank">
                            <VscGithub size="2rem" />
                        </a>
                        <a href="https://www.codewars.com/users/EdvinCV" target="blank">
                            <SiCodewars size="2rem" />
                        </a>
                    </div>
                </div>
                <div>
                    <h2>About Me</h2>
                    <p align="justify">
                    Since I started learning programming, I have work with many languages and frameworks like: C, Java, C#, Entity Framework, PHP, Laravel, Python, Django, Django Rest Framework.
                    But currently I'm mainly focused on web development and mobile applications with Javascript,
                    Python and Java, all of these mainly focused on backend development. You can see my general and specific knowledge in the following cards.
                    I consider myself an eternal learner, so I'm always improving my skills in the technologies mentioned and excited to learn new ones. :)
                    </p>
                    <p>GMAIL: <b>edvinc97@gmail.com</b></p>
                </div>
            </div>
            <div className="projects">
                {
                    data.map((element, index) => {
                        return <SkillCard key={index} data={element} />
                    })
                }
            </div>
        </div>
    );
}
 
export default About;