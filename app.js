const message = localStorage.getItem("data") ?? `{}`;
let tempMess = Object.assign(JSON.parse(message));
const elemChatA = document.getElementById("chatA");
const input = document.querySelector("input");
const elemScreen = document.getElementById("screen");

let renderMess = (value, isA) => {
  let elemDiv = document.createElement("p");
  elemDiv.setAttribute("class", "col  message");
  elemDiv.setAttribute(
    "style",
    isA == "isA"
      ? "background: lightblue; float: right"
      : "background: lightcoral;float: left"
  );
  elemDiv.innerHTML = value;
  elemChatA.appendChild(elemDiv);
};
let lastMess = () => {
  elemScreen.scrollTop = elemScreen.scrollHeight;
};
let getMessage = () => {
  for (let key in tempMess) {
    renderMess(tempMess[key][0], tempMess[key][1]);
  }
  lastMess();
};
getMessage();

let updateValue = (e) => {
  let eValue = e.target.value;
  tempMess[Object.keys(tempMess).length] = [eValue, "isA"];
  localStorage.setItem("data", JSON.stringify(tempMess));
  e.target.value = "";
  renderMess(eValue, "isA");
  postMessage(eValue);
  lastMess();
};
input.addEventListener("change", updateValue);

let Reset = () => {
  localStorage.clear();
  location.reload();
};
window.addEventListener("message", function (event) {
  if (event.data != "") {
    renderMess(event.data, "isB");
  }
  lastMess();
});

let postMessage = (value) => {
  var popup = window.open("http://127.0.0.1:8080/chatB.html", "index");
  popup.postMessage(value, "http://127.0.0.1:8080/chatB.html");
};
