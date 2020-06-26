import React from 'react';
import RevSlider, { Slide, Caption } from 'react-rev-slider';



const HomeSlider = () => {
    const config = {
        delay: 9000,
        startwidth: 1170,
        startheight: 500,
        hideThumbs: 10,
        fullWidth: "on",
        forceFullWidth: "on"
    };


    return (
        <RevSlider config={config}>
            <div className="container-indent nomargin">
                <div className="container-fluid">
                    <div className="row">
                        <div className="slider-revolution revolution-default">
                            <div className="tp-banner-container">
                                <div className="tp-banner revolution">
                                    <ul>
                                        <li data-thumb="assets/images/slides/01/slide-01.jpg" data-transition="fade" data-slotamount="1" data-masterspeed="1000" data-saveperformance="off" data-title="Slide">
                                            <img src="assets/images/slides/01/slide-01.jpg" alt="slide1" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" />
                                            <div className="tp-caption tp-caption1 lft stb"
                                                data-x="center"
                                                data-y="center"
                                                data-hoffset="0"
                                                data-voffset="0"
                                                data-speed="600"
                                                data-start="900"
                                                data-easing="Power4.easeOut"
                                                data-endeasing="Power4.easeIn">
                                                <div className="tp-caption1-wd-1 tt-base-color">Multipurpose</div>
                                                <div className="tp-caption1-wd-2">Premium<br />Html Template</div>
                                                <div className="tp-caption1-wd-3">30 skins, powerful features, great support, exclusive offer</div>
                                                <div className="tp-caption1-wd-4"><a href="listing-left-column.html" target="_blank" className="btn btn-xl" data-text="SHOP NOW!">SHOP NOW!</a></div>
                                            </div>
                                        </li>
                                        <li data-thumb="video/video_img.jpg" data-transition="fade" data-slotamount="1" data-masterspeed="1000" data-saveperformance="off" data-title="Slide">
                                            <img src="assets/video/blank.png" alt="slide1" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" />

                                            <div className="tp-caption tp-fade fadeout fullscreenvideo"
                                                data-x="0"
                                                data-y="0"
                                                data-speed="600"
                                                data-start="0"
                                                data-easing="Power4.easeOut"
                                                data-endspeed="1500"
                                                data-endeasing="Power4.easeIn"
                                                data-autoplay="true"
                                                data-autoplayonlyfirsttime="false"
                                                data-nextslideatend="true"
                                                data-forcecover="1"
                                                data-dottedoverlay="twoxtwo"
                                                data-aspectratio="16:9">
                                                <video className="video-js vjs-default-skin" preload="none"
                                                    poster='video/video_img.jpg' data-setup="{}">
                                                    <source src='video/video.mp4' type='video/mp4' />
                                                </video>
                                            </div>
                                            <div className="tp-caption  tp-fade"
                                                data-x="right"
                                                data-y="bottom"
                                                data-voffset="-60"
                                                data-hoffset="-90"
                                                data-speed="600"
                                                data-start="900"
                                                data-easing="Power4.easeOut"
                                                data-endeasing="Power4.easeIn">
                                                <div className="video-play">
                                                    <a className="icon-f-29 btn-play" href="#"></a>
                                                    <a className="icon-f-28 btn-pause" href="#"></a>
                                                </div>
                                            </div>

                                            <div className="tp-caption lfb lft text-center"
                                                data-x="center"
                                                data-y="center"
                                                data-voffset="-20"
                                                data-hoffset="0"
                                                data-speed="600"
                                                data-start="900"
                                                data-easing="Power4.easeOut"
                                                data-endeasing="Power4.easeIn">
                                                <div className="tp-caption1-wd-1 tt-base-color">Multipurpose</div>
                                                <div className="tp-caption1-wd-2 tt-white-color">Premium<br />Html Template</div>
                                                <div className="tp-caption1-wd-3 tt-white-color">30 skins, powerful features, great support, exclusive offer</div>
                                                <div className="tp-caption1-wd-4"><a href="listing-left-column.html" className="btn btn-xl" data-text="SHOP NOW!">SHOP NOW!</a></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </RevSlider>
    )

}


export default HomeSlider;