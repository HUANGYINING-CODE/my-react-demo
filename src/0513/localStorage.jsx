export default function App() {
    // 寫入資料
    // window.localStorage.setItem('book1', 'html');
 
    return (
        <>
            <h1>本地端</h1>
            <button onClick={() => {
                window.localStorage.setItem('book1', 'html');
                window.localStorage.setItem('book2', 'css');
                window.localStorage.setItem('book3', 'js');
            }}>寫入(新增)資料</button>

            <button onClick={() => {
                // 已知key的寫法
                // console.log(window.localStorage.getItem("book2"))

                // 未知key的寫法，
                for (var i = 0; i < window.localStorage.length; i++) {
                   var key = window.localStorage.key(i);
                    console.log(window.localStorage.getItem(key));
                }
            }}>讀取資料</button>

            <button onClick={() => {
                window.localStorage.removeItem('book2');
            }}>刪除指定資料</button>

            <button onClick={() => {
                window.localStorage.clear();
            }}>全部刪除資料</button>


        </>
    )
}