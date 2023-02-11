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
//zad1()
//zad2()
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
class Fruit{
    constructor(fruitName, fruitColor, cookable){
        this.fruitName=fruitName;
        this.fruitColor=fruitColor;
        this.cookable=cookable;
    }
}
function zad3(){
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
    const filteredFruits = fruits.filter((fruit)=>{
        if (fruit.fruitName===fruit.fruitColor)
            return true
        return false
    });
    filteredFruits.forEach((fruit)=>{
        console.log(fruit)
    })
}