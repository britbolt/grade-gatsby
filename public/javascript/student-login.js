const errorSignUp = document.getElementById("errorSignUp");
const errorLogIn = document.getElementById("errorLogIn");

async function loginFormHandler(event) {
  event.preventDefault();
  const email = document.querySelector("#studentEmail").value;
  const password = document.querySelector("#studentPassword").value;

  if (!email || !password) {
    errorLogIn.textContent = "Please fill out all fields!";
    return;
  }
  const response = await fetch("/api/student/login", {
    method: "post",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard/student");
  } else {
    console.log(response.statusText);
    errorLogIn.textContent = "Incorrect email/password combination";
  }
}

async function signupFormHandler(event) {
  event.preventDefault();
  let form = document.querySelector("#signUp");
  // creating FormData
  const signUpForm = new FormData(form);
  //getting data inside FormData
  const entries = signUpForm.entries();
  const data = Object.fromEntries(entries);

  if (!data.signUpName || !data.signUpEmail || !data.signUpPassword) {
    errorSignUp.textContent = "Please fill out all fields!";
    return;
  }

  if (data.signUpPassword.length < 5) {
    errorSignUp.textContent = "Password must be at least 5 characters!";
    return;
  }
  const response = await fetch("/api/student/signup", {
    method: "post",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
  
    document.location.replace("/dashboard/student");
  } else {
    console.log(response.statusText);
    errorSignUp.textContent = "Something went wrong";
  }
}

document
  .querySelector("#login-student")
  .addEventListener("click", loginFormHandler);
document.querySelector("#sign-up").addEventListener("click", signupFormHandler);
