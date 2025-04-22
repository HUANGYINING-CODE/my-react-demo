import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"

function TodoWrapper() {
    // 因為有N個todo，所以用陣列存放物件資料
    const [todos, setTodos] = useState([
        { content: '停車費', id: Math.random() },
        { content: '對發票', id: Math.random() },
    ])

    // 建立加入新的todo內容函式
    // 其餘運算子(...名稱)
    const addTodo = (newContent) => {
        setTodos([...todos, { content: newContent, id: Math.random() }])
    }

    // 建立刪除todo函式
    // 傳入被刪除的id
    const delTodo = (id) => {
        setTodos(todos.filter((todo) => {
            // 使用fliter方法，保留不被刪除的id
            return todo.id !== id
        }))
    }

    // 切換是否被點擊的狀態，更改原本isCompleted值
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id ? { ...todo, isComplete: !todo.isComlieted } : todo
        }))
    }

    return (
        <div className="wrapper">
            <h1>待辦事項</h1>
            <CreateForm addTodo={addTodo} /> 
            {
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id} delTodo={delTodo} toggleComplete={toggleComplete}/>
                })
            }
        </div>
    )
}
export default TodoWrapper