import Image from 'next/image';
import React from 'react';
import profileData from '../data/profileData.json';

const Profile = () => {
    const { greeting, profileImage, description } = profileData;


    return (
        <div className='profile_section'>
            <h1 className='heading'>
                {greeting}
            </h1>
            <div className='section_container'>
                <Image src={profileImage.src} height={profileImage.height} width={profileImage.width} alt={profileImage.alt} />
                <div className='description'>
                    <div className='content'>
                        <p dangerouslySetInnerHTML={{ __html: description.content.replace(/<highlight>/g, '<span class="highlight">').replace(/<\/highlight>/g, '</span>') }} />
                        <br />
                        <p>What I do :</p>
                        <ul>
                            {description.bulletedContent.map((bullet, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: bullet.replace(/<highlight>/g, '<span class="highlight">').replace(/<\/highlight>/g, '</span>') }} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
