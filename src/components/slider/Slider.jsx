import React from 'react';
import Slider from 'react-slick';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';


const ImageSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const imageSet = [
        image1, image2, image3, image4, image5, image6
    ]

    return (
        <div id='certificates' className="w-full max-w-4xl mx-auto mt-6 shadow-lg rounded-xl overflow-hidden">
            <div className="bg-blue-500 text-white p-6">
                <h2 className="text-2xl font-bold">Certificates</h2>
                <p className="mt-2">Here are all the certificates I've received for my courses and more.</p>
            </div>
            <Slider {...settings}>

                {imageSet.map((image, index) => (
                    <div key={index} className="w-full">
                        <img className="w-full" src={image} alt=""/>
                    </div>
                ))
                }

            </Slider>
        </div>
    );
};

export default ImageSlider;
