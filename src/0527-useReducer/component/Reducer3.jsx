import { useReducer } from "react"

export default function Reducer3() {
    // 設定預設值
    const initialState = 0
    // 改變state函式
    const reducer = (state, action) => {
        // 根據傳入的值來判斷要對應的行為
        switch (action) {
            case "add":
                return state + 1

            default:
                return state;
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);  //dispatch通常搭配Reducer

    return (
        <div>
            <p>count1:{count}</p>
            <p>count2:{count2}</p>
            <button onClick={() => dispatch("add")}>count1+1</button>
            <button onClick={() => dispatch2("add")}>count2+1</button>
        </div>
    )
}