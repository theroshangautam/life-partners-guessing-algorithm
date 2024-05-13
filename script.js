import {girlsNames, boysName} from "./names.js";


// console.log(usersname)
let card = document.querySelector("#card2show");
// console.log(card.firstElementChild.nextElementSibling)
function find() {
    card.hidden = false;
    let genderSelect = document.querySelector("#genderselection");

// Get the index of the selected option
let selectedIndex = genderSelect.selectedIndex;

// Get the value of the selected option
let genderOption = genderSelect.options[selectedIndex].value;

    let usersname = document.querySelector("#nameprompt").value;
    
    if (genderOption === "male") {
        card.firstElementChild.textContent = `congratulation! ${usersname}...`
card.firstElementChild.nextElementSibling.textContent = `according to our algorithum, ${girlsNames} is the best option that shoots you! happy chatting!`
// console.log(`dear ${usersname}, according to our algorithum, ${girlsNames} is the best options for you!`)
    }
    else if (genderOption === "female") {
        card.firstElementChild.textContent = `congratulation! ${usersname}...`
        card.firstElementChild.nextElementSibling.textContent = `according to our algorithum, ${boysName} is the best option that shoots you! happy chatting! `
        // console.log(`dear ${usersname}, according to our algorithum, ${boysName} is the best options for you!`)
    }
 else{
    card.firstElementChild.innerText = `${usersname}...`
    card.firstElementChild.nextElementSibling.innerText = `invalid selection... please try again. `
    // console.log("invalid!")
 }   
}
document.getElementById("find").onclick = find;
const chatfunction = () => {
    let chatMessage = document.createElement("blockquote");
    chatMessage.textContent = `The chat section you are looking for is under construction. Please try again when it gets fixed. Thanks for your cooperation! `;
    chatMessage.style.backgroundColor = "lightblue";
    chatMessage.style.padding = "20px";
    chatMessage.style.borderRadius = "10px";
    chatMessage.style.color = "black";
    // Append the chat message to the card or any other suitable element
    document.body.appendChild(chatMessage);
}
let chatbtn = document.querySelector("#chatbtn")
chatbtn.onclick = chatfunction;