var arr= [
  {
    name:'test'
  },
  {
    name: 'test'
  },
  {
    name: 'to infinity and beyond'
  },
  {
    name: 'test'
  },
  {
      name: 'Something'
  }
]
var sorted=[]
for (let item in arr) {
   sorted.push(arr[item].name)
}
var result = []
for(var i =0; i < sorted.length ; i++){
    if(result.indexOf(sorted[i]) == -1) result.push(sorted[i]);
}
result=result.join(", ");

console.log('sorted',sorted)
console.log('result:', result)
