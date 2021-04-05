import React from 'react';

const SkillCard = ({data}) => {
    const {image, title, skills } = data;
    return (
        <div className="card-container pro">
	        <img className="" src={process.env.PUBLIC_URL + `/${image}`} alt="user" width="150px" />
	        <h3>{title}</h3>
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
 
export default SkillCard;
