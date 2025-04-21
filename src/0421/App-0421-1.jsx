import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import News from "./News"


function App() {
    return (
        <div className="wrap">
            {/* 載入導覽列 */}
            <Navbar />
            <hr />

            <Routes>
                {/* 呼叫首頁 */}
                <Route path="/" element={<Home/>}></Route>
                {/* 呼叫關於我 */}
                <Route path="/about" element={<About/>}></Route>
                {/* 呼叫最新消息 */}
                <Route path="/news" element={<News/>}></Route>
            </Routes>
            
        </div>
    )
}
export default App