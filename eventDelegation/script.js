const delegation = document.querySelector(".delegation");

delegation.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    if (e.target.innerText === "Labib") {
      e.target.style.color = "green";
    } else if (e.target.innerText === "Rashed") {
      e.target.style.color = "blue";
    } else if (e.target.innerText === "Saad") {
      e.target.style.color = "yellow";
    } else {
      e.target.style.color = "red";
    }
  }
});
