var array = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
var obj = {}
var arr =[]
for (var tags of array){
    if (obj[tags]) {
        obj[tags]++;
    }else {
        obj[tags] = 1;
    }
}
console.log(obj)

for (var key in obj){
    arr.push(key)
}
var sortArr = arr.sort((a, b)=>obj[b]-obj[a])
var sortObbj = Object.assign({},sortArr)
console.log(sortObbj)
