import { useRef, useState } from "react";


export default function App() {
    // 建立一個useRef的變數
    const inputRef = useRef(null);


    console.log('App 渲染了...');


    const submitHandler = () => {        
        // 動態改變類型為 password
        inputRef.current.type = "password";        
    }


    const submitHandler2 = () => {
        // 動態改變類型為 text
        inputRef.current.type = "text";
    }


    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={submitHandler}>關閉密碼</button>
            <button onClick={submitHandler2}>查看密碼</button>
        </>
    )
}

