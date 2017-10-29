import React from 'react';
import Header from './Header.js';
import Footer from './Footer';

const PostLiteral = (props) => {
    const image = props.imgUrl;
    let imageResults = (
        <div  className="post__image-container">
            <img src={image} alt="" className="post__image-container__image"/>
        </div>
    )

    return (
        <div className="app-container--non-main">
            <Header/>
            <main className="app-container__main post">
                <article className="post__text-container">
                    <h4 className="post__title">{props.title}</h4>
                    { imageResults }
                    <div className="post__text" dangerouslySetInnerHTML={{ __html: props.post }} />
                </article>
            </main>
            <Footer/>
        </div>
    );
}

export default PostLiteral;