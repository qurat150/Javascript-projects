// const incrementWhenCall = () =>{
//     let count = 0;
//     function ok(){
//         count ++
//         if(count <= 3){
//             console.log(count);
//             ok()
//         }
//     }
//     ok();
// }

//  incrementWhenCall()

// let students = [
//     {name : "Tahir", subject : "Frontend"},
//     {name : "Qurat", subject : "Backend"}
// ]
// const enrollStudents = (studentObj, callback) => {
//     setTimeout(() => {
//         students.push(studentObj)
//         console.log("Student has been pushed");
//         callback()
//     }, 3000);
// }
// const fetchingStudents = () =>{
//     let str = "";
//     setTimeout(() => {
//         students.forEach((arrayKaEkElem)=>{
//             str = str + `<li>${arrayKaEkElem.name} </li>`
//         })
//         document.querySelector(".students").innerHTML = str;
//         console.log("Student has been shown");
//     }, 1000);
// }
// enrollStudents({name : "newStudent", subject : "FullStack"}, fetchingStudents)
// greet()
// console.log(x);
// var x = 7;

// function greet () {
//     console.log("hello");
// }

// let promise = new Promise((res,rej)=>{
//     res(45)
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })
