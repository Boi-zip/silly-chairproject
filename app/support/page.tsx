import Navbar from "@/components/Navbar";

export default function support(){
    return(
        <>
        <Navbar/>
        <p className="text-4xl text-center mt-10 mb-10">Send a support ticket</p>
        <form /*action={} */ className="text-center">
            <label htmlFor="email"><p className="text-3xl">E-mail</p></label><br/>
            <input type="email" className="border p-[4px] mt-2 mb-2" id="email" name="E-mail" placeholder="john@example.com"/><br/>
            <label htmlFor="topic"><p className="text-3xl">Topic</p></label>
            <input type="text" className="border p-[4px] mt-2 mb-2" id="Topic" name="Topic" placeholder="About the site"/>
            <label htmlFor="message"><p className="text-3xl">Your message</p></label>
            <textarea className="border p-[4px] resize min-h-[100px] h-[200px] w-[340px] min-w-[250px] max-w-screen mt-2 mb-2" id="message" name="message" placeholder="This site is amazing!!!"/><br/>
        </form>
        <p id="copyrightxt" className="min-w-full bg-[#323131]">©️ Aleksandr Ganzha</p>
        </>
    )
}