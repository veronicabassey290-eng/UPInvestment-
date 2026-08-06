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
document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName
      }
    }
  });

  if (error) {
    showMessage("signupMessage", error.message);
    return;
  }

  showMessage(
    "signupMessage",
    "Account created successfully. Please check your email if confirmation is required."
  );
});

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    showMessage("loginMessage", error.message);
    return;
  }

  document.getElementById("account").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
  document.getElementById("userEmail").textContent =
    "Signed in as: " + data.user.email;
});
