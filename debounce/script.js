const debounceBtn = document.querySelector(".debounceBtn");

const debounce = (cb, delay) => {
  return () => {
    setTimeout(() => {
      cb();
    }, delay);
  };
};
debounceBtn.addEventListener(
  "click",
  debounce(() => {
    console.log("Button clicked");
  }, 2000)
);
