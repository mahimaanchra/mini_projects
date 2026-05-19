const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError'); 
const emailError = document.getElementById('emailError'); 
const passwordError = document.getElementById('passwordError'); 

submitBtn.addEventListener('click', (e)=>{
e.preventDefault();
if(validateName() && validateEmail() && validatePassword()){
     alert('Form Submitted Succesfully');
    document.getElementById('name').value= "";
    document.getElementById('email').value= "";
    document.getElementById('password').value= "";}
   
});

function validateName(){
    let name = document.getElementById('name').value;
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }

    if(!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
        nameError.innerHTML = "Wrire your fullname";
        return false;
    }

    nameError.innerHTML = "";
    return true;
}

function validateEmail(){
    let email = document.getElementById('email').value;
    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "Enter a valid email address";
        return false;
    }

    emailError.innerHTML = "";
    return true
}

function validatePassword(){
    let password = document.getElementById('password').value;
    if(password.length == 0){
        passwordError.innerHTML = "Password is required";
        return false;
    }
if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
    passwordError.innerHTML = "Must be 8+ characters with letters and numbers";
        return false;
    }

    passwordError.innerHTML = "";
    return true
}