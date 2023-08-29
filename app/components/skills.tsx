import Image from 'next/image';
import React from 'react';
import skillsData from '../data/skillsData.json'; // Adjust the path based on your actual folder structure
import ToolTip from './toolTip';

const Skills = () => {
    return (
        <div className="section scroll_section">
            <h1 className="heading">{skillsData.heading}</h1>
            <div className="skills_container">
                <div className="sub_container">
                    {skillsData.data.map(skill => (
                        <div className="icon_container" key={skill.name}>
                            <ToolTip section='skills' tooltip={skill.name}>
                            <Image className="image" src={skill.image} height={skill.height} width={skill.width} alt={skill.alt} data-tooltip={skill.name} />
                            </ToolTip>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Skills;
