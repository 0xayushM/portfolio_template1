import Image from 'next/image';
import React from 'react';
import profileData from '../data/profileData.json';

type LinksType = {
    [key: string]: string;
  };

const Profile = () => {
  const { greeting, profileImage, description, links } = profileData as {greeting:any, profileImage:any, description:any,links: LinksType};

  // Function to add links to words based on the "links" section in the JSON data
  const addLinksToHighlightedWords = (content : any) => {
    const words = content.split(/<highlight>|<\/highlight>/); 
    return words.map((word:any, index:any) => {
      if (index % 2 === 0) {
        return <span key={index}>{word}</span>;
      } else {
        const link = links[word];
        if (link) {
          return (
            <a className='wordLink' key={index} href={link}>
              {word}
            </a>
          );
        } else {
          return <span key={index}>{word}</span>;
        }
      }
    });
  };

  return (
    <div className='profile_section'>
      <h1 className='heading'>{greeting}</h1>
      <div className='section_container'>
        <Image src={profileImage.src} height={profileImage.height} width={profileImage.width} alt={profileImage.alt} />
        <div className='description'>
          <div className='content'>
            <p>
              {addLinksToHighlightedWords(description.content)}
              <br />
              What I do :
            </p>
            <ul>
              {description.bulletedContent.map((bullet:any, index:any) => (
                <li key={index}>{addLinksToHighlightedWords(bullet)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
