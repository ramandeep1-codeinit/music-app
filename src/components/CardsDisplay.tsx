import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../assets/ab67616d00001e02e62ca3548e739bd85eebbbc9.jpeg"

const CardsDisplay = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const cards = [
        { id: 1, img: image, content: "Card 1",subContent:"card"},
        { id: 2, img: image,content: "Card 2" ,subContent:"card"},
        { id: 3, img: image, content: "Card 3" ,subContent:"card"},
        { id: 4, img: image, content: "Card 4" ,subContent:"card"},
        { id: 5, img: image, content: "Card 5" ,subContent:"card"},
        { id: 6, img: image, content: "Card 6" ,subContent:"card"},
        { id: 7, img: image, content: "Card 7" ,subContent:"card"},
        { id: 8, img: image, content: "Card 8" ,subContent:"card"},
      ];
  return (
    <div className='container my-9 mx-auto'>
        <h3 className='text-3xl font-semibold'>Trending</h3>
        <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className='p-4'>
            <div className='bg-zinc-800 p-3 rounded-lg text-black '>
              <img src={card.img} alt={"img"} width={180} height={180}  className='rounded-lg'/>
              <p className='text-white font-semibold mt-3'>{card.content}</p>
              <p className='text-gray-400 font-normal mt-2'>{card.subContent}</p>
            </div>
          </div>
        ))}
        
      </Slider>

        </div>
  )
}

export default CardsDisplay