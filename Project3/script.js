function Login(){
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;

    if (username == "username" && password == 'password'){
        alert('Login successful!');
    }else{
        alert('Invalid login or password!');
    }
}