const message = ["Hello", "How are you ?"];

const elemChatA = document.getElementById("chatA");
const input = document.querySelector("input");
const elem = document.getElementById("screen");

let postMessage = (value) => {
  let elemDiv = document.createElement("div");
  elemDiv.setAttribute("class", "message");
  elemDiv.setAttribute("style", "display: inline-block");
  elemDiv.innerHTML = value;
  elemChatA.appendChild(elemDiv);
};
let getMessage = () => {
  for (let value of message) {
    postMessage(value);
  }
};
getMessage();

let updateValue = (e) => {
  postMessage(e.target.value);
  e.target.value = "";
  elem.scrollTop = elem.scrollWidth;
};
input.addEventListener("change", updateValue);
