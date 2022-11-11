import React from 'react';
import slider1 from '../../assets/images/banner/1.jpg';
import slider2 from '../../assets/images/banner/2.jpg';
import slider3 from '../../assets/images/banner/3.jpg';
import slider4 from '../../assets/images/banner/4.jpg';
import slider5 from '../../assets/images/banner/5.jpg';
import slider6 from '../../assets/images/banner/6.jpg';
import BannerItem from './BannerItem';

const Baner = () => {

     const bannerData = [
          {
              image: slider1,
              prev: 6,
              id: 1,
              next: 2
          },
          {
              image: slider2,
              prev: 1,
              id: 2,
              next: 3
          },
          {
              image: slider3,
              prev: 2,
              id: 3,
              next: 4
          },
          {
              image: slider4,
              prev: 3,
              id: 4,
              next: 5
          },
          {
              image: slider5,
              prev: 4,
              id: 5,
              next: 6
          },
          {
              image: slider6,
              prev: 5,
              id: 6,
              next: 1
          }
      ]
     return (
          <div>
               <div className="carousel w-full py-5">


               {
                    bannerData.map(slide => <BannerItem key={slide.id} slide={slide}></BannerItem>)
               }

                    {/* <div id="slide1" className="carousel-item relative w-full">
                         <img src={slider1} className="w-full" />
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide4" className="btn btn-circle">❮</a>
                              <a href="#slide2" className="btn btn-circle">❯</a>
                         </div>
                    </div> */}
               
               </div>
          </div>
     );
};

export default Baner;