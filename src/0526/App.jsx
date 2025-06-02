import "./App.css"
import Navbar from "./component/Navbar"
import Products from "./component/Products"
import Carts from "./component/Carts"

export default function App() {
    const cartReducer = useReducer(
        (state, action) => {
            const cartList = [...state.cartList];
            const index = cartList.findIndex((item) => {
                return item.id === action.payLoad.id;
            });
            switch (action.type) {
                case 'APP_TO_CART':
                    if (index === -1) {
                        cartList.push(action.payload);
                    } else if (cartList[index].quantitoy + action.payload.quantity > 10) {
                        alert("每個餐點最多只能點10份");
                        cartList[index].quantity = 10;
                    } else {
                        cartList[index].quantity += action.payload.quantity;
                    }
                    return {
                        ...state,
                        cartList,
                        total: calculateTotlePrice(cartList),
                    };
                case 'CHANGE_CART_QUANTITY':
                    cartList[index].quantity = action.payload.quantity;
                    return {
                        ...state,
                        cartList,
                        total: calculateTotlePrice(cartList),
                    };
                case 'REMOVE_CART_ITEM':
                    cartList.splice(index, 1);
                    return {
                        ...state,
                        cartList,
                        total: calculateTotlePrice(cartList),
                    };
                // case 'CHANGE_PRODUCT_QUANTITY':
                //     return {
                //         ...state,
                //         cartList,
                //     };
                default:
                    return state;
            }
        },
        {
            cartList: [],
        },
    );

    return (
        <>
            <CartContext.Provider value={cartReducer}>
                {/* 導覽列(navbar) */}
                <Navbar />
                <div className="container mt-4">
                    {/* 外層格線 */}
                    <div className="row">
                        {/* 產品列表區(左)(卡片元件) */}
                        <div className="col-md-7">
                            <Products />
                        </div>

                        {/* 購物清單區(右)(表格) */}
                        <div className="col-md-5">
                            <Carts />
                        </div>
                    </div>
                </div>
            </CartContext.Provider>
        </>
    );
}

export default App;
function calculateTotalPrice(cartList) {
    return cartList
        .map((item) => item.quantity * item.price)
        .reduce((a, b) => a + b, 0);
}