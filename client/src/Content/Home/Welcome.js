import React from 'react';
import Ezell from './Images/ezell.jpg';
//Create a list of posts from the data passed as props

const Welcome = (props) => {
    return(
        <div className="welcome__intro grid__row">
            <div className="container--text grid__col--7 centered">
                <h3 className="title--medium">Background</h3>
                <p>I'm a junior-level full-stack web developer, 
                    experienced in project management, database design, 
                    front and back-end languages and practices. 
                </p>
                <h2 className="title--medium-bold welcome__skills">
                    JavaScript / React.js / Node.js / Express / MongoDB / Sass
                </h2>
                <h3 className="title--medium">About This Site</h3>
                <p>
                    I have created my home site using the MERN stack (Mongo, Express, React, Node.js). 
                    You're currently interacting with a single-page application (SPA)
                    with complete with its very own API responsible for creating, 
                    reading, updating, and deleting site content (CRUD). 
                </p>
            </div>
            <div className="welcome__image grid__col--3">
                <img className="profile-pic" src={ Ezell } alt="Image of Ezell Frazier"/>
            </div>
        </div>
      
    );
}

export default Welcome;
