import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://chaorhfkrpzwbgcexlhx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoYW9yaGZrcnB6d2JnY2V4bGh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNTcxOTIsImV4cCI6MjA4OTkzMzE5Mn0.plqeseAUgm24zcNtMjdlKf9je1CpTJRVM2R-SsDlkYg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
