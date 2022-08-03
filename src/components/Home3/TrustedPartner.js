import React from 'react';
import Carousel from 'react-multi-carousel';
export default function TrustedPartner() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
        };
  return (
      <section id='trusted-partner'>
          <div className='content'>
              <h4>Trusted Partners</h4>
              <div className='trusted-partner_item'>
                   
                    <Carousel className="card-corusel" responsive={responsive}>
                    <div className='partner_item-image'>
                        <img />
                    </div>
                    <div className='partner_item-image'>
                        <img />
                    </div>
                    <div className='partner_item-image'>
                        <img />
                    </div>
                    <div className='partner_item-image'>
                        <img />
                    </div>
                    <div className='partner_item-image'>
                        <img />
                    </div>
                    <div className='partner_item-image'>
                        <img />
                    </div>
                    <div className='partner_item-image'>
                        <img />
                    </div>
                    <div className='partner_item-image'>
                        <img />
                    </div>
                    <div className='partner_item-image'>
                        <img />
                    </div>
                    <div className='partner_item-image'>
                        <img />
                    </div>
                    <div className='partner_item-image'>
                        <img />
                    </div>
                 </Carousel>
                        
              </div>
          </div>
      </section>
  )
}
