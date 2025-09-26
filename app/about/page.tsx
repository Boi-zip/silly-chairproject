import Navbar from "@/components/Navbar"
import Image from 'next/image'
import "./style.css"
import silly from "./pictures/silly.jpg"
export default function about(){
    return(
    <div>
        <Navbar/>
        <h1 className="Title">About this site</h1>
        <p className="textabout">
            Not sure what you want to know about me.
            <br/>
            But this is just a silly site project, where only products that you can view are chairs, and 1 table
        </p>
        <Image className="img" src={silly} alt="silly" width={400} height={400}/>
    </div>
    )
}
