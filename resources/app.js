function signUp() {
    let username = getVal("username");
    let email = getVal("email");
    let firstName = getVal("first_name");
    let lastName = getVal("last_name");
    let password = getVal("password");
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user_info) {
        ref.child("users").child(user_info.uid).set({
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: password
        });
        window.location.assign("resources/main.html");
    }).catch(function (e) {
        switch (e.code) {
            case "auth/weak-password":
                document.querySelector(`#signUp_password_indicator`).innerHTML = "Weak Password";
                break;
            case "auth/email-already-in-use":
                document.querySelector(`#signUp_email_indicator`).innerHTML = "Email Is Already In Use";
                break;
        }
    });
}
function getVal(eid) {
    return document.querySelector(`#${eid}`).value;
}
function signIn() {
    let email = getVal("signInEmail");
    let password = getVal("sigin_password");
    firebase.auth().signInWithEmailAndPassword(email, password).then(function (user_info) {
        window.location.href = "resources/main.html";
    }).catch(function (e) {
        switch (e.code) {
            case "auth/wrong-password":
                document.querySelector(`#sigin_password_indicator`).innerHTML = "Wrong Password";
                break;
            case "auth/user-not-found":
                document.querySelector(`sigin_email`).innerHTML = "User Not Found";
                break;
        }
    });
}