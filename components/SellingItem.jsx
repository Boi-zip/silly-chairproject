"use client"
import "./sellitem.css"
import "animate.css"
import Image from 'next/image'
import { useState } from "react"
const SellingItem = ({ text, price, img, additem, desc}) => {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = (event) => {
    if(isActive == false){
      setIsActive(true);
      setIsHovered(false);
      setTimeout(() => {
        setIsActive(false);
      }, 1000);
    }
}

   const handleHover = (event) => {
    if (isActive == false){
      setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 1000); 
    } else{
      setIsHovered(false);
    }

  };
  //Product card from https://codepen.io/sam_garcia2/pen/PozpPRy
    return(

            <div className="card">
  <div className="imgBox">
    <Image src={img} width={300} height={300} alt="chair" className="mouse"/>
  </div>

  <div className="contentBox">
    <p className="font-semibold font-stretch-expanded text-2xl">{text}</p>
    <p className="price">€{price}</p>
    <p className="desc">{desc}</p>
    <button className={`buy animate__animated ${isActive && 'animate__flip'} ${isHovered && 'animate__pulse'}`} onClick={() => {if(isActive == false) {additem({ text, price })}; handleClick()}} onMouseEnter={() => handleHover()}>Add to cart</button>
  </div>
</div>
    )
}
export default SellingItem