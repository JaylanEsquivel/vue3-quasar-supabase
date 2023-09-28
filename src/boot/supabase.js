import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hpnqjcllqcugoxbwzmwx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwbnFqY2xscWN1Z294Ynd6bXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4NjMyMjMsImV4cCI6MjAxMTQzOTIyM30.9TDRSiE6wXA-ZZbYY5z4EDQHPMyWe-pmdvOzZJtBYx0'
const supabase = createClient(supabaseUrl, supabaseKey)

console.log('init supabase', supabase)

export default function useSupabase () {
  return { supabase }
}
