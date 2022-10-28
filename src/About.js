import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"
import { useContext } from 'react';
import { AppContext } from './Context/ProductContext';
// import {useProductContext} './Context/ProductContext';
import { useProductContext } from './Context/ProductContext';
const About = () => {
  // const myname= useContext(AppContext);
const {myname}= useProductContext();
  return (
    
      <Wrapper>
     <div>
      {myname}
     </div>
         
  <div className='container'>
  <div className='grid grid-two-column'>
  <div className='hero-section-data'>
      <p className='intro-data'>Welcome TO</p>
      <h1> SHARMA SERVICES</h1>
   
      <p className='ajay'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque adipisci eveniet quia sunt eius molestiae reiciendis rerum a veniam dignissimos voluptatum est suscipit, autem nisi ipsa, unde repudiandae repellat minima optio libero corrupti ad deleniti. Ullam, suscipit quia provident optio minus quod odit laborum?
      </p>
      <NavLink className="btn btn-warning manbtn" to="/Products">SHOP NOW </NavLink>
  </div>
  <div className="">
              <figure>
                <img
                  src="images/web.png"
                  alt="hero-section-photo"
                  className="img-style"
                />
              </figure>
            </div>
  </div>
  </div>
      </Wrapper>

    );
  };
  const Wrapper = styled.section`
    padding: 12rem 0;
    img {
      min-width: 10rem;
      height: 10rem;
    }
    
    .btn{
      color-red;
    }
    .hero-section-data {
      p {
        margin: 2rem 0;
       
      }
      h1 {
        text-transform: capitalize;
        font-weight: bold
        font-size:20px
        margin-top:10%
      }
      .intro-data {
        margin-bottom: 0;
        color:green;
      }
      .ajay{
          color:blue
          ;
      }
    
    }
    .hero-section-image {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    figure {
      position: relative;
      &::after {
        content: "";
        width: 60%;
        height: 80%;
        background-color: rgba(81, 56, 238, 0.4);
        position: absolute;
        left: 50%;
        top: -5rem;
        z-index: -1;
      }
      .btn{
  
      }
    }
    .img-style {
      width: 100%;
      height:300px;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .grid {
        gap: 10rem;
      }
      figure::after {
        content: "";
        width: 50%;
        height: 100%;
        left: 0;
        top: 10%;
        /* bottom: 10%; */
        background-color: rgba(81, 56, 238, 0.4);
      }
    }
  `;
  

export default About