import React, { Component } from 'react';
import NavStart from '../Nav/NavStart';
import NavEnd from '../Nav/NavEnd';
import axios from 'axios';
import Desktop from "../../Style/images/imac.svg";
import Loading from "../../Style/images/Rolling.svg";

class Article extends Component {
    constructor(props) {
        super();
        this.state = {
            title: '',
            contents: '',
            imgUrl: '',
            isLoading: true,
        }
    }

    componentDidMount() {
        axios.get(`/api/post/${this.props.match.params.id}`)
            .then(response => {
                console.log(response);
        this.setState({
            contents: response.data.post.post,
            title: response.data.post.title,
            imgUrl: response.data.post.imgUrl,
            isLoading: false
        })
    })
    }

    render() {
        const image = this.state.imgUrl;
        let imageResults;
        if (image !== "") {
            imageResults = (
                <div className="imac__container">
                    <div className="imac__display">
                        <img src={Desktop} alt="Desktop Display" className="imac__frame" />
                    </div>
                    <img src={image} alt="" className="imac__image" />
                </div>

            );
        } else if (image === "") {
            imageResults = "";
        }

        if (this.state.isLoading === true) {
            return (
                <div className="container__flex-column--white">
                    <img src={Loading} alt="Loading" className="centered" />
                </div>
            );
        } else {
            return (
                <div className="container">
                    <header className="header">
                        <NavStart />
                    </header>
                    <main className="main">
                        <div className="container__flex-column--white">
                            <h1 className="centered__text">{this.state.title}</h1>
                            <div className="container__main">
                                <article className="article">
                                    {imageResults}
                                    <div className="container__text" dangerouslySetInnerHTML={{ __html: this.state.contents }} />
                                </article>
                            </div>

                        </div>
                    </main>
                    <footer className="footer">
                        <NavEnd />
                    </footer>
                </div>
            );
    }
    }
}

export default Article;