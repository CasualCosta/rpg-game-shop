const potion = {
    name: "Hi-Potion",
    use: "Heal 20 HP",
    price: 100,
    description: "drink it"
}
const lotion = {
    name: "Body Lotion",
    use: "Heal 30 HP",
    price: 200,
    description: "Rub it"
}

const notion = {
    name: "Clear Notion",
    use: "Heals sanity",
    price: 120,
    description: "Have it"
}

const motion = {
    name: "Motion",
    use: "Heals paralysis",
    price: 120,
    description: "Be in it"
}

const shopItems = [
    {
        item: potion,
        amount: 0,
        owned: 0
    },
    {
        item: lotion,
        amount: 0,
        owned: 0
    },
    {
        item: notion,
        amount: 13,
        owned: 0
    },
    {
        item: motion,
        amount: 8,
        owned: 0
    }
]

//#region Elements
const moneyElement = document.getElementById("money")
const costElement = document.getElementById("cost")
const remainderElement = document.getElementById("remainder")
const contentElement = document.getElementById("content")

let money = 8500
let cost = 0
let remainder = money - cost;
let selectedIndex = 0
const itemLength = 30

moneyElement.innerHTML = `${money}`
let contentHTML = ""
for(let i = 0; i < shopItems.length; i++){
    const name = shopItems[i].item.name
    contentHTML += `<p>${name.padEnd(30, "_")}< ${shopItems[i].amount.toString().padStart(2, "0")} ></p>`
    contentHTML += ``
}
contentElement.innerHTML = contentHTML