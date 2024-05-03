import React from 'react'
import { menu2 } from '../constants/data';
import {Button, styled } from '@mui/material'
import './style.css';
const SignupButton = styled(Button)`
 text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`
const Meal3 = () => {
    return (

        <section className='menu' id='menu'>
            <h1 className='heading'>Jeera <span>Chawal</span></h1>

            <div className="box-container">
                {
                    menu2.map((item, index) => (
                        <div className='box'>
                            <img src={item.img} alt="" />
                            <h3>Order Now</h3>
                            <div className="price">
                            {item.prices} <span> {item.price} </span>
                            </div>
                            <SignupButton >Add to cart</SignupButton>
                        </div>
                    ))
                }
            </div>
        </section>

    )
}
export default Meal3;