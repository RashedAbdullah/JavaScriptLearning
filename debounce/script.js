const debounceBtn = document.querySelector(".debounceBtn");

const debounce = (cb, delay) => {
  let timeout;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      cb();
    }, delay);
  };
};
debounceBtn.addEventListener(
  "click",
  debounce(() => {
    console.log("Button clicked");
  }, 1000)
);
