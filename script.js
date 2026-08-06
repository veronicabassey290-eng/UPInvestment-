const SUPABASE_URL = "https://scrjczkluiuwitxbzeud.supabase.co";

const SUPABASE_KEY = "sb_publishable_83A-4E-xP50UwITDwZ2McQ_oB5hbbP7";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

function showMessage(id, text) {
  document.getElementById(id).textContent = text;
}

async function logout() {
  await supabase.auth.signOut();
  location.reload();
}
