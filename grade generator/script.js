function calculate(){
    let math = document.getElementById(`math`).value
    let eng = document.getElementById(`eng`).value
    let swa = document.getElementById(`swa`).value
    let phy = document.getElementById(`phy`).value
    let chem = document.getElementById(`chem`).value
    let grade;
    let message;
    const total = parseFloat(math) +parseFloat(eng)+parseFloat(swa)+parseFloat(phy)+parseFloat(chem);
    const per = (total/500)*100;
   
    if (per >79 && per <=100){
      grade = `A`
    }
    else if (per >=60 && per <80){
      grade = `B`
    }
    else if (per >=50 && per <60){
      grade = `C`
    }
    else if (per >=40 && per <50){
      grade = `D`
    }
    else if (per >=0 && per <40){
      grade = `E`
    }
    document.getElementById(`result`).innerHTML= 
    `Your total marks are: ${total}`
    document.getElementById(`per`).innerHTML=`Your percentage is: ${per}`
    document.getElementById(`grade`).innerHTML=`Your grade is: ${grade} `
    
}