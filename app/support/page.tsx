"use client"
import Navbar from "@/components/Navbar";
import {useState} from "react"
import "animate.css"

export default function Support(){
    const [text, setText] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [sended, setSended] = useState(false)
    return(
        <>
        <Navbar/>
        {sended ? 
        <><div className="animate__bounceOutDown animate__animated flex place-self-center flex-col mt-3 bg-neutral-primary-soft block md:max-w-lg pt-6 pb-6 pl-2 pr-2 border border-default rounded-base shadow-xs w-full">
            <p className="text-center mb-3 text-4xl font-semibold tracking-tight text-heading leading-8">{title}</p>
              <p className="text-xl italic">{text}</p>
              <p className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">- {email}</p>
          </div>
          <p className="animate__fadeInDown animate__animated animate__delay-1s text-center text-3xl font-bold">Thank you for sending us a support ticket!</p>
          <p className="animate__fadeInDown animate__animated animate__delay-2s text-center text-xl italic tracking-wide">It went straight to our shredder</p>
           </>
          :
           <><p className="text-4xl text-center mt-10 mb-10">Send a support ticket</p>
        <form action={() => setSended(true)} className="text-center">
            <label htmlFor="email"><p className="text-3xl">E-mail</p></label><br/>
            <input type="email" required onChange={(e) => setEmail(e.target.value)} className="border p-[4px] mt-2 mb-2" id="email" name="E-mail" placeholder="john@example.com"/><br/>
            <label htmlFor="topic"><p className="text-3xl">Topic</p></label>
            <input type="text" required onChange={(e) => setTitle(e.target.value)} className="border p-[4px] mt-2 mb-2" id="Topic" name="Topic" placeholder="About the site"/>
            <label htmlFor="message"><p className="text-3xl">Your message</p></label>
            <textarea required onChange={(e) => setText(e.target.value)} className="border p-[4px] resize min-h-[100px] h-[200px] w-[340px] min-w-[250px] max-w-screen mt-2 mb-2" id="message" name="message" placeholder="This site is amazing!!!"/><br/>
                <input type="submit" value="Send support ticket" className="cursor-pointer text-base border-dotted border-3 p-3 border-lime-900 rounded-2xl bg-green-700"/>
        </form></> }
        
        
        <p id="copyrightxt" className="min-w-full bg-[#323131]">©️ Aleksandr Ganzha</p>
        </>
    )
}