import { useEffect } from 'react';
import $ from 'jquery';
import './App.css';
import { div } from 'motion/react-client';

export default function App() {

    useEffect(() => {
         // 移入 => mouseover()
        // 移出 => mouseout()
        // 移動 => mousemove()
        // X、Y座標 => pageX、pageY
        // 取得HTML內容 => html()
        // 淡入 => fadeIn()
        // 淡出 => fadeOut()
        // 速度 => 毫秒 => (slow, normal, fast)
        // 尋找指定的名稱 => has()
        // 新增html元素 => append()
        // 取得子元素 => children()

        // 當滑鼠碰到超連結時，檢查「has()」是否有ttpshow類別
        $('a:has(.ttpShow)').on('mouseover', function (e) {
            // 動態增加一個「append()」一個div區域在body標籤中
            // 取得超連接指定的子元素「children()」中的html內容「html()」
            $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>')
            $('#ttpPanel').css({
                top: (e.pageY + 10) + 'px',
                left: (e.pageX + 10) + 'px'
            }).fadeIn('100');
        })
            .on('mouseout', function () {
                $('#ttpPanel').fadeOut('100').remove();
            })
            .on('mousemove', function (e) {
                $('#ttpPanel').css({
                    top: (e.pageY + 10) + 'px',
                    left: (e.pageX + 10) + 'px'
                });
            })
    }, [])

    return (
        <div>
            <h2>ToolTip顯示說明</h2>
            <p>
                Lorem ipsum, dolor sit amet
                <a href='#'>
                    顯示文字
                    <span className='ttpShow'>consectetur內容說明...</span>
                </a>
            </p>
            amet consectetur adipisicing elit.
            <p>
                <a href='#'>
                    顯示圖片
                    <span className='ttpShow'>
                        <img src="./images/p2.jpg" alt="" style={{ width: '100px' }} />
                        <p>
                            Lorem ipsum dolor sit amet??????
                        </p>
                    </span>
                </a>
            </p>
        </div>
    )
}
