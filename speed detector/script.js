const enterString = document.getElementById (`enterString`)
const result = document.getElementById (`result`)
        
function calculate(){
    const enter = parseInt(enterString.value)
    let point;
    point = eval((enter-70)/5)
    let answer;
    if(enter <=70){
        answer=`OK`
    }
    else if(enter > 70 && point<12){
        answer= `This is a warning`
    }
    else if (enter >70 && point >=12){
        answer = `License suspended`
    }
    result.innerText= `${answer}. Your current demerit points are: ${point}`

}       
        