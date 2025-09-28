"use client"
import "./sellitem.css"
import "animate.css"
import Image from 'next/image'
import { useState } from "react"
const SellingItem = ({ text, price, img, additem}) => {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = (event) => {
    setIsActive(true);
    setIsHovered(false);
  setTimeout(() => {
    setIsActive(false);
  }, 1000);
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

    return(

            <div className="card">
  <div className="imgBox">
    <Image src={img} width={300} height={300} alt="chair" className="mouse"/>
  </div>

  <div className="contentBox">
    <h3>{text}</h3>
    <h2 className="price">€{price}</h2>
    <button className={`buy animate__animated ${isActive && 'animate__flip'} ${isHovered && 'animate__pulse'}`} onClick={() => {additem({ text, price }); handleClick()}} onMouseEnter={() => handleHover()}>Add to cart</button>
  </div>
</div>
    )
}
export default SellingItem