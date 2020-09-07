document.addEventListener('DOMContentLoaded', () => {
    const userTableModalAnchor = document.getElementById("userTableModalAnchor");
    const userLogContainer = document.getElementById("userLogContainer");
    const openUserModalBtn = document.getElementById("openUserModalBtn");
    const userNameBtn = document.getElementsByClassName('user-name-btn');
    const userUpdateModal = document.getElementsByClassName('user-update-wrapper');

    editBtns(userNameBtn, userUpdateModal, "hidden", "display");

    userTableModalAnchor.addEventListener('click', () => {
        showHidden(userLogContainer, "display", "hidden");
    });

    openUserModalBtn.addEventListener('click', () => {
        if (userLogContainer.classList.contains("hidden")){
            showHidden(userLogContainer, "hidden", "display");
        } else {
            openUserModalBtn.removeEventListener('click', () => {});
        }
        
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

function editBtns(nodeList1, nodeList2, targetClass1, targetClass2) {
    let arr1 = Array.from(nodeList1);
    let arr2 = Array.from(nodeList2);
    for (let i = 0; i < arr2.length; i++) {
        arr1[i].addEventListener('click', () => {
            showHidden(arr2[i], targetClass1, targetClass2);
        });
    }
}

function closeModals(nodeList1) {
    let arr1 = Array.from(nodeList1);
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].classList.contains("display")) {
            showHidden(arr1[i], "display", "hidden");
        }
    }
}
