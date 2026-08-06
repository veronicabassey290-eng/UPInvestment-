const SUPABASE_URL = "https://scrjczkluiuwitxbzeud.supabase.co";

const SUPABASE_KEY = "YOUR_PUBLISHABLE_KEY_HERE";

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
