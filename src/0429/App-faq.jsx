// 摺疊QA=>Accordion
// npm install motion

const { BiQuestionMark } = require("react-icons/bi");
const { FaPlusCircle } = require("react-icons/fa");
const { FiMinusCircle } = require("react-icons/fi");

function App() {
    // FAQ的資料
    const question = [
        {
            id: 1,
            question: "題目1",
            ans: "答案1",
        },
        {
            id: 2,
            question: "題目2",
            ans: "答案2",
        },
        {
            id: 3,
            question: "題目3",
            ans: "答案3",
        },
    ];

    return (
        <>
            {/* 最外層 */}
            <div style={{
                maxWidth: "100vw",
                height: "100vh",
                backgroundColor: "#333",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

            }}>
                {/* Accordion折疊面板 */}
                <div style={{
                    width: "90%",
                    margin: "auto",
                    maxWidth: "1200px",
                    backgroundColor: "#aaa",
                    padding: "10px",
                    borderRadius: "5px",
                }}>
                    <h2 style={{
                        textAlign: "center",
                        marginBottom: "6px",
                    }}>FAQ標題</h2>
                    {
                        // 帶出陣列資料
                        question.map((q) => {
                            return (
                                <div key={q.id} style={{ marginBottom: "4px" }}>
                                    {/* QA按鈕 */}
                                    <button>
                                        {/* 題目 */}
                                        {q.question}
                                        {/*icon */}
                                        {activeQuestion === q.id ? <FiMinusCircle /> : <FaPlusCircle />}
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        </>
    )
}
export default App