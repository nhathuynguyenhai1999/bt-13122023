// let year = parseInt(prompt("Enter a year"));
function year(){
  var namnhuan = document.getElementById("year").value
  if ((namnhuan % 4 == 0 && namnhuan % 100 != 0) || (namnhuan % 400 == 0)) {
    alert(namnhuan + " là năm nhuận.");
  } else {
    alert(namnhuan + " không là năm nhuận.");
  }
} // đây là hàm function



// if (namnhuan % 4 == 0) {
//   if (namnhuan % 100 == 0) {
//     if (namnhuan % 400 == 0) {
//       alert(namnhuan + " is a leap year");
//     } else {
//       alert(namnhuan + " is NOT a leap year");
//     }
//   } else {
//     alert(namnhuan + " is a leap year");
//   }
// } else {
//   alert(namnhuan + " is NOT a leap year");
// }
