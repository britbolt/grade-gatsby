async function loginFormHandler(event) {
  event.preventDefault();
  const email = document.querySelector("#studentEmail").value;
  const password = document.querySelector("#studentPassword").value;
  if (email && password) {
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
    }
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
  const response = await fetch("/api/student/signup", {
    method: "post",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard/student");
  } else {
    console.log(response.statusText);
  }
}

document
  .querySelector("#login-student")
  .addEventListener("click", loginFormHandler);
document.querySelector("#sign-up").addEventListener("click", signupFormHandler);
