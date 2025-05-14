import { useEffect } from 'react'
import $ from 'jquery'
import './App.css'

export default function App() {
    useEffect(() => {

        $(function () {
            // 變數宣告//

            // 取得所有按鈕(按鈕區)
            let setFilter = $('#filterBtn');
            // 取得按鈕中的超連結
            let filterBtn = setFilter.find('a');
            // ALL 按鈕
            let btnAll = $('.allitem');
            // 取得所有篩選列表中的元素
            let setList = $('#filterList');
            // 篩選列表中的li
            let filterList = setList.find('li');
            // 篩選列表的寬度
            let listWidth = filterList.outerWidth;


            // 按鈕被左鍵一下時
            // filterBtn.click改寫成下方
            filterBtn.on('click', function () {
                // 檢查是否被點選，不是才執行
                if (!($(this).hasClass('active'))) {
                    // 目前被點選的按鈕類別名稱儲存到filterClass
                    var filterClass = $(this).attr('class');

                    // 使用each()方法
                    filterList.each(function () {
                        // 檢查li中是否有被篩選到的類別
                        if ($(this).hasClass(filterClass)) {
                            // yes => 顯示
                            $(this).css(
                                { display: 'block' }).stop().animate({ width: listWidth }, 1500);
                            // find()方法中，使用全域選擇器 =>*，選取所有filterList所有元素
                            $(this).find('*').stop().animate({ opacity: '1' }, 1500);
                        } else {
                            // no => 隱藏
                            // 顯示動畫 (隱藏項目)
                            // $(this).find('*').stop().animate({ opacity: '0' }, 1000);
                            // $(this).stop().animate({ width: '0' }, 1000, function () {
                            $(this).css({ display: 'none' });

                            // 無動畫 (隱藏項目)                            
                            $(this).css({ display: 'none' });

                        }
                    });
                    // 清除所有按鈕上的acitive類別
                    filterBtn.removeClass('active');
                    // 目前備點選的按鈕加上active類別
                    $(this).addClass('active');
                }
            });

            // 全部顯示
            btnAll.on('click', function () {
                filterList.each(function () {
                    $(this).css({ display: 'block' }).stop().animate({ width: listWidth }, 1500);
                    $(this).find('*').stop().animate({ opacity: '1' }, 1500);
                    // $(this).find('*');
                });
            });

            // 重新載入時，讓ALL按鈕呈現被點選狀態
            btnAll.on('click', function () { });
        })

    }, [])

    return (
        <>
            <div id="wrapper">
                {/* 按鈕區 */}
                <div id="filterBtn">
                    <a href="javascript:;" className="allitem">ALL</a>
                    <a href="javascript:;" className="cats">CATS</a>
                    <a href="javascript:;" className="food">FOOD</a>
                    <a href="javascript:;" className="view">VIEW</a>
                </div>


                {/* 圖片區 */}
                <div id="filterList">
                    <ul>
                        <li className="food"><img src="./images/images/food4.jpg" alt="" /></li>
                        <li className="cats"><img src="./images/images/cats3.jpg" alt="" /></li>
                        <li className="food"><img src="./images/images/food3.jpg" alt="" /></li>
                        <li className="view"><img src="./images/images/view1.jpg" alt="" /></li>
                        <li className="view"><img src="./images/images/view2.jpg" alt="" /></li>
                        <li className="cats"><img src="./images/images/cats1.jpg" alt="" /></li>
                        <li className="food"><img src="./images/images/food2.jpg" alt="" /></li>
                        <li className="cats"><img src="./images/images/cats2.jpg" alt="" /></li>
                        <li className="cats"><img src="./images/images/cats6.jpg" alt="" /></li>
                        <li className="food"><img src="./images/images/food1.jpg" alt="" /></li>
                        <li className="view"><img src="./images/images/view3.jpg" alt="" /></li>
                        <li className="food"><img src="./images/images/food5.jpg" alt="" /></li>
                        <li className="cats"><img src="./images/images/cats4.jpg" alt="" /></li>
                        <li className="view"><img src="./images/images/view4.jpg" alt="" /></li>
                        <li className="cats"><img src="./images/images/cats5.jpg" alt="" /></li>


                    </ul>
                </div>
            </div>
        </>
    )
}