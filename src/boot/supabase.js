import { createClient } from '@supabase/supabase-js';

const supabaseUrl ='https://tjcwtstwbrtfbjzozhdy.supabase.co';
const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqY3d0c3R3YnJ0ZmJqem96aGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3NDgwODUsImV4cCI6MjA0OTMyNDA4NX0.nBLiLP0MU0TYKYac7O3XtABLxhCTORB4K3QMlgGhGQg';
const supabase = createClient(supabaseUrl, supabaseKey);

console.log('init supabase', supabase);

export default function useSupabase(){
    return { supabase }
}