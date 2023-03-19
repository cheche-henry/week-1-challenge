// LInking javascript with id of input and button
const markArray = document.getElementById `markArray`
const result = document.getElementById `result`

// If else statement that converts marks to grade
function convert(){
    const mark = parseInt (markArray.value)
    let grade;
   if (mark > 79 && mark <=100){
    grade = `A`;
   }
   else if (mark> 59 && mark <80){
    grade = `B`;
   }
   else if (mark > 49 && mark <60){
    grade = `C`;
    }
    else if (mark >= 40 && mark <50){
    grade = `D`;
   }
   else if (mark < 40 && mark >=0){
    grade = `E`;
   }
   result.innerText = `The results are in . Your grade is: ${grade}`
}