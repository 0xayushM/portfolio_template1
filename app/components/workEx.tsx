"use client";

import React, { useState } from "react";
import FilterBar from "./filterBar";
import workExData from "../data/workExData.json";

const WorkEx = () => {
  const types = ["All", ...new Set(workExData.data.flatMap((item) => item.type))]; 
  const [selectedType, setSelectedType] = useState<string>("All"); 

  const filteredData = selectedType === "All" 
    ? workExData.data
    : workExData.data.filter((item) => item.type.includes(selectedType));

  return (
    <div className="section sm:h-screen flex flex-col ">
      <h1 className="heading">{workExData.heading}</h1>
      <FilterBar
        types={types}
        selectedType={selectedType}
        onSelectType={setSelectedType}
      />
      <div className="experience_container">
        {filteredData.map((item, index) => (
          <div key={index} className="experience_content">
            <div className="title_box pb-4">
              <div className="experience_name"> {item.organization}</div>
              <div className="duration ">{item.duration}</div>
            </div>
            <hr />
            <div className="role">{item.role}</div>
            <div className="work_skill">
            {item.skills.map((skill,index) => (
                <div className="work_skill_name" key= {index}>{skill}
                    </div>
            ))}
            </div>
            <ul className="work_description">
              {item.description.map((bullet, index) => (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: bullet
                      .replace(/<highlight>/g, '<span class="highlight">')
                      .replace(/<\/highlight>/g, "</span>"),
                  }}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkEx;
