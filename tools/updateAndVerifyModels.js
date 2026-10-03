const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load .env.local if present
const envPath = path.resolve(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const m = line.match(/^\s*([A-Za-z0-9_]+)=(.*)$/);
    if (m) {
      const key = m[1];
      let val = m[2] || '';
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
  console.error('Supabase env vars not set');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  try {
    console.log('Updating archive_number=16 where model=2026-09-01...');
    const upd1 = await supabase
      .from('archive_entries')
      .update({ model: null })
      .eq('archive_number', 16)
      .eq('model', '2026-09-01');
    if (upd1.error) {
      console.error('Update 16 error:', upd1.error.message || upd1.error);
    } else {
      console.log('Update 16 result:', upd1.data);
    }

    console.log('Updating archive_number=20 where model=2026-09-01...');
    const upd2 = await supabase
      .from('archive_entries')
      .update({ model: null })
      .eq('archive_number', 20)
      .eq('model', '2026-09-01');
    if (upd2.error) {
      console.error('Update 20 error:', upd2.error.message || upd2.error);
    } else {
      console.log('Update 20 result:', upd2.data);
    }

    console.log('Selecting archive_number 16 and 20 for verification...');
    const { data, error } = await supabase
      .from('archive_entries')
      .select('archive_number, name, model, date')
      .in('archive_number', [16, 20])
      .order('archive_number', { ascending: false });
    if (error) {
      console.error('Select error:', error.message || error);
      process.exit(1);
    }
    console.log('Verification rows:');
    data.forEach((r) => console.log(`archive_number=${r.archive_number} | name=${r.name} | model=${r.model} | date=${r.date}`));
  } catch (err) {
    console.error('Unexpected error:', err);
    process.exit(1);
  }
}

run();
