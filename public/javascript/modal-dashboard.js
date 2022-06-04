const newStudentForm = document.querySelector("#newStudentForm");

const handleNewStudent = async (e) => {
  e.preventDefault();
  const name = document.querySelector("#student-name-text").value;
  const email = document.querySelector("#student-email-text").value;

  const response = await fetch("/api/student/signup");
};

newStudentForm.addEventListener("submit", handleNewStudent);
