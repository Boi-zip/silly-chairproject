"use client"
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
import Navbar from '@/components/Navbar'
//The base of the site is from supabase, modified by me so it works with reviews and such(remade into a review page, was a example todo list)
//some things are AI generated, mainly to verify your E-mail to post a review
function Reviews() {
  const [reviews, setReviews] = useState<any[]>([])
  const [newReview, setNewReview] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [makeReview, setMakeReview] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // 1. FETCH LOGIC (Read)
  async function getReviews() {
    const { data } = await supabase.from('reviews').select().eq('is_verified', true).order('created_at', { ascending: false })
    if (data) setReviews(data)
  }

  useEffect(() => {
    getReviews()
  }, [])

  // 2. PUSH LOGIC (Write)
  async function pushReview() {
    if (!newReview) return;
    const { data } = await supabase
      .from('reviews')
      .select()
      .eq('email', email)
      .eq('is_verified', true);

    if (data && data.length > 0) {
      return alert("This email has already posted a verified review!");
    } //the email check is from https://github.com/orgs/supabase/discussions/2419

    const { error } = await supabase
      .from('reviews')
      .insert([{ content: newReview, email: email, title:title, name: name, is_verified: false}])
    setTitle('')
    setEmail('')
    setNewReview('')
    setName('')
    if (error) {
      console.error('Error pushing:', error)
    } 
      setMakeReview(false)
      setIsSubmitted(true)
      window.scroll({top: 0,left: 0, behavior: 'smooth',})
      getReviews()     // Refresh the list
  }

  return (
    <div>
      <Navbar/>
      {isSubmitted && (
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4 text-center">
          <strong className="font-bold">Check your inbox (possibly your spam inbox)! </strong>
          <span className="block sm:inline">We sent a verification link to your email. Your review will appear once confirmed.</span>
          <span className="block">After 2 hours, if your e-mail isn't verified, your review is automatically deleted(you will have to make a new one).</span>
        </div>
      )}
      {makeReview ? <form className="mb-2 text-center" action={pushReview}>
        <label htmlFor="email"><p className="text-3xl">E-mail</p></label>
        <p className='text-lg m-1'>Note! this e-mail will be used to verify your review before posting to prevent spam</p>
        <input 
        type='email'
          className="border p-2 text-current"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          pattern="[a-zA-Z0-9._%\+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$"
          placeholder="john@example.com"
          required
        />
        <label htmlFor="Name"><p className="text-3xl m-1">Your name</p></label>
        <input 
        type='text'
          className="border p-2 text-current"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="John Doe"
          required
        />
        <label htmlFor="topic"><p className="text-3xl m-1">Topic</p></label>
        <input 
          type='text'
          className="border p-2 text-current"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Review title"
          required
        />
        <label htmlFor="message"><p className="text-3xl m-1">Your message</p></label>
        <textarea 
          className="border p-[4px] resize min-h-[100px] h-[150px] w-[270px] min-w-[250px] max-w-screen mt-2 mb-2"
          value={newReview} 
          onChange={(e) => setNewReview(e.target.value)} 
          placeholder="Write your review"
          required
        />
        <br/>
        <input type='submit' className="bg-blue-500 text-white p-2 ml-2" />
        <p className='mt-2'>By posting a review you accept that your review may get removed or may gets changed if it contains suspicious, racist or any NSWF content</p>
      </form> : 
      <div> 
      <button onClick={() => setMakeReview(true)}
  className="cursor-pointer text-base w-full border-dotted border-3 p-3 border-lime-900 rounded-2xl bg-green-700"
>
    <span className="select-none">{reviews.length > 0 ? "Write a review" : "Be the first to write a review!"}</span>
</button>
{/* List area to show current data */}
      <ul className='flex flex-col items-center'>
        {reviews.map((item) => (
          <div className="mt-3 bg-neutral-primary-soft block md:max-w-lg pt-6 pb-6 pl-2 pr-2 border border-default rounded-base shadow-xs w-full" key={item.id}>
            <p className="text-center mb-3 text-4xl font-semibold tracking-tight text-heading leading-8">{item.title}</p>
              <p className="text-xl italic">{item.content}</p>
              <p className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">- {item.name}</p>
          </div>
        ))}
      </ul>
</div>}

      <p id="copyrightxt" className="min-w-full">©️ Aleksandr Ganzha</p>
    </div>
  )
}

export default Reviews