import { useReducer } from "react"

export default function Reducer2() {
    // 設定預設值
    const initialState = {
        count1: 0,
        count2: 10,
    }

    // 改變state函式
    const reducer = (state, action) => {
        // 根據傳入的值來判斷要對應的行為
        switch (action.type) {
            case "add":
                return {
                    ...state,
                    count1: state.count1 + action.value,
                };
            case "add2":
                return {
                    ...state,
                    count2: state.count2 + 1
                }





            default:
                return state;
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>count1:{count.count1}</p>
            <p>count2:{count.count2}</p>
            <button onClick={() => dispatch({ type: "add", value: 10 })}>count1</button>
            <button onClick={() => dispatch({ type: "add2" })}>count2</button>
        </div>
    )
}