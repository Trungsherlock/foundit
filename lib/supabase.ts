import { createClient, SupabaseClient } from '@supabase/supabase-js';

declare global {
    var supabase: SupabaseClient | undefined;
}

const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_KEY = process.env.SUPABASE_KEY || "";

const supabase = global.supabase || createClient(SUPABASE_URL, SUPABASE_KEY);
if (process.env.NODE_ENV !== "production") global.supabase = supabase;

export default supabase;