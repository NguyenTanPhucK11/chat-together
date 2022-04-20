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
  let eValue = e.target.value;
  postMessage(eValue);
  tempMess[Object.keys(tempMess).length] = eValue;
  localStorage.setItem("data", JSON.stringify(tempMess));
  elemScreen.scrollTop = elemScreen.scrollHeight;
  var popup = window.open("http://127.0.0.1:8080/chatB.html", "window-2");
  popup.postMessage(eValue, "http://127.0.0.1:8080/chatB.html");
  e.target.value = "";
};
input.addEventListener("change", updateValue);

let Reset = () => {
  localStorage.clear();
};
