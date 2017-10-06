import React from 'react';
import {Link} from 'react-router-dom';

const Main = () => {
  return(
    <main className="projects">
      <div className="project-detail">
        <Link to="#" ><h4 className="portfolio-item">React Flickr Search </h4></Link>
        <Link to="#" ><h4 className="portfolio-item">jQuery Photo Gallery </h4></Link>
        <Link to="#" ><h4 className="portfolio-item">Sample Portfolio Page </h4></Link>
      </div>
    </main>
  );
}

export default Main;
