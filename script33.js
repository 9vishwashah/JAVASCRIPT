// function validatePalin(str) {  

//     // get the total length of the words  
//     const len = string.length;  

//     // Use for loop to divide the words into 2 half  
//     for (let i = 0; i < len / 2; i++) {  

//         // validate the first and last characters are same  
//         if (string[i] !== string[len - 1 - i]) {  
//             alert( 'It is not a palindrome');  
//         }  
//     }  
//     alert( 'It is a palindrome');  
// }  





function checkPalindrome(str) {

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return `it is not pallindrome`
        }
        else {
            return `it is pallindrome`
        }
    }

}
// console.log(checkPalindrome("level"));

// var students = [['Summit', 80], ['Kalpesh', 77], ['Amit', 88], ['Tejas', 93],
// ['Abhishek', 65]];
//  var Avgmarks = 0;
//  for (var i=0; i < students.length; i++) {
//  Avgmarks += students[i][1];
//  }
//  var avg = (Avgmarks/students.length);
//  document.write("Average grade: " + (Avgmarks)/students.length);
//  document.write("<br>");
//  if (avg < 60){
// document.write("Grade : E");
//  }
//  else if (avg < 70) {
//  document.write("Grade : D");
//  }
//  else if (avg < 80) {
//  document.write("Grade : C");
//  } else if (avg < 90) {
//  document.write("Grade : B");
//  } else if (avg < 100) {
//  document.write("Grade : A");
//  }


// function calculateAverage(marks) {
//     const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
//     return totalMarks / marks.length;
//   }
  
//   function getGrade(average) {
//     if (average >= 90) {
//       return "A";
//     } else if (average >= 80) {
//       return "B";
//     } else if (average >= 70) {
//       return "C";
//     } else if (average >= 60) {
//       return "D";
//     } else {
//       return "F";
//     }
//   }
  
//   // Example student marks
//   const studentMarks = [85, 92, 78, 60, 45];
  
//   const averageMarks = calculateAverage(studentMarks);
//   const grade = getGrade(averageMarks);
  
//   console.log("Average Marks:", averageMarks);
//   console.log("Grade:", grade);
  






