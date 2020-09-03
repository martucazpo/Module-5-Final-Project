document.addEventListener('DOMContentLoaded', () => {
    const loginModalAnchor = document.getElementById("loginModalAnchor");
    const tic = document.getElementById("tic");
    const registrationDivModal = document.getElementById("registrationDivModal");
    const loginDivModal = document.getElementById("loginDivModal");


    tic.addEventListener('click', () => {
        showHidden(registrationDivModal, "display", "hidden");
    });

    loginModalAnchor.addEventListener('click', () => {
        showHidden(loginDivModal, "display", "hidden");
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