// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => console.log(response))
//   .catch((e)=>{
//     console.log(e.cause);
//   });

console.log("Started");
const getUser= async()=> {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/users`
		);
		if (!response.ok) {
			throw new Error("Failed to fetch user data!");
		}
    // throw new Error();
		const users = await response.json();
		console.log(users);
		// const allUser = users.map((user) => user.name);
		// console.log(allUser);
	} catch (error) {
		console.log(error);
	}
	console.log("End");
}

getUser();
