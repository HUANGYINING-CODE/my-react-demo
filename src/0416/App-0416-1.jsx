
function App() {

    (async () => {
        // 取得遠端資料
        const data = await axios.get('https://coffeeteacher.github.io/weather/F-C0032-001.json'); ``
        // 查看是否連上json
        // console.log(data);

        // 解構各縣市的氣象資料
        const { location } = data.data.cwaopendata.dataset;
        console.log(location)
    })();


    return (
        <>
            <h2>36小時天氣預報</h2>
            {/* 一列二欄 */}
            <div className="row row-color-2 g-4">
                {/* 第一欄 */}
                <div className="col">
                    {/* 卡片樣式 */}
                    <div className="card text-center">
                        {/* 頭:卡片標題 */}
                        <div className="card-header">
                            <div className="h4 my-0">
                                台北市
                            </div>
                        </div>
                        {/* 身:卡片內容 */}
                        <div className="row row-cols-3">
                            {/* 第一欄 */}
                            <div className="col">
                                {/* 日期 */}
                                <div className="h4 my-0">
                                    16日
                                </div>
                                {/* 時間 */}
                                上午6:00 <br />
                                ~<br />
                                下午6:00 <br />
                                {/* 天氣圖:使用執行路徑，所以要放在public資料夾中，才讀得到 */}
                                <img src="/weatherIcon/晴時多雲.svg" alt="" />
                                {/* 天氣名稱 */}
                                <div className="mt-2">晴時多雲</div>
                                {/* 降雨率 */}
                                <div className="mt-2">
                                    {/* icon */}
                                    <i class="bi bi-umbrella">10%</i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default App





