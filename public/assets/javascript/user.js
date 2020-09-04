document.addEventListener('DOMContentLoaded', () => {
    const exTableModalAnchor = document.getElementById("exTableModalAnchor");
    const exTableModal = document.getElementById("exTableModal");
    const myExercisesBtn = document.getElementById("myExercisesBtn");

    exTableModalAnchor.addEventListener('click', () => {
         showHidden(exTableModal, "display", "hidden");
    });

    myExercisesBtn.addEventListener('click', () => {
        showHidden(exTableModal, "hidden", "display");
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