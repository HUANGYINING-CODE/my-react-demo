import { useState } from "react"

function CreateForm({addTodo}) {
    // 建立input 內容變數
    // const=>常數
    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        // 取消網頁預設行為，不然會抓不到資料
        e.preventDefault();
        //增加todo內容
        addTodo(content);
        setContent('');
    }

    return (
        <form className="creat-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="請輸入待辦事項"
                value={content}
                // 雙向綁定
                // 當UI發生內容異動的時候，state會跟著改變
                // 當state發生改變時，UI也會跟者改變
                onChange={(e) => (
                    setContent(e.target.value)
                )}
            />
            <button type="submit">加入</button>
        </form>
    )

}
export default CreateForm