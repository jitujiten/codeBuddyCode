// ## Level 1

// Re-write the below code to better code quality standards.

// ```
// async function GET_daTA() {
//   let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let DATA = await r.json();
//   return DATA;
// }

/////ans:-

async function getData() {
  try {
    let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let DATA = await r.json();
    return DATA;
  } catch (err) {
    console.log(err.message);
  }
}

// ## Level 1
// Re-write the below code to better code quality standards.
// Hint: use modern ES6 syntax and reduce lines of code.

// ```
// async function getUsers() {
//   let doc = await Promise.all(getUser(), getProfile(), getPosts());

//   let user = doc[0];
//   let Profile = doc[1];
//   let p = doc[2];

//   const userProfile = {
//     user: user,
//     profile: Profile,
//     posts: p
//   };

//   return userProfile;
// }
// ```

// ans:-
async function getUsers() {
  let [user, Profile, posts] = await Promise.all([
    getUser(),
    getProfile(),
    getPosts(),
  ]);

  const userProfile = {
    user,
    Profile,
    posts,
  };

  return userProfile;
}


// ## Level 3

// Re-write the below code to better code quality standards.
// Hint: use modern ES6 syntax and reduce lines of code.

// ```
// async function getUsers(users) {
//   const new_users = [];

//   for (let i = 0; i < users.length; i = i + 1) {
//     const newUser = user[i];
//     newUser.id = i;

//     new_users.push(newUser);
//   }

//   return new_users;
// }
// ```



//ans:-

async function getUsers(users) {

    const new_users =users.map((value,index)=>{
        return {...value,id:index}
    })
    return new_users;
  }



//   ### level 1:
// 1. Convert [1, 2, 3] to [2, 3, 4] using one line of code.
// Output should be [2, 3, 4]

// ans:-

const arr=[1, 2, 3];

for(var i=0;i<arr.length;i++){
    arr[i]=arr[i]+1
}
console.log(arr)


// 2. Calculate total of all the numbers in array [1, 2, 3] using one line of code.
// Output should be a number: 6

//ans:-
const dummy=[1, 2, 3];

const ans=dummy.reduce((accu,val)=>{
    return accu+=val
},0)
console.log(ans)




// 3. Print all the properties of the object along with value {name: 'Elie', rank: 'Pro'}.
// Output should be a string: "name: Elie, rank: Pro"


// ans:-
const obj = { name: 'Elie', rank: 'Pro' };
const result = Object.entries(obj)
const  str=[]
result.map(([key,val])=>{
    str.push(`${key}:${val}`)
})
console.log(str.join())




// ## Level 1

// ---

// Write a function in Javascript to print the following pattern.

// ```
//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1
// ```

// The function can take the number of rows as input. The pattern should be printed in the console. Minimum number of rows should be 3.



//ans:-

function printPattern(rows) {
    if (rows < 3) {
      console.log("Minimum number of rows should be 3.");
      return;
    }
  
    for (let i = 1; i <= rows; i++) {
      let pattern = "";
      let spaces = " ".repeat((rows - i) * 2);
  
      for (let j = 1; j <= i; j++) {
        pattern += j + " ";
      }
  
      for (let k = i - 1; k >= 1; k--) {
        pattern += k + " ";
      }
  
      console.log(spaces + pattern.trim());
    }
  }
  
  printPattern(4)


//   ## Level 2

// ---

// Write a function in Javascript to print the sum of the first n fibonacci numbers.

// **Input:** 6

// **Output:**

// ```
// 1 1 2 3 5 8
// Sum: 20
// ```


//ans:-
function printFibonacciSum(n) {
    if (n <= 0) {
      console.log("Invalid input. Please provide a positive integer.");
      return;
    }
  
    let fibSequence = [1];
    let sum = 1;
  
    let prev = 0;
    let current = 1;
  
    for (let i = 2; i <= n; i++) {
      let next = prev + current;
      fibSequence.push(next);
      sum += next;
      prev = current;
      current = next;
    }
  
    console.log(fibSequence.join(" "));
    console.log("Sum:", sum);
  }
  
  printFibonacciSum(6);


//   ## Level 3

// ---

// Normalize the following object to an array of objects.

// **Input:**

// ```
// {
//   liked: [
//     { id: 1, name: "John Doe", age: 20 },
//     { id: 2, name: "Jane Doe", age: 30 },
//     { id: 3, name: "John Smith", age: 40 }
//   ],
//   disliked: [
//     { id: 4, name: "Jason Doe", age: 20 },
//     { id: 5, name: "Josh Doe", age: 30 },
//     { id: 6, name: "Karen Smith", age: 40 }
//   ],
//   loved: [
//     { id: 7, name: "Jasmine Doe", age: 20 },
//     { id: 8, name: "Bob Doe", age: 30 },
//     { id: 9, name: "Tom Smith", age: 40 }
//   ]
// }
// ```


// ans:-

function normalizeObject(obj) {
    const result = [];
  
    for (let reaction in obj) {
      const people = obj[reaction];
  
      for (let person of people) {
        const normalizedPerson = { ...person, reaction };
        result.push(normalizedPerson);
      }
    }
  
    return result;
  }


  const object={
    liked: [
      { id: 1, name: "John Doe", age: 20 },
      { id: 2, name: "Jane Doe", age: 30 },
      { id: 3, name: "John Smith", age: 40 }
    ],
    disliked: [
      { id: 4, name: "Jason Doe", age: 20 },
      { id: 5, name: "Josh Doe", age: 30 },
      { id: 6, name: "Karen Smith", age: 40 }
    ],
    loved: [
      { id: 7, name: "Jasmine Doe", age: 20 },
      { id: 8, name: "Bob Doe", age: 30 },
      { id: 9, name: "Tom Smith", age: 40 }
    ]
  }

  console.log(normalizeObject(object))