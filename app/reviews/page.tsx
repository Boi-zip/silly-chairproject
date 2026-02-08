"use client"
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
import Navbar from '@/components/Navbar'
//The base of the site is from supabase, modified by me so it works with reviews and such(remade into a review page, was a example todo list)
function Reviews() {
  const [reviews, setReviews] = useState<any[]>([])
  const [newReview, setNewReview] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [makeReview, setMakeReview] = useState(false)

  // 1. FETCH LOGIC (Read)
  async function getReviews() {
    const { data } = await supabase.from('reviews').select()
    if (data) setReviews(data)
  }

  useEffect(() => {
    getReviews()
  }, [])

  // 2. PUSH LOGIC (Write)
  async function pushReview() {
    if (!newReview) return;
    const { data } = await supabase.from('reviews').select().eq('email', email); //used for the email check

    const { error } = await supabase
      .from('reviews')
      .insert([{ content: newReview, email: email, title:title, name: name}])

    if (error) {
      console.error('Error pushing:', error)
    } else if (data?.length! > 0) {return alert("Email is in use!");} //the email check is from https://github.com/orgs/supabase/discussions/2419
     else {
      setNewReview('')
      setTitle('') // Clear inputs
      setEmail('')
      setName('')
      setMakeReview(false)
      getReviews()     // Refresh the list
    }
  }

  return (
    <div>
      <Navbar/>
      {makeReview ? <form className="mb-2 text-center" action={pushReview}>
        <label htmlFor="email"><p className="text-3xl m-1">E-mail</p></label>
        <input 
        type='email'
          className="border p-2 text-current"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
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
      </form> : 
      <div> 
      <button onClick={() => setMakeReview(true)}
  className="cursor-pointer text-base w-full border-dotted border-3 p-3 border-lime-900 rounded-2xl bg-green-700"
>
    <span className="select-none">{reviews.length > 0 ? "Write a review" : "Be the first to write a review!"}</span>
</button>
{/* List area to show current data */}
      <ul className='flex flex-col-reverse items-center'>
        {reviews.map((item) => (
          <div className="mt-3 bg-neutral-primary-soft block md:max-w-lg pt-6 pb-6 pl-2 pr-2 border border-default rounded-base shadow-xs w-full" key={item.email}>
            <p className="text-center mb-3 text-4xl font-semibold tracking-tight text-heading leading-8">{item.title}</p>
              <p className="text-xl italic">{item.content}</p>
              <p className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">- {item.name}</p>
          </div>
        ))}
      </ul>
</div>}

      <p id="copyrightxt" className="min-w-full bg-[#323131]">©️ Aleksandr Ganzha</p>
    </div>
  )
}

export default Reviews