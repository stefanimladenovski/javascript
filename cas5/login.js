function onSubmit () {
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    console.log(username.value, password.value);

    username.value = '';
    password.value = '';
}

const usernameChanged = (value) => {
    console.log(value)
}