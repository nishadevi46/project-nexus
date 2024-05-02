import React from 'react'
import { menu } from '../constants/data';
import './style.css';
const Meal = ()=>{
    return(
     
           <section className='menu' id='menu'>
            <h1 className='heading'>our <span>menu</span></h1>
          
           <div className="box-container">
            {
                menu.map((item,index)=>(
                    <div className='box'>
                        <img src={item.img} alt="" />
                        <h3>Order Now</h3>
                        <div className="price">
                            $20 <span>$15</span>
                        </div>
                        <a href="" className='btn'>add to cart</a>
                    </div>
                ))
            }
           </div>
           </section>
       
    )
}
export default Meal;