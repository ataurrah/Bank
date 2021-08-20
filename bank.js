document.getElementById('login-submit').addEventListener('click',function (){
    const emailField =document.getElementById('user-email');
    const userEmail =emailField.value
    const passwordField =document.getElementById('user-password');
    const userpassword =passwordField.value;
    
    if(userEmail == 'sontan@gmail.com' && userpassword =='ataur' ){
        window.location.href ="banking.html";
    }
    })