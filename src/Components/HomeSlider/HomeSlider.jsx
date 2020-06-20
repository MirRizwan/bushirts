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
        <div className="slider-revolution revolution-default">
            <RevSlider  config={config}>
            <Slide
                src="https://i.ytimg.com/vi/dFnvYtPePRA/maxresdefault.jpg"
                alt="slidebg1"
                data-bgfit="cover"
                data-bgposition="left top"
                data-bgrepeat="no-repeat"
                slideProperties={{
                    'data-transition': "fade",
                    'data-slotamount': "7",
                    'data-masterspeed': "1500"
                }}
            >
                <Caption
                    class="tp-caption tp-caption1 lft stb"
                    data-x="center"
                    data-y="center"
                    data-hoffset="0"
                    data-voffset="0"
                    data-speed="600"
                    data-start="900"
                    data-easing="Power4.easeOut"
                    data-endeasing="Power4.easeIn"
                >
                    <div className="tp-caption1-wd-1 tt-base-color">Multipurpose</div>
                    <div className="tp-caption1-wd-2">Premium<br />Html Template</div>
                    <div className="tp-caption1-wd-3">30 skins, powerful features, great support, exclusive offer</div>
                    <div className="tp-caption1-wd-4"><a href="listing-left-column.html" target="_blank" className="btn btn-xl" data-text="SHOP NOW!">SHOP NOW!</a></div>
                </Caption>
            </Slide>
            <Slide
                src="https://i.ytimg.com/vi/0xe4H666drk/maxresdefault.jpg"
                alt="slidebg1"
                data-bgfit="cover"
                data-bgposition="left top"
                data-bgrepeat="no-repeat"
                slideProperties={{
                    'data-transition': "fade",
                    'data-slotamount': "7",
                    'data-masterspeed': "1500"
                }}
            >
                <Caption
                    class="tp-caption tp-caption1 lft stb"
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
                    data-forceCover="1"
                    data-dottedoverlay="twoxtwo"
                    data-aspectratio="16:9"
                >
                    <div className="tp-caption1-wd-1 tt-base-color">Multipurpose</div>
                    <div className="tp-caption1-wd-2">Premium<br />Html Template</div>
                    <div className="tp-caption1-wd-3">30 skins, powerful features, great support, exclusive offer</div>
                    <div className="tp-caption1-wd-4"><a href="listing-left-column.html" target="_blank" className="btn btn-xl" data-text="SHOP NOW!">SHOP NOW!</a></div>
                </Caption>
            </Slide>

        </RevSlider>
        </div>
    )

}


export default HomeSlider;