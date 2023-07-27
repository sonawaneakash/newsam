// var im = (function(){
// 	console.log("hi this is em");
// })();
// im();
var a = 20;
var b = 30;
// function display(res){
// 	console.log("res-->",res);
// }

// function operation(a,b,display){
// 	var result = a + b;
// 	display(result);
// 	console.log("after display")
// }

// operation(a,b,display);

// function pro(){
// 	console.log("before promise")
// 	var promise = new Promise((resolve, reject)=>{
// 		return resolve(a+b);
// 	})
// 	promise.then((result)=>{
// 		console.log("result==",result);
// 	})
// 	console.log("after promise")
// }

// pro();
// function pr(){
// 	return setTimeout(()=>{
// 		a + b;
// 	},2000)
// }
// async function pro(){
// 	console.log("before promise")
// 	var result = await pr();
// 	result.then((result)=>{
// 		console.log(result)
// 	})
// 	console.log("after promise")
// }

// pro();

// var p1 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res(10)
//     },2000)
// })
// var p2 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         rej("promise is rejected")
//     },2000)
// })

// Promise.allSettled([p1,p2]).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })
	var a = [1,2,3];
    [s,d,f] =  a;
     s = 20
    console.log(s);
    console.log(d);
    console.log(f);
