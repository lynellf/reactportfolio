import React from 'react';
import NavBar from './NavBar.js';
import Slider from 'react-slick';
import Footer from './Footer';

const PostLiteral = (props) => {
    const images = props.images;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        autoplay: true,
        //CenterPadding to 0 fixes overlapping slide images.
        centerPadding: 0,
        centerMode: true,

    }
    let imageResults = images.map(image =>
        <div key={image.id}>
            <img src={image.url} alt="" className="slick-image img-rounded img-responsive"/>
        </div>
    )

    return (
        <div className="sub-page">
            <NavBar/>
            <div className="post-container">
                <div className="post-content-container">
                    <h4>{props.title}</h4>
                    <div className="post-literal" dangerouslySetInnerHTML={{ __html: props.post }} />
                </div>
                <div className="image-container">
                    <Slider {...settings}>
                        {imageResults}
                    </Slider>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default PostLiteral;