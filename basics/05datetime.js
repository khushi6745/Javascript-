//date
let date=new Date()
// console.log(date)

// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toISOString())
// console.log(date.toJSON())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(typeof date)

// let createdate=new Date(2013,0,23)
// console.log(createdate)
// console.log(createdate.toDateString())

// let createdate=new Date(2013,0,23,5,3)
// console.log(createdate)
// // console.log(createdate.toLocaleString())
// let createDate=new Date("2023-04-14")
// console.log(createDate);


// let myDate=new Date("01-12-2023")
// let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myDate.getTime())

// let OneDate=new Date("01-12-2023")

// let myTimeStamp=(Date.now()/1000);
// console.log(myTimeStamp);

// console.log(OneDate.getTime())
// console.log(Math.round(Date.now()/1000))

let newdate=new Date();
// console.log(newdate);

// console.log(newdate.getDay());
// console.log(newdate.getMonth());
// `${console.log(newdate.getDay())}`

newdate.toLocaleString('default',{
    // weekday:"narrow",
    weekday:"long"
})
console.log(newdate);
