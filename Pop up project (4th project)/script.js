let btn = document.getElementById("submitbtn");
let showcontent = document.querySelector(".showdiv");
let closingBtn = document.getElementById("closebtn");
let finalDisply = showcontent.innerText ;
btn.addEventListener("click",popupFunc);
function popupFunc(){
   showcontent.style.display="block";
}
closingBtn.addEventListener("click",closeBtn);

function closeBtn(){
   showcontent.style.display="none";
}


//.....................IMPORTANT NOTES ............................
//The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.
// The querySelectorAll() method returns a static NodeList.