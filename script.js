var buttonEl = document.querySelector("button");
var shouji = document.body;
var h3El = document.createElement("h3");

buttonEl.addEventListener("click", function () {
    h3El.textContent = "这是我的新手机";
    shouji.appendChild(h3El);
    h3El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
});