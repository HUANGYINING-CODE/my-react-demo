function MyComponent(){
    return(
        <div id="page1">我是page1</div>
        <div id="page2" style="display: none;">我是page2</div>
        <div id="page3" style={{display:'none'}}>我是page3</div>
    
        <button id="btn1" onclick="changeToPage(2);">第二步</button>
        <button id="btn2" onclick="changeToPage(1);" style="display: none;">第一步</button>
        <button id="btn3" onclick="changeToPage(3);" style="display: none;">第三步</button>
    
        <script>
            function changeToPage(num){
                // 預設全部為隱藏
                document.querySelector("#page1").style.display = "none";
                document.querySelector("#page2").style.display = "none";
                document.querySelector("#page3").style.display = "none";
    
                document.querySelector("#btn1").style.display = "none";
                document.querySelector("#btn2").style.display = "none";
                document.querySelector("#btn3").style.display = "none";
    
                // 再依參數個別打開
                if (num === 2) {
                    // 表示再第二頁，顯示第一步與第三步
                    document.querySelector("#page1").style.display = "block";
                    document.querySelector("#btn2").style.display = "block";
                    document.querySelector("#btn3").style.display = "block";
                }
    
                if (num === 1) {
                    // 表示在第一頁，顯示第二步
                    document.querySelector("#page1").style.display = "block";
                    document.querySelector("#btn1").style.display = "block";
                }
    
                if (num === 3) {
                    // 表示在第三頁，顯示第二步
                    document.querySelector("#page3").style.display = "block";
                    document.querySelector("#btn1").style.display = "block";
                }
            }
        )