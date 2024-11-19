let period_inputs = document.querySelectorAll("input[data-period]")
let sample_teacher = ["Deepa", "Santich", "Brown", "Bolich", "Ottaway", "Delgado", "Ebbers", "Nawim"]

for (let i = 0; i<period_inputs.length; i++){
    if(period_inputs[i].value === sample_teacher[i]){
        alert(sample_teacher[i])
    }
}