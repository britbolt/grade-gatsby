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
  
    const name = document.querySelector("#TeacherName").value
    const email = document.querySelector("#TeacherEmail").value
    const password = document.querySelector("#TeacherPassword").value;
  
    if (name && email && password) {
      const response = await fetch("/api/teacher/signup", {
        method: "post",
        body: JSON.stringify({
          name,
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
  
  document
    .querySelector("#login-student")
    .addEventListener("click", loginFormHandler);
  //document.querySelector('#sign-up').addEventListener('click', signupFormHandler);