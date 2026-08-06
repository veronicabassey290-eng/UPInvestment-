document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signUp({
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
  } else {
    showMessage("signupMessage", "Account created successfully!");
  }
});
