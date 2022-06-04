const handleSave = async (event) => {
  event.preventDefault();

  // getting studentId
  const studentId = event.target.closest("button").dataset.student;
  // setting arrays to hold table data and text
  const grades = [];
  const gradeIds = [];

  // capturing html collection
  const test = event.target.closest("tr").getElementsByTagName("td");

  // looping through collection and pushing grade info into arrays
  for (item of test) {
    const parsedItem = item.textContent.replace(/\s+/g, "");
    grades.push(parsedItem);
    gradeIds.push(item.dataset.grade);
  }
  // removing extra data picked up from button, which must
  // be in a td to be responsive

  gradeIds.splice(-1, 1);
  grades.splice(-1, 1);

  const gradesArray = [];
  grades.forEach((grade, index) => {
    gradesArray.push({
      student_id: Number(studentId),
      subject_id: index + 1,
      grade: Number(grade),
      id: Number(gradeIds[index]),
    });
  });
  // Sending a put request for each grade in the table row
  await fetch("/api/grades", {
    method: "put",
    body: JSON.stringify({
      gradesArray,
    }),
    headers: { "Content-Type": "application/json" },
  });
};

document.querySelectorAll(".save-icon").forEach((btn) => {
  btn.addEventListener("click", handleSave);
});
