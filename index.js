 const retryButton=document.querySelector(".retry-button")
 console.log(retryButton);
 retryButton.addEventListener("click",showPopup);
 function showPopup() {
         document.querySelector(".popup").style.display= "flex";
 };
 const okButton=document.querySelector(".ok-button")
 console.log(okButton);
 okButton.addEventListener("click",showPopup2);
 function showPopup2() {
    document.querySelector(".popup2").style.display= "flex";
    document.querySelector(".popup").style.display= "none";
 };
 const okButton2=document.querySelector(".ok-button2")
 console.log(okButton2);
 okButton2.addEventListener("click",showPopup3);
 function showPopup3() {
        document.querySelector(".popup3").style.display= "flex";
        document.querySelector(".popup2").style.display= "none";
 }
 const noButton=document.querySelector(".no-button")
console.log(noButton);
noButton.addEventListener("click",showPopup4);
function showPopup4() {
        document.querySelector(".popup4").style.display= "flex";
        document.querySelector(".popup3").style.display= "none";
}
const noButton2=document.querySelector(".no-button2")
console.log(noButton2);
noButton2.addEventListener("click", showPopup5);
function showPopup5(){
        document.querySelector(".popup5").style.display= "flex";
        document.querySelector(".popup4").style.display= "none";
}
const noButton3=document.querySelector(".no-button3")
console.log(noButton3);
noButton3.addEventListener("click", showLastPopup);
function showLastPopup(){
        document.querySelector(".popup6").style.display= "flex";
        document.querySelector(".popup5").style.display= "none";
}
const lastOk=document.querySelector(".ok-button3")
console.log(lastOk);
lastOk.addEventListener("click", hidePopup);
function hidePopup() {
        document.querySelector(".popup6").style.display= "none";
}
const yesButton= document.querySelector(".yes-button");
console.log(yesButton);
yesButton.addEventListener("click", showYesPopup);
function showYesPopup() {
        document.querySelector(".yes-popup").style.display="flex";
        document.querySelector(".popup3").style.display= "none";
}
const yesButton2=document.querySelector(".yes-button2");
console.log(yesButton2);
yesButton2.addEventListener("click",showYesPopup2);
function showYesPopup2() {
        document.querySelector(".yes-popup").style.display= "flex";
        document.querySelector(".popup4").style.display="none";
}
const yesButton3=document.querySelector(".yes-button3");
console.log(yesButton3);
yesButton3.addEventListener("click",showYesPopup3);
function showYesPopup3() {
        document.querySelector(".yes-popup").style.display= "flex";
        document.querySelector(".popup5").style.display="none";
}
const iLoveYouTooBtn=document.querySelector(".ILY");
console.log(iLoveYouTooBtn);
iLoveYouTooBtn.addEventListener("click", closePopup);
function closePopup() {
        document.querySelector(".yes-popup").style.display= "none"
}
