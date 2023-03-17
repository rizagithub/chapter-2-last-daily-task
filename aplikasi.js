// import function
const{sum}=require("./kuantitas")
const{min}=require("./kurang")
const{kali}=require("./kali")
const{bagi}=require("./bagi")
const{kuantitas}=require("./kuantitas")

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// // 1 hasil tambah inputan user (done)
// rl.question('Masukkan angka ke-1? ', (number1) => {
//     rl.question('Angka ke-2?', (number2)=>{
//         const result=sum(parseInt(number1),parseInt(number2));
//         console.log(result)
//         console.log(`Hello, ${result}!`);
//         rl.close();
//     })  
//   });

// 2 hasil kurang inputan user
// rl.question('Masukkan angka ke-1? ', (number1) => {
//     rl.question('Angka ke-2?', (number2)=>{
//         const result2=min(parseInt(number1), parseInt(number2));
//         console.log(result2)
//         console.log(`Hello, ${result2}!`);
//         rl.close();
//     })  
//   });
// console.log("====================================")

// 3 hasil kali inputan user
// rl.question('Masukkan angka ke-1? ', (number1) => {
//     rl.question('Angka ke-2?', (number2)=>{
//         const result3=kali(parseInt(number1), parseInt(number2));
//         console.log(result3)
//         console.log(`Hasil perkaliannya adalah, ${result3}!`);
//         rl.close();
//     })  
//   });

// 4 hasil bagi inputan user
// rl.question('Masukkan angka ke-1? ', (number1) => {
//   rl.question('Angka ke-2?', (number2)=>{
//       const result4=bagi(parseInt(number1), parseInt(number2));
//       console.log(result4)
//       console.log(`Hasil perkaliannya adalah = ${result4}!`);
//       rl.close();
//   })  
// });

// 5 hasil total harga kali quantitas barang
rl.question('Masukkan harga pertama ', (harga1) => {
  rl.question('Masukkan harga kedua ', (harga2) => {
      rl.question('Masukkan kuantitas barang ', (kuantitass) => {
  const result5 = kuantitas(parseInt(harga1), parseInt(harga2) , parseInt(kuantitass));
      console.log(result5);
      console.log(`Harga ${harga1} and Harga ${harga2} dijumlahkan , lalu dikali dengan ${kuantitass} hasilnya adalah ${result5}!`);
  rl.close();
  })
})
});