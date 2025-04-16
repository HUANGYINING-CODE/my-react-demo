import { useState } from "react";

function ChildComponent({propsCount}){
    return <div>{propsCount}</div>
}


//子元件
function MyComponent() {
    // let count = 0
    // 使用狀態(state)控制變數
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // count++
        // 使用useState中的方法，改變count變數
        setCount(count + 1);
    }

    return (
        <>
            <button onClick={handleClick}>點擊次數:{count}</button>
            <ChildComponent propsCount={count}/>
        </>
    )
}
// 程式進入點
function App() {
    return (
        <>
            {/* 呼叫子元件 */}
            {/* 不同子元件之間的狀態state是互相獨立的，互不影響 */}
            <MyComponent />
            <MyComponent />
            <MyComponent />
        </>
    )
}
export default App
