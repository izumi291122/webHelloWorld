
// console.log("aaaaa");
// alert("aaaaa");

// let a = "aaaaa \n\
// affffffa usuhf \n\
// lan sff"
// console.log(a);

// let i = 0;
// while (i < 10){
//     i++;
//     console.log(i);
// }


let cars = new Array;
cars = [
    2, 3,4,6,3,7,34,78,345
]

// console.log(cars);
// cars.pop();
// cars.shift();
// cars.sort();

// console.log(cars);

// cars.forEach(element => {
//     console.log(element);
// });

// lọc mảng
// let fiteredCars = cars.filter(car => {
//     return car.includes("kan5");
// })
// console.log("fitt =  %s - %s", fiteredCars, fiteredCars);

// function sayHello(message) {
//     console.log(message);
//     message += 1 
    
// }


// function sayHello2( name = "oo"){
//     console.log(name);

// }
// let count = 0;
// setInterval(function() {
//     console.log(count);
//     count++
// }, 10000)

let point = {};
point.a = 1;
point.b = 2;

const {a, b} = point;
console.log( "a = %d, b = %d", a, b);
console.log( "a =  ${a}");

console.log( "point = ", typeof point);

// let myCar = {
//     lop: "mâ",
//     model: "g65",
//     year: 2002
// };
// let arrayCar = [];

// for(let i = 0; i < 10; i++){
//     let myCar = {}
//     myCar.lop = "Lớp: " + i;
//     myCar.model = "G " + i;
//     myCar.year = i + 2022; 
//     arrayCar.push(myCar);
// }

// arrayCar.forEach(element => {
//     console.log(element);
// });

// console.log(myCar);
// console.log(JSON.stringify(arrayCar));

// function HocSinh(name, age){
//     this.name = name;
//     this.age = age;
// }
// let HocSinh1 = new HocSinh("Quân", 18);
// console.log(HocSinh1);


class People {
    constructor(name, age, address) {
        this.name = name ?? "No name";
        this.age = age ?? 0;
        this.address = address ?? "No address";
    }
}
class NhanVien extends People{
    constructor(id, luong, name, age, address){
        super(name, age, address);
        this.id = id ?? 0;
        this.luong = luong ?? "No luong";
    }
}

// let people = new People();
// let people2 = new People("Quân", 19, "Thái nguyên");
// console.log(people2);
// console.log(JSON.stringify(people2));

class Todo{
    constructor(userId, id, title, completed){
        this.userId = userId ?? 0;
        this.id = id ?? 0;
        this.title = title ?? "No title";
        this.completed = completed ?? true;
    }
}


const url1 = "https://jsonplaceholder.typicode.com/todos";
const url2 = "https://jsonplaceholder.typicode.com/users";

// bất đồng bộ
// fetch(url).then((response) => {
//     // trường họp thành công loading api
//     response.json().then((data) => {
//         debugger
//     })
// }).catch((error) => {
//     // thất bại 
// });
// debugger

let arr = [];

async function fetchDataAPISV(url){
    // resolve : được giải quyết
    // reject : bị từ chối
    // debugger
    return new Promise((resolve, reject) => {
        fetch(url).then((response) => {
            // trường họp thành công loading api
            // debugger
            response.json().then((data) => {
                console.log(data);
                
                resolve({result: data, error: "", message: "Loading API failed"});
            })
        }).catch((error) => {
            // thất bại 
            // debugger
            console.log(error);
            reject({error: error, message: "No API found"})
            
        });
    });
}

fetchDataAPISV(url1).then(result => {
    debugger
    arr = result.Array;
}).catch(error => {
    debugger
})

console.log("arr = ", arr)