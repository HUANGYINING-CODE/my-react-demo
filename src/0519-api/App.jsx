import axios from "axios"
import { useEffect, useState, useRef } from "react";


export default function App() {


    // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
    const api = "https://api.unsplash.com/search/photos";
    const accessKey = "自己的accessKey";
    const [filterString, setFilterString] = useState('dog');


    // 存放篩選後的資料
    const [jsonData, setJsonData] = useState([]);

    //目前頁數
    const currentPage = useRef(1);
    //讀取變數
    const isLoading = useRef(false);

    //建立非同步方法，取得遠端資料
    const getPhotos = async (page = 1, isNew = true) => {
        try {
            // 取得圖片前先寫入
            isLoading.current = true;
            // 發出請求給遠端api，包含頁數，傳回結果
            const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`);
            // console.log(result);

            //由於加上頁數，不斷覆蓋，所以要保留之前的結果
            //將資料寫入陣列jsonData
            setJsonData((preData) => {
                //假如是新的關鍵字，則回傳新的關鍵字結果
                if (isNew) {
                    return [...result.data.results];
                } else
                    // 先前的資料+當前的資料
                    return [...preData, ...result.data.results];
            });

            //更新頁數
            currentPage.current = page;
            //1秒鐘後取消寫入
            setTimeout(() => {
                isLoading.current = false;
            }, 1000);

        } catch (error) {
            //錯誤發生時，顯示訊息
            console.log(error)
        }
    }

    //顯示陣列資料元件
    const ShowPhoto = () => {
        // console.log(jsonData)
        return (
            jsonData.map((item, index) => {
                return (
                    <div key={index} style={{ margin: "5px" }}>
                        <img src={item.urls.regular} alt="" width="400" height="320" style={{ objectFit: "cover" }} />
                    </div>
                )
            })
        )
    }

    //建立搜尋列元件
    const SearchBox = ({ onSearchHandler, filterString }) => {
        return (
            <div style={{ textAlign: "center" , margin: "50px 0"}}>
                <label htmlFor="filter">Search</label>
                <input type="text" id="filter" defaulterValue={filterString} onKeyDown={onSearchHandler} />
            </div>

        )
    }

    // 按下Enter鍵更改資料
    const onSearchHandler = (e) => {
        if (e.key === 'Enter') {
            setFilterString(e.target.value);
        }
    }

    //列表高度
    const listRef = useRef(null)
    //避免重新渲染，所有寫在useEffect中
    useEffect(() => {
        getPhotos(1, true);

        //滾動監聽函式
        const scrollEvent = () => {
            // 查看listRef的成員
            // console.dir(listRef.current);
            // 目前圖片列高
            const height = (listRef.current.offsetHeight + listRef.current.offsetTop) - window.innerHeight;
            // 假如(沒有載入圖片)且(垂直捲軸位置>=目前圖片列表高度)，則顯示下一頁內容
            if (!isLoading.current && window.scrollY >= height) {
                //頁數+1
                currentPage.current++;
                //同一個關鍵字的資料不用覆蓋，所以補上false
                getPhotos(currentPage.current, false);
            }
        }

        //滾動監聽
        window.addEventListener('scroll', scrollEvent);
        //移除監聽(為了確保每次捲動時，正確的位置與資料)
        return () => window.removeEventListener('scroll', scrollEvent);
    }, [filterString])

    // 渲染時使用JSX語法，若要使用JS語法，前後加{}
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>取得遠端資料</h1><hr />
                <SearchBox onSearchHandler={onSearchHandler} filterString={filterString} style={{ margin }} />
                <div style={{ display: "flex", flexwrap: "wrap", jusityContent: "center" }} ref={listRef}>
                    <ShowPhoto />
                </div>
            </div>

        </>
    )
}

