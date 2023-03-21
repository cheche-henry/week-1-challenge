function calculate() {
  //link input to javascript
  let enterString = document.getElementById(`enterString`).value;
  let result = document.getElementById(`result`).value;

  if (enterString == "") {
    alert(`Please fill the field below`);
  } else {
    //convert value to integer
    const enter = parseInt(enterString);
    //calculate demerit points
    let point;
    point = eval((enter - 70) / 5);
    //give response if speed is above limit
    let answer;
    if (enter <= 70) {
      answer = `OK`;
    } else if (enter > 70 && point < 12) {
      answer = `This is a warning`;
    } else if (enter > 70 && point >= 12) {
      answer = `License suspended`;
    }
    document.querySelector(
      `#result`
    ).innerText = `${answer}. Your current demerit points are: ${point}`;
  }
}
