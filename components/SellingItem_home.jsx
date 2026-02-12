"use client"
import "./sellitem.css"
import "animate.css"
import Image from 'next/image'
const SellingItemH = ({ text, price, img, desc, className = ''}) => {
  //Product card from https://codepen.io/sam_garcia2/pen/PozpPRy
    return(

            <div className={`card ${className}`}>
  <div className="imgBox">
    <Image src={img} width={300} height={300} alt="chair" className="mouse"/>
  </div>

  <div className="contentBox">
    <p className="font-semibold font-stretch-expanded text-2xl">{text}</p>
    <p className="price">€{price}</p>
    <p className="desc">{desc}</p>
   </div>
</div>
    )
}
export default SellingItemH