// Dynamic function for HTTP Request with AJAX:
const getRequest = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.open("get", url);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        cb(null, response);
      } else {
        cb(xhr.status, null);
      }
    }
  };

  xhr.send();
};

getRequest("https://jsonplaceholder.typicode.com/users", (err, res) =>
  err ? console.log(err) : console.log(res)
);
