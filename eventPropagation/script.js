const outDiv = document.querySelector(".outDiv");
const form = document.querySelector(".form");
const btn = document.querySelector(".btn");

const handleClick = (e) => {
  console.log(e.currentTarget);
};

// Event capturing or event trickling (without cature objet it's event bubbling)
outDiv.addEventListener("click", handleClick, { capture: true });
form.addEventListener("click", handleClick, { capture: true });
btn.addEventListener("click", handleClick, { capture: true });

// Only "true" (without capture function)
// outDiv.addEventListener("click", handleClick, true);
// form.addEventListener("click", handleClick, true);
// btn.addEventListener("click", handleClick, true);

// 1: form      2: button       3: outDiv.
// outDiv.addEventListener("click", handleClick);
// form.addEventListener("click", handleClick, { capture: true });
// btn.addEventListener("click", handleClick);
