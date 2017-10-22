import React from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer';

const PostLiteral = (props) => {
    const images = props.images;
    let imageResults = images.map(image =>
        <div key={image.id} className="post__image-container">
            <img src={image.url} alt="" className="post__image-container__image"/>
        </div>
    )

    return (
        <div className="app-container--non-main">
            <NavBar/>
            <main className="app-container__main post">
                <article className="post__text-container">
                    <h4 className="post__title">{props.title}</h4>
                    {imageResults[0]}
                    <div className="post__text" dangerouslySetInnerHTML={{ __html: props.post }} />
                </article>
            </main>
            <Footer/>
        </div>
    );
}

export default PostLiteral;