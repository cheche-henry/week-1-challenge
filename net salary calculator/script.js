function calculate() {
  //link input values to javascript
  let bas = document.getElementById(`bas`).value;
  let all = document.getElementById(`all`).value;
  // Create alert for if input is empty
  if (bas == "" || all == "") {
    alert("Please fill fields below");
  } else {
    //calculate gross salary
    const gross = parseFloat(bas) + parseFloat(all);
    //calculate PAYE
    let tax;
    if (gross <= 24000) {
      tax = gross * 0.1;
    } else if (gross > 24000 && gross < 32333) {
      tax = gross * 0.25;
    } else if (gross > 32332) {
      tax = gross * 0.3;
    }
    //calculate NSSF
    let nssf = gross / 50;
    //calculate NHIF
    let nhif;
    if (gross <= 5999) {
      nhif = 150;
    } else if (gross < 8000 && gross < 6000) {
      nhif = 300;
    } else if (gross >= 8000 && gross < 12000) {
      nhif = 400;
    } else if (gross >= 12000 && gross < 15000) {
      nhif = 500;
    } else if (gross >= 15000 && gross < 20000) {
      nhif = 600;
    } else if (gross >= 20000 && gross < 25000) {
      nhif = 750;
    } else if (gross >= 25000 && gross < 30000) {
      nhif = 850;
    } else if (gross >= 30000 && gross < 35000) {
      nhif = 900;
    } else if (gross >= 35000 && gross < 40000) {
      nhif = 950;
    } else if (gross >= 40000 && gross < 45000) {
      nhif = 1000;
    } else if (gross >= 45000 && gross < 50000) {
      nhif = 1100;
    } else if (gross >= 50000 && gross < 60000) {
      nhif = 1200;
    } else if (gross >= 60000 && gross < 70000) {
      nhif = 1300;
    } else if (gross >= 70000 && gross < 80000) {
      nhif = 1400;
    } else if (gross >= 80000 && gross < 90000) {
      nhif = 1500;
    } else if (gross >= 90000 && gross < 100000) {
      nhif = 1600;
    } else if (gross >= 100000) {
      nhif = 1700;
    }
    //links javascript to paragraphs that display results
    document.getElementById(`tax`).innerHTML = `Total PAYE tax: ${tax}`;

    document.getElementById(
      `nssf`
    ).innerHTML = `Amount paid to NSSF is: ${nssf}`;

    document.getElementById(`nhif`).innerHTML = `Amount paid to NHIF: ${nhif}`;

    const netSalary = gross - nhif - nssf - tax;
    document.getElementById(
      `salary`
    ).innerHTML = `Your net salary is: ${netSalary}`;
  }
}
