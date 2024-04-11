import { itemList } from "./Items"

export type reducerState = {
    money: number,
    sum: number,
    items: Item[],
    descriptionItem: Item | null,
    window: "main" | "buy" | "sell"
}

export const initialState: reducerState = {
    money: 5000,
    sum: 0,
    items: itemList,
    descriptionItem: null,
    window: "main"
}

export type itemAction = {
    type: "increment_single" | "decrement_single" | "increment_ten" | "decrement_ten" | "update_description"
    payload: Item
}

export type generalAction = {
    type: "open_buy" | "open_sell" | "checkout_buy" | "checkout_sell" | "close"
}

export type action = itemAction | generalAction

export const reducer = (state: reducerState, action: action): reducerState => {
    switch(action.type){
        case "open_buy":
            return {...state, window: "buy"}
        case "open_sell": 
            return {...state, window: "sell"}
        case "close":{
            const newList = state.items.map(item => {
                return {...item, shopAmount: 0}
            })
            return {...state, window: "main", items: newList, sum: 0 }
        }
        case "checkout_buy":{
            if(state.money - state.sum < 0){
                alert("Not enough money!")
                return state
            }
            const newList = state.items.map(item => {
                return {...item, inventoryAmount: item.inventoryAmount + item.shopAmount, shopAmount: 0}
            })
            return {
                ...state, 
                window: "main",
                items: newList,
                money: state.money - state.sum,
                sum: 0
            }
        }
        case "checkout_sell":{
            const newList = state.items.map(item => {
                return {...item, inventoryAmount: item.inventoryAmount - item.shopAmount, shopAmount: 0}
            })
            return {
                ...state, 
                window: "main",
                items: newList,
                money: state.money + state.sum,
                sum: 0
            }
        }
        case "increment_single": {
            const target = state.items.find(i => i.name === action.payload.name)!
            const newList = state.items.map(i => {
                if(i.name != target.name)
                    return i
                return {...i, shopAmount: state.window === "buy" ? i.shopAmount + 1 : Math.min(i.shopAmount + 1, i.inventoryAmount)}
            })
            let newSum = 0
            newList.forEach(item => {
                newSum += item.shopAmount * item.price
            })
            return {...state, sum: newSum, items: newList}
        }
        case "increment_ten": {
            const target = state.items.find(i => i.name === action.payload.name)!
            const newList = state.items.map(i => {
                if(i.name != target.name)
                    return i
                return {...i, shopAmount: state.window === "buy" ? i.shopAmount + 10 : Math.min(i.shopAmount + 10, i.inventoryAmount)}
            })
            let newSum = 0
            newList.forEach(item => {
                newSum += item.shopAmount * item.price
            })
            return {...state, sum: newSum, items: newList}
        }
        case "decrement_single": {
            const target = state.items.find(i => i.name === action.payload.name)!
            const newList = state.items.map(i => {
                if(i.name != target.name)
                    return i
                return {...i, shopAmount: i.shopAmount === 0 ? 0 : i.shopAmount - 1}
            })
            let newSum = 0
            newList.forEach(item => newSum += item.shopAmount * item.price)
            return {...state, sum: newSum, items: newList}
        }
        case "decrement_ten": {
            const target = state.items.find(i => i.name === action.payload.name)!
            const newList = state.items.map(i => {
                if(i.name != target.name)
                    return i
                return {...i, shopAmount: Math.max(0, i.shopAmount - 10)}
            })
            let newSum = 0
            newList.forEach(item => newSum += item.shopAmount * item.price)
            return {...state, sum: newSum, items: newList}
        }
        case "update_description": {
            return {...state, descriptionItem: action.payload}
        }
        default:
            const err: never = action
            throw new Error(`Unhandled exception : ${err}.`)
    }

}