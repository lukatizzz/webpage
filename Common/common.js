const handleClose = () => {
    const getOverLay = document.querySelector(".overlay");
    console.log("getOverLay" , getOverLay)
    getOverLay.style.display = "none"
}

const handleOpen = () => {
    const getOverLay = document.querySelector(".overlay");
    getOverLay.style.display = "block"
}

const closeBtn = document.querySelector(".overlay .close");
const openButton = document.querySelectorAll(".fa-solid.fa-bars");

for (let index = 0; index < openButton.length; index++) {
    const element = openButton[index];
    element.addEventListener("click" , handleOpen)
}

 console.log("openButton" , openButton)
 closeBtn.addEventListener("click" , handleClose)
