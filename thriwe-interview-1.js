// 1.
// ;(function () {
//   console.log(1)
//   setTimeout(function () {
//     console.log(2)
//   }, 1000)
//   setTimeout(function () {
//     console.log(3)
//   }, 0)
//   console.log(4)
// })()

// 2.
// console.log(1)
//  console.log(2)
//  console.log(3)

// 3.
// async function f() {
//   try {
//     let response = await fetch('/no-user-here');
//     let user = await response.json();
//   } catch(err) {
//     // catches errors both in fetch and response.json
//     alert(err);
//   }
// }

// 4.
// console.log(1 + 2 + '2' + '2' + 2)

// 5.
// console.log('A' - 'B' + '2')

// 6.
// const [value,setValue]=useState("1")
// setValue("2"):
// console.log(value)

// 7.
// useEffect(()=>{
// console.log(value)
// },[value])

// 8.
// const [value,setValue]=useState("1")
// setValue("2"):
// setValue("3"):
// console.log(value)

// 9.
// const [value,setValue]=useState("1")
// value="22"
// console.log(value)

// 10.
// router.push("/some-route","/some-url")
// /success?bookingId=123
