document.addEventListener('DOMContentLoaded', () => {
    const exTableModalAnchor = document.getElementById("exTableModalAnchor");
    const exTableModal = document.getElementById("exTableModal");
    const myExercisesBtn = document.getElementById("myExercisesBtn");
    const exerciseEditBtn = document.getElementsByClassName("exercise-update-btn");
    const exerciseUpdateModal = document.getElementsByClassName("exercise-update-wrapper");

    exTableModalAnchor.addEventListener('click', () => {
        closeModals(exerciseUpdateModal);
        showHidden(exTableModal, "display", "hidden");
    });

    myExercisesBtn.addEventListener('click', () => {
        showHidden(exTableModal, "hidden", "display");
    });

   editBtns(exerciseEditBtn, exerciseUpdateModal, "hidden", "display");

});

function showHidden(div, targetClass1, targetClass2) {
    if (div.classList.contains(targetClass1)) {
        div.classList.remove(targetClass1);
        div.classList.add(targetClass2);
    } else {
        div.setAttribute("Class", targetClass2);
    }
}

function editBtns(nodeList1, nodeList2, targetClass1, targetClass2) {
    let arr1 = Array.from(nodeList1);
    let arr2 = Array.from(nodeList2);
    for(let i=0; i<arr2.length; i++){
        arr1[i].addEventListener('click', () => {
            showHidden(arr2[i], targetClass1, targetClass2);
        });
    }
}

function closeModals(nodeList1) {
    let arr1 = Array.from(nodeList1);
    for(let i=0; i<arr1.length; i++){
        if (arr1[i].classList.contains("display")){
            showHidden(arr1[i], "display", "hidden");
        }
    }
}