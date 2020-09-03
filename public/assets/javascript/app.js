document.addEventListener('DOMContentLoaded', () => {
    const loginModalAnchor = document.getElementById("loginModalAnchor");
    const registrationModalAnchor = document.getElementById("registrationModalAnchor");
    const registrationDivModal = document.getElementById("registrationDivModal");
    const loginDivModal = document.getElementById("loginDivModal");
    const loginNavBtn = document.getElementById("loginNavBtn");
    const gotoRegisterBtn = document.getElementById("gotoRegisterBtn");
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const loginForm = document.getElementById("loginForm");
    const registrationForm = document.getElementById("registrationForm");


    registrationModalAnchor.addEventListener('click', () => {
        showHidden(registrationDivModal, "display", "hidden");
    });

    loginModalAnchor.addEventListener('click', () => {
        showHidden(loginDivModal, "display", "hidden");
    });

    loginNavBtn.addEventListener('click', () => {
        dontPushAgain(loginNavBtn, loginDivModal, registrationDivModal, "display","hidden");
    });

    gotoRegisterBtn.addEventListener('click', () => {
        showHidden(loginDivModal, "display", "hidden");
        showHidden(registrationDivModal, "hidden", "display");
    });

    loginBtn.addEventListener('click', () => {
        showHidden(loginDivModal, "display", "hidden");
        loginForm.form.reset();
    });

    registerBtn.addEventListener('click', () => {
        showHidden(registrationDivModal, "display", "hidden");
        registrationForm.form.reset();
    });
});

function showHidden(div, targetClass1, targetClass2) {
    if (div.classList.contains(targetClass1)) {
        div.classList.remove(targetClass1);
        div.classList.add(targetClass2);
    } else {
        div.setAttribute("Class", targetClass2);
    }
}

function dontPushAgain(element, targetDiv1, targetDiv2, targetClass1, targetClass2) {
    if (targetDiv1.classList.contains(targetClass2) && targetDiv2.classList.contains(targetClass1)){
        element.removeEventListener('click', () => {});
        showHidden(targetDiv1, targetClass2, targetClass1);
        showHidden(targetDiv2, targetClass1, targetClass2);   
    } else if (targetDiv1.classList.contains(targetClass2)) {
        showHidden(targetDiv1, targetClass2, targetClass1);
    } else if (targetDiv1.classList.contains(targetClass1)){
        element.removeEventListener('click', () => {});
    }
}