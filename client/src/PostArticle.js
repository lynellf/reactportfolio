import React from 'react';
import NavStart from './NavStart.js';
import NavEnd from './NavEnd';

const PostArticle = (props) => {
    const image = props.imgUrl;
    let imageResults = (
        <img src={image} alt="" className="article__image"/>
    )

    return (
        <div className="container--site">
            <header>
                <NavStart />
            </header>
            <main>
                <article>
                    <h4 className="title--medium">{props.title}</h4>
                    { imageResults }
                    <div className="container--text" dangerouslySetInnerHTML={{ __html: props.post }} />
                </article>
            </main>
            <footer>
                <NavEnd />
            </footer>
        </div>
    );
}

export default PostArticle;