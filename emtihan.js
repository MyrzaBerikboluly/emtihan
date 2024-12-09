const school = {
  name: "Amjilt Cyber School",
  phoneNumber: 87078088696,
  students: [
    { studentName: "Myrza", top: "tigers", progress: 90, lessons: 2 },
    { studentName: "Ayan", top: "tigers", progress: 80, lessons: 4 },
    { studentName: "Ernar", top: "lions", progress: 76, lessons: 7 },
    { studentName: "Islam", top: "snakes", progress: 64, lessons: 1 },
    { studentName: "Beibarys", top: "lions", progress: 85, lessons: 3 },
  ],
};

//2 tapsyrma
// function changeSchoolName() {
//     let newName = prompt("Enter the new Name of school")
//     return school.name = newName
// }
// changeSchoolName()
// console.log(school);

//3 tapsyrma
// function changePhoneNumber() {
//     let newPhone = +prompt("Enter the new Phone of school")

//     if (newPhone) {
//         newPhone === school.phoneNumber
//     }

//     return school.phoneNumber = newPhone
// }
// changePhoneNumber()
// console.log(school);

//4 tapsyrma
// function listStudentNames() {
//     alert(school.students.studentName + "\n")
// }
// listStudentNames()

//5 tapsyrma
// function addStudent() {
//     let newName = prompt("Enter the new student name")
//     let newTop = prompt("Enter the new student top")
//     let newProgress = +prompt("Enter the new student progress")
//     let newLesson = +prompt("Enter the new student lesson")

//     school.students.push({
//         studentName: newName,
//         top: newTop,
//         progress: newProgress,
//         lessons: newLesson
//     })
// }
// addStudent()
// console.log(school);

//6 tapsyrma
// function applyDecreaseToTop() {
//     let group = prompt("Enter the top of student")
//     let procent = +prompt("Kansha procentke azaitatynyn jazynyz")
//     if (group === school.students.top) {
//         return school.students.progress - (school.students.progress * procent) / 100
//     }
// }
// applyDecreaseToTop()
// console.log(school);

//7 tapsyrma
function menu() {
  while (true) {
    let question = +prompt(
      "1. Оқу орталығынын атауын өзгерту" +
        "\n" +
        "2. Телефон нөмірін өзгерту" +
        "\n" +
        "3. Студенттер атауын шығару" +
        "\n" +
        "4. Жаңа студент қосу" +
        "\n" +
        "5. Топқа пайыздық мөлшерде орташа үлгерімін төмендету" +
        "\n" +
        "6. Тоқтату"
    );

    if (question === 6) {
      break;
    } else if (question === 1) {
      console.log(changeSchoolName());
    } else if (question === 2) {
      console.log(changePhoneNumber());
    } else if (question === 3) {
      console.log(listStudentNames());
    } else if (question === 4) {
      console.log(addStudent());
    } else if (question === 5) {
      console.log(applyDecreaseToTop());
    }
  }
}
menu()
