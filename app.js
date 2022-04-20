const message = localStorage.getItem("data") ?? `{}`;
let tempMess = Object.assign(JSON.parse(message));
const elemChatA = document.getElementById("chatA");
const input = document.querySelector("input");
const elemScreen = document.getElementById("screen");

let sendMessage = (value) => {
  let elemDiv = document.createElement("p");
  elemDiv.setAttribute("class", "col  message");
  //   elemDiv.setAttribute("style", "display: inline-block");
  elemDiv.innerHTML = value;
  elemChatA.appendChild(elemDiv);
};
let getMessage = () => {
  for (let key in tempMess) {
    sendMessage(tempMess[key][0]);
  }
};
getMessage();

let updateValue = (e) => {
  let eValue = e.target.value;
  sendMessage(eValue);
  tempMess[Object.keys(tempMess).length] = [eValue, "isA"];
  localStorage.setItem("data", JSON.stringify(tempMess));
  elemScreen.scrollTop = elemScreen.scrollHeight;
  e.target.value = "";
  sendMessage(eValue);
};
input.addEventListener("change", updateValue);

let Reset = () => {
  localStorage.clear();
  location.reload();
};
window.addEventListener("message", function (event) {
  if (event.data != "") {
    sendMessage(event.data);
  }
});

let sendMessage = (value) => {
  var popup = window.open("http://127.0.0.1:8080/chatB.html", "index");
  popup.postMessage(value, "http://127.0.0.1:8080/chatB.html");
};
