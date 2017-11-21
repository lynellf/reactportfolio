import React from 'react';
import NavStart from '../Nav/NavStart';
import NavEnd from '../Nav/NavEnd';
import Desktop from "../../Style/images/imac.svg";

const Article = (props) => {
    const image = props.imgUrl;
    let imageResults;
    if (image !== "") {
        imageResults = (
            <div className="article__item">
                <div className="article__display">
                    <img src={Desktop} alt="Desktop Display" className="article__imac" />
                </div>
                <img src={image} alt="" className="article__img" />
            </div>
            
        );
    } else if (image == "") {
        imageResults = "";
    }
    

    return (
        <div className="container">
            <header className="header">
                <NavStart />
            </header>
            <main className="main">
                <article  className="article">
                    <h2 className="title--medium article__title">{props.title}</h2>
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