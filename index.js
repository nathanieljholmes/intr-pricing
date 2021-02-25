const toggle = document.getElementById("toggle");
const discount = document.getElementById('discountTag')
discount.style.visibility = 'hidden'
toggle.addEventListener("click",(ev)=>{
    if(toggle.checked){
        discount.style.visibility = 'visible'
        
    } else{
        discount.style.visibility = 'hidden'
    }

})
document.getElementById('textInput').innerText = "100K "
document.getElementById('textInputAlt').innerText = "$16.00"
function updateTextInput(val) {
    console.log(val)
    if(val > 80){
        document.getElementById('textInput').innerText = "1M "
        document.getElementById('textInputAlt').innerText = "$36.00"
    } else if (val < 80 && val > 60){
        document.getElementById('textInput').innerText = "500K "
        document.getElementById('textInputAlt').innerText = "$24.00"
    } else if (val < 60 && val > 40){
        document.getElementById('textInput').innerText = "100K "
        document.getElementById('textInputAlt').innerText = "$16.00"
    } else if (val < 40 && val > 20){
        document.getElementById('textInput').innerText = "50K "
        document.getElementById('textInputAlt').innerText = "$12.00"
    } else {
        document.getElementById('textInput').innerText = "10K "
        document.getElementById('textInputAlt').innerText = "$8.00"
    }
}
