import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ojuxrkprhumawaxlcswp.supabase.co";

const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qdXhya3ByaHVtYXdheGxjc3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzNjYyMTYsImV4cCI6MjAxOTk0MjIxNn0.RTMy3xIdg2LLe_yf7vnLvwpVFvlSi-ehKZi6x4Z8DKY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
