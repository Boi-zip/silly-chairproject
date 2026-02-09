"use client"
//Note: this page has been fully made by Gemini, just copy pasted
//but nothing fancy, here, really easy to understand
import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'

export default function VerifyPage() {
  const [status, setStatus] = useState('Verifying...')

  useEffect(() => {
    async function performVerification() {
      // 1. Grab the ?token=... from the URL
      const urlParams = new URLSearchParams(window.location.search)
      const token = urlParams.get('token')

      if (!token) {
        setStatus('No token found in URL.')
        return
      }

      // 2. Update the review in Supabase
      const { data, error } = await supabase
        .from('reviews')
        .update({ is_verified: true })
        .eq('token', token)
        .select()

      // 3. Handle the result
      if (error) {
        setStatus('Error verifying review.')
      } else if (data && data.length > 0) {
        setStatus('Success! Your review is now live.')
      } else {
        setStatus('Invalid or expired token.')
      }
    }

    performVerification()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">{status}</h1>
      <a href="/reviews" className="mt-4 text-blue-500 underline">Go back to reviews</a>
    </div>
  )
}