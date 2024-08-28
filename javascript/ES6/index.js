function sum(a,...b)
{
  console.log(b)
  let newArray=[9,...b,22]
  console.log(newArray)
}
sum(1,2,3,4,5,6,7)


let arr=[2,3,4,5,6]
const[a,b,...c]=arr

console.log(a)

console.log(arr[2])

let emp={
    name:"shru",
    salary:18000

}
const {name,salary}=emp
console.log(emp.name)
console.log(name)


class Student{

    constructor(a,b,c)
    {
        this.name=a
        this.age=b
        this.id=c

    }

}


class leader extends Student
{
    salary;
    constructor(a,b,c,d)
    {
        super(a,b,c)
        this.salary=d
    }

}
let n=new leader("fiif",23,344,20000)
console.log(n.name,n.salary)
let obj=new Student('shru',23,123)
console.log(obj)

