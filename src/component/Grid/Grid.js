import React from "react";
import './Grid.css'; 
import img1 from '../images/community-arabian-ranches 1.png'
import img2 from '../images/Arabian Ranches II 1.png'
import img3 from '../images/community-downtown-dubai 1.png'
import img4 from '../images/Dubai Hills Estate 1.png'
import img5 from '../images/community-dubai-marina 1.png'
import img6 from '../images/community-emirates-living 1.png'
import img7 from '../images/REEM-Villa 1.png'
import img8 from '../images/community-the-greens 1.png'
import img9 from '../images/community-UAQ 1.png'
import './Slider.css'

import Carousel from "react-elastic-carousel"
import imgs1 from '../Slider_img/slider-1.png'
import imgs2 from '../Slider_img/slider-2.png'
import imgs3 from '../Slider_img/slider-3.png'
import imgs4 from '../Slider_img/slider-4.png'
import imgs5 from '../Slider_img/slider-5.png'


const breakPoints = [
    { width: 426.6, itemsToShow: 3 },
    { width: 426.6, itemsToShow: 3 },
    
  ];
function Grid (){
    return(
        <div className='Main'>
            <div className='Heading'> ---COMMUNITIES WE MANAGE--- </div>
            
            <section className='Img1'>
                <img src={img1}  alt=''/>
                    <section className='Img_text'>
                        Arabian_Ranches
                    </section>
            </section>
            <section className='Img2'>
                <img src={img2}  alt=''/>
                    <section className='Img_text'>
                        Arabian_Ranches_II
                    </section>
            </section>
            <section className='Img3'>
                <img src={img3}  alt=''/>
                    <section className='Img_text'>
                        Downtime_Dubai
                    </section>
            </section>
            <section className='Img4'>
                <img src={img4}  alt=''/>
                    <section className='Img_text'>
                        Dubai_Hills_Estate
                    </section>
            </section>
            <section className='Img5'>
                <img src={img5}  alt=''/>
                    <section className='Img_text'>
                    Dubai_Marina
                    </section>
            </section>
            <section className='Img6'>
                <img src={img6}  alt=''/>
                    <section className='Img_text'>
                        Emirates_Living
                    </section>
            </section>
            <section className='Img7'>
                <img src={img7}  alt=''/>
                    <section className='Img_text'>
                        Reem
                    </section>
            </section>
            <section className='Img8'>
                <img src={img8}  alt=''/>
                    <section className='Img_text'>
                        The_Greens_&_Views
                    </section>
            </section>
            <section className='Img9'>
                <img src={img9}  alt=''/>
                    <section className='Img_text'>
                        Umm_Al_Quwain_Mistral
                    </section>
            </section>
            <div >
                <div className='Heading2'>---OUR SERVICES---</div>
                    <div className='Slider'> 
                        <Carousel  breakPoints={breakPoints}>
                            <img src = {imgs1} alt= ''/> 
                            <img src = {imgs2} alt= ''/>
                            <img src = {imgs3} alt= ''/>
                            <img src = {imgs4} alt= ''/>
                            <img src = {imgs5} alt= ''/>
                            
                        </Carousel> 
                    </div>
                    
            </div>
            


        </div>
        
    )
    
};
export default Grid;