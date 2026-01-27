import Navbar from "@/components/Navbar"
import Image from 'next/image'
import "./style.css"
import silly from "./pictures/silly.jpg"
import github from "./pictures/github-mark-white.png"
import Link from "next/link"
export default function about(){
    return(
    <div>
        <Navbar/>
        <main>
        <h1 className="Title">About this site</h1>
        <p className="textabout">
            Not sure what you want to know about me.
            <br/>
            But this is just a silly site project, where only products that you can buy are chairs, and 1 table
        </p>
        <p className="textabout">
            <Link href={"https://github.com/Boi-zip/silly-chairproject"}><Image src={github} className="img-about" alt="Github logo" width={45} height={45}/></Link>
        </p>
        <Image className="img" src={silly} alt="silly" width={375} height={375}/>
        <p id="copyrightxt">©️ Aleksandr Ganzha</p>
        </main>
    </div>
    )
}
