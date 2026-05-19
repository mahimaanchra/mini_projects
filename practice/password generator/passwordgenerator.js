let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyicon = document.getElementById("copyicon");
sliderValue.textContent = inputSlider.value ;
inputSlider.addEventListener('input' , ()=>{
sliderValue.textContent = inputSlider.value ;
})

genBtn.addEventListener('click' , ()=>{
    passbox.value = generatePassword();
    setTimeout(()=>{
        passbox.value = "";
    },10000)
})
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers =  "0123456789";
let allSymbols = "~!@#$%^&*";
function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allnumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }
let i = 1;
while(i <= inputSlider.value){
    genPassword += allChars.charAt(Math.floor(Math.random()* allChars.length));
    i++;
}
    return genPassword;
}

copyicon.addEventListener('click' , ()=>{
    if(passbox.value!="" || passbox.value.length >=1){
navigator.clipboard.writeText(passbox.value);
copyicon.innerText = "check";
copyicon.title = "Password Copied";
setTimeout(() => {
    copyicon.innerText = "content_copy";
copyicon.title = "";
}
, 4000)
    }
})