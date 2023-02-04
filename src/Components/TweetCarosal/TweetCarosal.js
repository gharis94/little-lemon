import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import FeedComponent from '../FeedComponent/FeedComponent';


const TweetCarosal = () => {
  return (
    <Carousel width='100%' 
        centerMode={true} 
        centerSlidePercentage={100}
        autoPlay={true}
        interval={5000}
        emulateTouch={true}
        transitionTime={2000}
        infiniteLoop={false}
        axis={'horizontal'}
        centerMod={true}
        durationTime={2000}
        

        >
        <FeedComponent/>
        <FeedComponent/>
        <FeedComponent/>
        <FeedComponent/>
    </Carousel>
  )
}

export default TweetCarosal