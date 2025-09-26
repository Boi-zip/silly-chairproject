"use client"
import "./sellitem.css"
import Image from 'next/image'
const SellingItem = ({ text, price, img, additem}) => {
  //const start = () => {
    //var audio = document.getElementById('a1');
    //audio.play()
 // }
    return(

            <div className="card">
  <div className="imgBox">
    <Image src={img} width={300} height={300} alt="chair" className="mouse"/>
  </div>

  <div className="contentBox">
    <h3>{text}</h3>
    <h2 className="price">€{price}</h2>
    <button className="buy" onClick={() => additem({ text, price })}>Add to cart</button>
  </div>
</div>
    )
}
export default SellingItem