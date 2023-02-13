class Fruit {
    constructor(fruitName, fruitColor, readyForSale) {
        this.fruitName = fruitName;
        this.fruitColor = fruitColor;
        this.readyForSale = readyForSale;
    }
}
let fruits = [
    new Fruit('banana', 'yellow', false),
    new Fruit('apple', 'green', false),
    new Fruit('orange', 'orange', false),
    new Fruit('pear', 'green', false),
    new Fruit('avocado', 'green', false),
    new Fruit('tomato', 'red', true),
    new Fruit('cherry', 'cherry', true),
    new Fruit('mango', 'mango', true),
    new Fruit('lemon', 'yellow', true),
];
let multiColoredFruits = [
    new Fruit('banana', ['yellow'], false),
    new Fruit('apple', ['green', 'yellow'], false),
    new Fruit('orange', ['orange'], false),
    new Fruit('kiwi', ['brown', 'green'], false),
    new Fruit('watermelon', ['green', 'red'], false),
    new Fruit('lemon', ['green', 'yellow'], false),
    new Fruit('dragonfruit', ['green', 'red'], false),
    new Fruit('blueberries', ['blue'], false),
]
function zad1() {
    const arrrayPeople = [];
    let loop = true;
    while (loop) {
        const name = prompt("Upišite ime: ");
        const surname = prompt("Upišite prezime");
        const height = Number(prompt("Upišite visinu"));
        const inputObject = {
            name: name,
            surname: surname,
            height: height
        };
        arrrayPeople.push({ ...inputObject });
        const dialog = prompt("Želite li završiti unos?");
        if (dialog === "DA")
            break
    };
    let avarage = 0;
    let biggestDifference = 0;
    let differencePerson;
    for (const person of arrrayPeople) {
        avarage += person.height;
    };
    avarage = avarage / arrrayPeople.length;
    for (const person of arrrayPeople) {
        if (Math.abs(person.height - avarage) > biggestDifference) {
            biggestDifference = Math.abs(person.height - avarage);
            differencePerson = person;
        };
    };
    console.log(differencePerson);
};
function zad2() {
    const amount = Number(prompt("Upišite broj osoba koje želite unijeti"));
    const arrrayPeople = []
    for (let i = 0; i < amount; i++) {
        const name = prompt("Upišite ime: ");
        const surname = prompt("Upišite prezime");
        const eyeColor = prompt("Upišite boju očiju");
        const hairCOlor = prompt("Upišite boju kose");
        const height = Number(prompt("Upišite visinu"));
        const inputObject = {
            name: name,
            surname: surname,
            height: height,
            eyeColor: eyeColor,
            hairColor: hairCOlor
        };
        arrrayPeople.push({ ...inputObject });
    }
    arrrayPeople.sort((a, b) => {
        if (a.height > b.height)
            return 1
        else if (b.height > a.height)
            return -1
    })
    const overMedian = arrrayPeople.slice(arrrayPeople.length / 2, arrrayPeople.length);
    const filteredPeople = overMedian.filter((element) => {
        if (element.eyeColor === element.hairColor)
            return true
        return false
    })
    filteredPeople.forEach((element) => {
        console.log(element)
    })
}
function zad3() {
    let fruits = [
        new Fruit('banana', 'yellow', false),
        new Fruit('apple', 'green', false),
        new Fruit('orange', 'orange', false),
        new Fruit('pear', 'green', false),
        new Fruit('avoado', 'green', false),
        new Fruit('tomato', 'red', false),
        new Fruit('cherry', 'cherry', false),
        new Fruit('mango', 'mango', false),
    ];
    const filteredFruits = fruits.filter((fruit) => {
        if (fruit.fruitName === fruit.fruitColor)
            return true
        return false
    });
    filteredFruits.forEach((fruit) => {
        console.log(fruit)
    })
}
function zad4() {
    fruits.forEach((element) => {
        console.log(element)
    })
    console.log("Izmijenjeno");
    const changedColor = multiColoredFruits.map((item) => {
        //not sure if this part is requiered but I saw it was messing with the fifth taks so I had to put it here
        const element = JSON.parse(JSON.stringify(item))
        if (element.fruitColor.includes("yellow"))
            element.fruitColor[element.fruitColor.indexOf("yellow")] = "red"
        return element
    })
    changedColor.forEach((element) => {
        console.log(element)
    })
}
function zad5() {
    const yellowFruits = multiColoredFruits.filter((element) => {
        return element.fruitColor.includes("yellow")
    })
    yellowFruits.forEach((element) => {
        console.log(element)
    })
}
function zad6() {
    console.log("Kosarica")
    fruits.forEach((element) => {
        console.log(element)
    })
    console.log("")
    let unreadyItems = [];
    fruits.forEach((element) => {
        if (!element.readyForSale)
            unreadyItems.push(element)
    })
    console.log("Nespremno")
    unreadyItems.forEach((element) => {
        console.log(fruits.indexOf(element))
    })
    let readyItems = [...fruits]
    for (const element of unreadyItems) {
        readyItems.splice(readyItems.indexOf(element), 1)
    }
    console.log("Preporucena kupnja")
    readyItems.forEach((element) => {
        console.log(element)
    })
}
function zad7() {

    fruits.sort((a, b) => {
        if (a.fruitName > b.fruitName)
            return 1
        else if (b.fruitName > a.fruitName)
            return -1
        return 0
    })
    fruits.forEach((element) => {
        console.log(element)
    })
}
function zad8() {

    const number = Number(prompt("Upišite završni broj"))
    let secondNumber = number;
    let firstNumber = 0;
    let sum = Math.floor(number / 2)
    gauss(firstNumber, secondNumber, sum, number)
    //Note: please do not create infinite recursion
}
function gauss(firstNumber, secondNumber, sum, number) {
    firstNumber += 1
    secondNumber -= 1
    sum += firstNumber + secondNumber
    if (firstNumber >= secondNumber) {
        if (number % 2 != 0)
            sum -= secondNumber
        console.log(sum);

        return sum
    }
    else
        gauss(firstNumber, secondNumber, sum, number)
}

function zad9() {
    const input = prompt("Upšite niz riječ odvojenih razmacima").split(" ")
    const csvInput = input.toString()
    console.log(csvInput)
}
/*
console.log("zad1")
zad1()
console.log("zad2")
zad2()
console.log("zad3")
zad3()
console.log("zad4")
zad4()
console.log("zad5")
zad5()
console.log("zad6")
zad6()
console.log("zad7")
zad7()
console.log("zad8")
zad8()
console.log("zad9")
zad9()*/