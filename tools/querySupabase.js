const { createClient } = require('@supabase/supabase-js');

const fs = require('fs');
const path = require('path');

// Load .env.local if present so we can run locally without manual env setup
const envPath = path.resolve(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const m = line.match(/^\s*([A-Za-z0-9_]+)=(.*)$/);
    if (m) {
      const key = m[1];
      let val = m[2] || '';
      // Remove surrounding quotes
      if ((val.startsWith("\'") && val.endsWith("\'")) || (val.startsWith('"') && val.endsWith('"'))) {
        val = val.slice(1, -1);
      }
      if (!process.env[key]) process.env[key] = val;
    }
  }
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase env vars not set (NEXT_PUBLIC_SUPABASE_URL / _PUBLISHABLE_KEY)');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  try {
    const { data, error } = await supabase
      .from('archive_entries')
      .select('archive_number, name, model')
      .order('archive_number', { ascending: false });

    if (error) {
      console.error('Supabase error:', error.message || error);
      process.exit(1);
    }

    if (!data || !Array.isArray(data)) {
      console.log('No rows returned');
      return;
    }

    const dateRegex = /\d{4}-\d{2}-\d{2}/;
    const matches = data.filter((r) => {
      const model = r.model ? String(r.model) : '';
      return dateRegex.test(model);
    });

    if (matches.length === 0) {
      console.log('No rows found where model or date contains a 2026-style date.');
      return;
    }

    console.log('Rows where model contains YYYY-MM-DD pattern:');
    matches.forEach((r) => {
      console.log(`archive_number=${r.archive_number} | name=${r.name} | model=${r.model}`);
    });
  } catch (err) {
    console.error('Unexpected error:', err);
    process.exit(1);
  }
}

run();
