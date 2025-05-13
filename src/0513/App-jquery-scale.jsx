import { useEffect } from 'react';
import $ from 'jquery';
import './App.css';


export default function App() {

    useEffect(() => {
        // 當滑鼠碰到圖片區域時，放大圖片
        $('.cssAnim1').on('mouseover', function () {
            $(this).addClass('imgScale');
        })

        // 當滑鼠離開圖片區域時，還原圖片
        $('.cssAnim1').on('mouseout', function () {
            $(this).removeClass('imgScale');
        })
    }, [])

    return (
        <div>
            <a href="#" className="cssAnim1">
                <img src="./images/p1.jpg" alt="" />
            </a>
        </div>
    )

}
