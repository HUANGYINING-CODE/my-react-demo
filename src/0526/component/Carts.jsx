import { useContext } from "react";
import { CartContext } from "../store";

export default function Carts() {
    const [state, dispatch] = useContext(CartContext);
    return (
        <>
            {/* 灰底色 */}
            <div className="bg-light p-3">
                <table className="table align-middle">
                    <tbody>
                        {/* 一列5欄 */}
                        {state.cartList.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-sm"
                                            onClick={(e) => {
                                                dispatch({
                                                    type: "REMOVE_CART_ITEM",
                                                    payload: {
                                                        ...item,
                                                    },
                                                });
                                            }}
                                        >
                                            x
                                        </button>
                                    </td>
                                    <td>
                                        <img
                                            src={item.img}
                                            className="table-img"
                                            alt={item.title}
                                        />
                                    </td>
                                    <td>
                                        {item.title}
                                        <br />
                                        <small className="text-muted">NT$ {item.price}</small>
                                    </td>
                                    <td>
                                        <select
                                            name=""
                                            id=""
                                            className="form-select"
                                            value={item.quantity}
                                            onChange={(e) => {
                                                e.preventDefault();
                                                dispatch({
                                                    type: 'CHANGE_CART_QUANTITY',
                                                    payload: {
                                                        ...item,
                                                        quantity: parseInt(e.target.value),
                                                    },
                                                });
                                            }}
                                        >
                                            {[Array(20)].map((_, i) => {
                                                return (
                                                    <option value={i + 1} key={i}>
                                                        {i + 1}
                                                    </option>
                                                );
                                            })}
                                        </select>

                                    </td>
                                    <td className="text-end">NT$ {item.quantity * item.price}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="text-end" colSpan={5}>
                                總金額 NT$ {state.totle || 0}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div >
        </>
    )

}