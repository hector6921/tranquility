import { createClient } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'

const supabaseUrl = 'https://esapczunfsvnooradvdd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTgxOTkzMiwiZXhwIjoxOTQ1Mzk1OTMyfQ.ViRj-aU5SXnMXsMzqVMpFj-Js4zBHxioZa2ebbxk_DE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function SendData(){

async function saveData(){
const { data, error } = await supabase
  .from('clients')
  .insert([
    { fullname: 'The Shire', email:'sample@sample.com',pass:'strong password' }
  ])
}
//useEffect(()=>{saveData()},[])
return(
    <div></div>
)
}