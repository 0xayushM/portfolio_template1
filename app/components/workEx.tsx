import React, { useState } from "react";
import FilterBar from "./filterBar";
import workExData from "../data/workExData.json";

// Define a custom type for your JSON data
interface WorkExData {
  heading: string;
  data: {
    organization: string;
    duration: string;
    skills: string[];
    role: string;
    description: string[];
    type: string[];
  }[];
  links: {
    [key: string]: string;
  };
}

const WorkEx = () => {
  const types = ["All", ...new Set(workExData.data.flatMap((item) => item.type))];
  const [selectedType, setSelectedType] = useState<string>("All");

  const filteredData = selectedType === "All" ? workExData.data : workExData.data.filter((item) => item.type.includes(selectedType));

  // Function to add links to words based on the "links" section in the JSON data
  const addLinksToHighlightedWords = (content: any) => {
    return content.split(/<highlight>(.*?)<\/highlight>/g).map((part:any, index:any) => {
      if (index % 2 === 1) {
        // Odd-indexed parts are highlighted and should be linked if found in "links"
        const link = (workExData.links as WorkExData["links"])[part];
        if (link) {
          return (
            <a key={index} href={link}>
              {part}
            </a>
          );
        } else {
          // If no link is found, display the highlighted part without a link
          return (
            <span key={index} className="highlight">
              {part}
            </span>
          );
        }
      } else {
        // Even-indexed parts are not highlighted and should be displayed as is
        return part;
      }
    });
  };


  return (
    <div className="section">
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
              <div className="experience_name">{item.organization}</div>
              <div className="duration">{item.duration}</div>
            </div>
            <hr />
            <div className="role">{item.role}</div>
            <div className="work_skill">
              {item.skills.map((skill, index) => (
                <div className="work_skill_name" key={index}>
                  {skill}
                </div>
              ))}
            </div>
            <ul className="work_description">
              {item.description.map((bullet, index) => (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: addLinksToHighlightedWords(bullet),
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
