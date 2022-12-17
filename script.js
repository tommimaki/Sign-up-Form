
   function checkPassword(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;
    console.log(password1)
    console.log(password2)

    // If password not entered
     if (password1 != password2) {
        alert ("\nPassword did not match: Please try again...")
        return false;
    }

    // If same return True.
    else{
        alert("Password Match: Welcome to GeeksforGeeks!")
        return true;
    }
}
