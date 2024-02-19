const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "This is value");
});

promise1
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

const getJob = (interviewPassed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (interviewPassed) {
        resolve("You have the job");
      } else {
        reject(new Error("You need more practice"));
      }
    }, 1000);
  });
};
// console.log(getJob(false));
getJob(false)
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej.message);
  });
