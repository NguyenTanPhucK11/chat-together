const message = ["Hello", "How are you ?"];

const elemChatA = document.getElementById("chatA");
const input = document.querySelector("input");
const elemScreen = document.getElementById("screen");

let postMessage = (value) => {
  let elemDiv = document.createElement("p");
  elemDiv.setAttribute("class", "col  message");
  //   elemDiv.setAttribute("style", "display: inline-block");
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
  elemScreen.scrollTop = elemScreen.scrollHeight;
};
input.addEventListener("change", updateValue);
