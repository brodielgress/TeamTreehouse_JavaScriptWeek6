// const users = [
//     {name: 'Samir', age: 27},
//     {name: 'Angela', age: 33},
//     {name: 'Beatrice', age: 47}
//   ];  

// const usersObject = users.reduce((usersObject, user) => {
//         usersObject[user.name] = user.age;
//         return usersObject;
//     }, {});

// console.log(usersObject);

// const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];
// const usersClearNames = userNames
//     .filter(name => name.startsWith('S'))
//     .map(name => ({ name: name}));
    
// console.log(usersClearNames);

// Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];

// const users = [
//     {name: 'Samir', age: 27},
//     {name: 'Angela', age: 33},
//     {name: 'Beatrice', age: 42},
//     {name: 'Shaniqua', age: 30},
//     {name: 'Marvin', age: 23},
//     {name: 'Sean', age: 47}
//   ];

// const usersNewArray = users
//     .filter(user => user.age >= 30)
//     .map(user => user.name);

// console.log(usersNewArray);

// unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
// Write your code below

// const products = [
//     { name: 'hard drive', price: 59.99 },
//     { name: 'lighbulbs', price: 2.59 },
//     { name: 'paper towels', price: 6.99 },
//     { name: 'flatscreen monitor', price: 159.99 },
//     { name: 'cable ties', price: 19.99 },
//     { name: 'ballpoint pens', price: 4.49 }
//   ];

// const product = products
//      .filter(product => product.price < 10)
//      .reduce((highest, product) => {
//          if (highest.price > product.price) {
//              return highest;
//          }
//          return product;
//      });

     
// const productTotal = products
//     .filter(product => product.price > 10)
//     .reduce((sum, product) => sum + product.price, 0)
//     .toFixed(2);
// console.log(productTotal);

// const purchaseItems = [
//     {
//         name: 'apples',
//         dept: 'groceries',
//         price: 2.49
//     },
//     {
//         name: 'bread',
//         dept: 'groceries',
//         price: 2.99
//     },
//     {
//         name: 'batteries',
//         dept: 'electronics',
//         price: 5.80
//     },
//     {
//         name: 'eggs',
//         dept: 'groceries',
//         price: 3.99
//     },
//     {
//         name: 't-shirts',
//         dept: 'apparel',
//         price: 9.99
//     }
// ];
// let groceryTotal;

// groceryTotal = purchaseItems
//   .filter(grocery => grocery.dept === 'groceries')
//   .reduce((total, grocery) => total + grocery.price, 0)
//   .toFixed(2);
// console.log(groceryTotal);

// groceryTotal should be: 9.47
// Write your code below

// const movies = [
//     ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
//     ['Finding Dory'],
//     ['Jaws', 'On the Waterfront']
//   ];

// const flatMovies = movies.reduce((arr, innerMovies) => [...arr, ...innerMovies], []);

// // console.log(flatMovies);

const users = [
    {
      name: 'Samir',
      age: 27,
      favoriteBooks:[
        {title: 'The Iliad'},
        {title: 'The Brothers Karamazov'}
      ]
    },
    {
      name: 'Angela',
      age: 33,
      favoriteBooks:[
        {title: 'Tenth of December'},
        {title: 'Cloud Atlas'},
        {title: 'One Hundred Years of Solitude'}
      ]
    },
    {
      name: 'Beatrice',
      age: 42,
      favoriteBooks:[
        {title: 'Candide'}
      ]
    }
  ];

  const books = users
    .map(user => user.favoriteBooks.map(book => book.title))
    .reduce((arr, titles) => [...arr, ...titles ], []);
  console.log(books);

  const customers = [
    {
      name: "Tyrone",
      personal: {
        age: 33,
        hobbies: ["Bicycling", "Camping"]
      }
    },
    {
      name: "Elizabeth",
      personal: {
        age: 25,
        hobbies: ["Guitar", "Reading", "Gardening"]
      }
    },
    {
      name: "Penny",
      personal: {
        age: 36,
        hobbies: ["Comics", "Chess", "Legos"]
      }
    }
  ];
  let hobbies;
  
  hobbies = customers
    .map(customer => customer.personal.hobbies.map(hobby => hobby))
    .reduce((arr, hobbies) => [...arr, ...hobbies ], []);
  console.log(hobbies);
  
  // hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
  // Write your code below
  