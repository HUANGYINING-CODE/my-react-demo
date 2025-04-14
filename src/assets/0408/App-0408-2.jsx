import img0408a from './assets/img0408/w1200.jfif'
import img0408b from './assets/img0408/w1200-2.jfif'

function App() {
    return (
        <>
            <div id="container">
                <h1>高雄親子景點再＋1！「臺鐵機廠」變身全台最大室內遊樂園，30項免費遊樂設施免費玩，2025年底開放！</h1>
                <img className='img1' src={img0408a} alt="" />
                <p>臺鐵「高雄機廠」經過近十年的討論後，終於在今年 2 月審議通過，這個近 32 公頃的工業區即將在今年底迎來大變身，未來將變更為結合特文區、公園與社會福利用地，並且將打造全台最大室內全齡夢幻遊樂園，不但有將近 30 項遊樂設施，且全區都不需要付費，勢必能成為高雄親子假日放鬆放風新去處。</p>
                <p>延伸閱讀：高雄全新「五大地標」搶先看！小港國際機場新航廈、鳳山空中鳳城、高雄新車站⋯即將亮相</p>
                <h2>臺鐵高雄機廠大變身</h2>
                <img className='img2' src={img0408b} alt="" />
            </div>
        </>
    )
}
export default App