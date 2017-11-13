import React from 'react';
import NavStart from '../Nav/NavStart';
import NavEnd from '../Nav/NavEnd';

const Article = (props) => {
    const image = props.imgUrl;
    let imageResults = (
        <img src={image} alt="" className="article__image"/>
    )

    return (
        <div className="container--site">
            <header className="header">
                <NavStart />
            </header>
            <main className="main">
                <article  className="article">
                    <h2 className="title--medium">{props.title}</h2>
                    { imageResults }
                    <div className="container--text" dangerouslySetInnerHTML={{ __html: props.post }} />
                </article>
            </main>
            <footer className="footer">
                <NavEnd />
            </footer>
        </div>
    );
}

export default Article;