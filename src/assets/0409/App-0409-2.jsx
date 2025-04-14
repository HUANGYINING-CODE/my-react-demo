import { useState } from "react";

// 建立元件 (自首名稱大寫)
function Card({ person }) {
    const { name, age } = person

    return (
        <div className="card">
            <div className="card-body">
                {/* Hi, React */}
                {/* Hi,{person.name} */}
                Hi,{name} 今年 {age} 歲
            </div>
        </div>
    )
}

function App() {
    // 解釋

    // 取出特定值作為變數
    // const person = {
    //     name: '建仔',
    //     age: '10',
    // }

    // // 一般寫法
    // const name = person.name;
    // const age = person.age;
    // console.log(name, age);

    // //物件結構
    // const { name, age } = person;
    // console.log(name, age);

    // useState - ReactHook
    const [person, setPerson] = useState({
        name: '建仔',
        age: '10'
    });

    return (
        <>
            {/* 第一個person =>元件的屬性 */}
            {/* 第二個person =>變數(可以是型式) */}
            <Card person={person}></Card>
            <Card person={person} />
        </>
    )
}
export default App