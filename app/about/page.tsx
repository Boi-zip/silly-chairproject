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
        <h2 className="Title text-3xl m-3">About this site and us</h2>
        <p>This site is about chairs, where you can <span className="line-through decoration-2">buy</span> chairs, post reviews 
        and <span className="line-through decoration-2">send</span> a support ticket</p>
        <p>We get our chairs from the far lands, where the chairs grow on trees and some are made out of trees</p>
        <p className="m-4">That's why these chairs are so expensive, the table is expensive because it's the only chair from the far lands and demands are <span className="line-through decoration-2">high</span></p>
        <p><span className="line-through decoration-wavy">We</span>, I mean I made this site with the purpose of selling chairs I got from an abandoned warehouse, for some reasaon they had too much of these strange chairs</p>
        <p className="textabout">
            <br/>
            This is just a silly site project, where only products that you can buy are chairs, and 1 table.
        </p>
        <p className="textabout">You can also send an actual review that gets saved in a database</p>
        <p className="textabout mt-4">Link to github(code of this project)</p>
        <p>
            <Link href={"https://github.com/Boi-zip/silly-chairproject"}><Image src={github} className="img-about mb-2" alt="Github logo" width={45} height={45}/></Link>
        </p>
        <Image className="img" src={silly} alt="silly" width={375} height={375}/>
        <p id="copyrightxt">©️ Aleksandr Ganzha</p>
        </main>
    </div>
    )
}
