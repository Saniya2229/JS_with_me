# javascript and classes

## OOP

## object

- collection of properties and methods
- toLowercase etc.

## why use OOP

## Parts of OOP

object literal

- Connstructor function: Every time it gives you new instances.
- Prototypes
- classes
- Instances(new, this)

## 4 pillers

1. Abstraction - hide the details (ex - fetch)
2. Encapsulation - wraaped the data

example code:
let employee = {
baseSalary: 30000,
overtime: 10,
rate: 20,
getWage: function() {
return this.baseSalary + (this.overtime \* this.rate);
}
}

console.log(employee.getWage())

3. Inheritance -Allows a class to inherit properties and methods from another class.

4. polymorphism
   4.1 Poly means Many, morphism means Forms.
   4.2 In polymorphism the same method results in different actions depending on the object it is acting upon.
