import React from 'react';
import Slider from 'react-slick';
import BannerSlide from '../Slider/BannerSlide';
import './main';
import './style.css';

const Banner = () => {
    const slide = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplayspeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="banner-style-4 rn-section-gapTop">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-12 order-2 order-lg-1 mt_md--40 mt_sm--40">
                        <div className="sldier-content">
                            <h2
                                className="title"
                                data-sal="slide-up"
                                data-sal-delay="200"
                                data-sal-duration="800"
                            >
                                Search your rare NFT&rsquo;s by world <br /> class artists
                            </h2>
                            <p
                                className="banner-disc-one"
                                data-sal="slide-up"
                                data-sal-delay="250"
                                data-sal-duration="800"
                            >
                                Where Bitcoin was hailed as the digital answer to currency, NFTs
                                <br /> are now being touted as the digital answer to collectables.
                            </p>
                            <div className="button-group">
                                <a
                                    className="btn btn-large btn-primary"
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-duration="800"
                                    href="#!"
                                >
                                    Get Started
                                </a>
                                <a
                                    className="btn btn-large btn-primary-alta"
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-duration="800"
                                    href="create.html"
                                >
                                    Create
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 order-1 order-lg-2">
                        <div className="slider slick-activation-04">
                            <Slider {...slide}>
                                <BannerSlide preview="banner-01.jpg" title="Rizu" minter="Utopia" />
                                <BannerSlide
                                    preview="banner-02.jpg"
                                    title="Alem"
                                    minter="Tech-Team"
                                />
                                <BannerSlide
                                    preview="banner-03.jpg"
                                    title="Maruf"
                                    minter="Zombies"
                                />
                                <BannerSlide
                                    preview="banner-04.jpg"
                                    title="Mujahid"
                                    minter="Kaligraphy"
                                />
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
