const info = ["name", "age", "email", "phone", "city"];
info.push("country");
info.unshift("firstname");
info.pop();
info.shift();
console.log(info);
for (let i=0; i <info.length; i++){
    console.log(i,info[i])
}
let Numbers = 0
while (Numbers < 20){
    Numbers++
    if (Numbers % 2 == 0)
        console.log(Numbers)
}