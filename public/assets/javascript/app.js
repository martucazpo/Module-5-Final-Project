document.addEventListener('DOMContentLoaded', () => {
    const loginModalAnchor = document.getElementById("loginModalAnchor");
    const registrationModalAnchor = document.getElementById("registrationModalAnchor");
    const registrationDivModal = document.getElementById("registrationDivModal");
    const loginDivModal = document.getElementById("loginDivModal");
    const loginNavBtn = document.getElementById("loginNavBtn");
    const gotoRegisterBtn = document.getElementById("gotoRegisterBtn");
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");


    registrationModalAnchor.addEventListener('click', () => {
        showHidden(registrationDivModal, "display", "hidden");
    });

    loginModalAnchor.addEventListener('click', () => {
        showHidden(loginDivModal, "display", "hidden");
    });

    loginNavBtn.addEventListener('click', () => {
        showHidden(loginDivModal, "hidden", "display");
    });

    gotoRegisterBtn.addEventListener('click', () => {
        showHidden(loginDivModal, "display", "hidden");
        showHidden(registrationDivModal, "hidden", "display");
    });

    loginBtn.addEventListener('click', () => {
        showHidden(loginDivModal, "display", "hidden");
    });

    registerBtn.addEventListener('click', () => {
        showHidden(registrationDivModal, "display", "hidden");
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