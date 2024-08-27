import { createClient } from '@supabase/supabase-js';
const URL = 'https://clsxzgedguvvyhxxclnu.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsc3h6Z2VkZ3V2dnloeHhjbG51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1MjkxMjQsImV4cCI6MjA0MDEwNTEyNH0.J07jULLUaviJprTL6PGXWFxEnqTX9W2YDXQoqewObWE';
export const supabase = createClient(URL, API_KEY);
