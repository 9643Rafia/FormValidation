function SignIn() {
    const username = document.getElementById('uname_signIn').value.trim();
    const password = document.getElementById('pswd_signIn').value.trim();
    
    if (username === '') {
        alert('Username is required');
        return false;
    }

    if (password === '') {
        alert('Password is required');
        return false;
    }

    if (username.length < 5) {
        alert('Username should be at least 5 characters long');
        return false;
    }

    if (password.length < 5) {
        alert('Password should be at least 5 characters long');
        return false;
    }

    if (username.includes(' ')) {
        alert('Username should not contain spaces');
        return false;
    }

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{5,}$/;
    if (!regex.test(password)) {
        alert('Password should contain at least one digit,one uppercase letter,one lowercase letter, and one special character');
        return false;
    }

    return true;
}
function SignUp() {
    const username = document.getElementById('uname').value.trim();
    const password = document.getElementById('pswd').value.trim();
    const confirmPassword = document.getElementById('pswd2').value.trim();
    const email = document.getElementById('email').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const gender = document.getElementById('gende').value.trim();
    const num = document.getElementById('num').value.trim();
    const country = document.getElementById('country').value.trim();

    if (username === '') {
        alert('Username is required');
        return false;
    }

    if (password === '') {
        alert('Password is required');
        return false;
    }

    if (confirmPassword !== password) {
        alert('Passwords do not match');
        return false;
    }

    if (email === '') {
        alert('Email is required');
        return false;
    } 
    else if (!/^[^@]+@[^@]+.[^@]+$/.test(email)) 
    { 
        alert('Email is not in a valid format');
        return false; 
    }
    if (dob === '') 
    {
        alert('Date of Birth is required');
        return false;
    } 
    else if (isNaN(Date.parse(dob))) 
    {
        alert('Date of Birth is not a valid number');
        return false;
    } 
    else if (new Date(dob) > new Date())
    {
        alert('Date of Birth cannot be in the future');
        return false;
    }
    else if (new Date(dob) < new Date('1980-01-01'))
    {
        alert('Date of Birth cannot be before 1980-01-01');
        return false;
    }
    else if (new Date(dob) > new Date('2010-01-01'))
    {
        alert('Date of Birth cannot be before 2010-01-01');
        return false;
    }
    
    if (gender === '') 
    {
        alert('Gender is required');
        return false;
    }
    
    if (num === '') 
    {
        alert('Contact Number is required');
        return false;
    }
    else if (isNaN(num) || num.length !== 11) {
        alert('Contact Number should only contain numbers and be 11 characters long');
        return false;
    }
    
    if (country === '') 
    {
        alert('Country is required');
        return false;
    }
    
    if (password.length < 5) 
    {
        alert('Password should be at least 5 characters long');
        return false;
    }
    
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{5,}/.test(password)) 
    {
        alert('Password should contain at least one digit, one uppercase letter, one lowercase letter, and one special character');
        return false;
    }
    
    return true;
}