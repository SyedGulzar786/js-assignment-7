// task 1

// var prom1 = prompt(`Player 1: Enter "Heads" Or "Tails"`).toLowerCase();
// var prom2 = prompt(`Player 2: Enter "Heads" Or "Tails"`).toLowerCase();
// var random = Math.ceil(Math.random()*2)
// console.log(random)
// if(random == 1){
//     alert("CONGRATULATIONS..! Player 1 win");
// }
// else{
//     alert("CONGRATULATIONS..! Player 2 wins")
// }

// task 2 

// var prom = +prompt("enter the length of the password you would like to be generated")
// var chars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()_";
// var password = "";
// for(var i = 0; i < prom; i++){
//   var random = Math.floor(Math.random()*chars.length)
//   password += chars[random]
// }
// console.log(password)

// task 3-a

// var cap = "QWERTYUIOPASDFGHJKLZXCVBNM";
// var small ="qwertyuiopasdfghjklzxcvbnm";
// var num = "1234567890";
// var sims = "!@#$%^&*()_"; 
// var store  = "";
// var store1 = "";
// var store2 = "";
// var store3 = "";
//  for(var i = 0; i < 3; i++){
//   var random  = Math.floor(Math.random()*cap.length)
//   var random1 = Math.floor(Math.random()*small.length)
//   var random2 = Math.floor(Math.random()*num.length)
//   var random3 = Math.floor(Math.random()*sims.length)
//  store  += cap[random]
//  store1 += small[random1]
//  store2 += num[random2]
//  store3 += sims[random3]
// }
// var password = store + store1 + store2 + store3;
// console.log(password)

// task 3-b

// function passwordGenerator(cap, small, num, sims) {
//     let password = "";
//     for (let i = 0; i < 3; i++) {
//       password += cap[Math.floor(Math.random() * cap.length)];
//     }
//       for (let i = 0; i < 3; i++) {
//       password += small[Math.floor(Math.random() * small.length)];
//     }
//     for (let i = 0; i < 3; i++) {
//       password += num[Math.floor(Math.random() * num.length)];
//     }
//     for (let i = 0; i < 3; i++) {
//       password += sims[Math.floor(Math.random() * sims.length)];
//     }
  
//     console.log("Your password is: " + password);
//   }
//   const cap = "QWERTYUIOPASDFGHJKLZXCVBNM";
//   const small = "qwertyuiopasdfghjklzxcvbnm";
//   const num = "1234567890";
//   const sims = "!@#$%^&*()_";
//   passwordGenerator(cap, small, num, sims);

// task 3-c (more correect tareeqa....!)

// var cap = "QWERTYUIOPASDFGHJKLZXCVBNM";
// var small ="qwertyuiopasdfghjklzxcvbnm";
// var num = "1234567890";
// var sims = "!@#$%^&*()_"; 
// var password = "";
// for(var i = 0; i < 12; i++){
//  if(i < 3){
//     password += cap[Math.floor(Math.random() * cap.length)];
//  }
// else if(i >= 3 && i < 6){
//     password += small[Math.floor(Math.random() * small.length)];
//  }
// else if(i >= 6 && i < 9){
//     password += num[Math.floor(Math.random() * num.length)];
//  }
// else{
//     password += sims[Math.floor(Math.random() * sims.length)];  
//  }
// }
// console.log(password)