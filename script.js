let students = [];

function addStudent() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let dept = document.getElementById("dept").value;
  let score = document.getElementById("score").value;


  let grade = "";
  if (score >= 90) grade = "A";
  else if (score >= 80) grade = "B";
  else if (score >= 70) grade = "C";
  else if (score >= 60) grade = "D";
  else grade = "F";


  students.push({
    name: name,
    id: id,
    dept: dept,
    score: score,
    grade: grade
  });

  displayStudents();
}

function displayStudents() {
  let table = document.getElementById("tableBody");
  table.innerHTML = "";

  for (let i = 0; i < students.length; i++) {
    table.innerHTML += `
      <tr>
        <td>${students[i].name}</td>
        <td>${students[i].id}</td>
        <td>${students[i].dept}</td>
        <td>${students[i].score}</td>
        <td>${students[i].grade}</td>
        <td><button onclick="deleteStudent(${i})">Delete</button></td>
      </tr>
    `;
  }
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}