let period_inputs = document.querySelectorAll("input[data-period]")

run.onclick = function(){ 
    let teachers = []
    for(let el of period_inputs){
        teachers.push(el.value)
    }

    for (let i = 0; i<period_inputs.length; i++){
        for(let item of Object.keys(localStorage)) {
            if (identification.value == item){
                continue
            }

            let otherTeachers = localStorage[item].split(":")
            if(period_inputs[i].value === otherTeachers[i]){
                stuff.innerHTML+=`period ${i + 1} is the same is ${item}<BR>`
            }
        }
    }

    localStorage.setItem(identification.value, teachers.join(":"))
}
