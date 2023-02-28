let students = [
    "Ahmad", "Ali", "Brandon", "David", "John T", "Jon P", "Josh", "Leo", "Luke", "Sean", "Wylie"
]

let randNum = Math.floor(Math.random() * students.length);

console.log(`The unlucky student for this one is ${students[randNum]}`)