type state = {
    money: number,
    sum: number,
    remainder: number,
    items: Item[],
    window: "main" | "buy"
}

type itemAction = {
    type: "increment_single" | "decrement_single"
    payload: string
}

type generalAction = {
    type: "open_buy" | "checkout" | "checkout" | "close"
}

type action = itemAction | generalAction

export const reducer = (state: state, action: action): state => {
    switch(action.type){
        case "open_buy":
            state = {...state, window: "buy"}
            return state
        case "close":
            state = {...state, window: "main"}
            return state
        case "checkout":
            if(state.remainder < 0){
                alert("Not enough money!")
                return state
            }
            state.items.forEach(item => {
                item.inventoryAmount += item.shopAmount
                item.shopAmount = 0
            })
            state = {
                ...state, 
                window: "main"
            }
            return state
        case "increment_single": {
            state.items.find(i => i.name === action.payload)!.shopAmount++
            let newSum = 0
            state.items.forEach(item => newSum += item.shopAmount * item.price)
            state = {...state, sum: newSum}
            return state
        }
        case "decrement_single": {
            const item = state.items.find(i => i.name === action.payload)!
            item.shopAmount--
            if(item.shopAmount < 0)
            item.shopAmount = 0
            let newSum = 0
            state.items.forEach(item => newSum += item.shopAmount * item.price)
            state = {...state, sum: newSum}
            return state
        }
        default:
            const err: never = action
            throw new Error(`Unhandled exception : ${err}.`)
    }

}