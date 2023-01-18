
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://joqwtcqtucsiandrqizn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvcXd0Y3F0dWNzaWFuZHJxaXpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM4ODYzNDcsImV4cCI6MTk4OTQ2MjM0N30.nWqDLs2-aeGjnoZxQP1mUeo9VILLEfzYRsCdaXaz-Lk'

export const supabase = createClient(supabaseUrl, supabaseKey)