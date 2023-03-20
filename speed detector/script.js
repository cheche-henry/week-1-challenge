//link input to javascript
const enterString = document.getElementById (`enterString`)
const result = document.getElementById (`result`)
        
function calculate(){
    //convert value to integer
    const enter = parseInt(enterString.value)
    //calculate demerit points
    let point;
    point = eval((enter-70)/5)
    //give response if speed is above limit
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
        