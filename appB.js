const message = localStorage.getItem("data") ?? `{}`;
const tempMess = Object.assign(JSON.parse(message));

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
  for (let key in tempMess) {
    postMessage(tempMess[key]);
  }
};
getMessage();

let updateValue = (e) => {
  postMessage(e.target.value);
  e.target.value = "";
  elemScreen.scrollTop = elemScreen.scrollHeight;
};
input.addEventListener("change", updateValue);

window.addEventListener("message", function (event) {
  if (event.data != "") {
    postMessage(event.data);
  }

  elemScreen.scrollTop = elemScreen.scrollHeight;
});

let Reset = () => {
  localStorage.clear();
};
