function modify(strings, ...values) {
  console.log(strings);
  console.log(values);
  
  const m = strings.reduce((prev, current)=>{
    return prev + current + (values.length ? "MD. " + values.shift() : "");
  }, "");
  return m;
}

const fName = "Rashed";
const lName = "Abdullah";

console.log(
  modify`My name is ${fName} and my father name is ${lName} from feni`
);
