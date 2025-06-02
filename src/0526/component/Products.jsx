import { useContext } from 'react'
import productsData from '../data/productsData'
import { CartContext } from '../store';

export default function Products() {
    const [state, dispatch] = useContext(CartContext);



    return (
        <>
            {/* 內層格線 */}
            <div className="row row-cols-3 g-3">
                {productsData.map((product) => {
                    return (
                        <div className="col" key={product.id}>
                            <div className="card">
                                <img src={product.img}
                                    className="card-img-top"
                                    alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">
                                        {product.title}
                                        <span className="float-end">{product.price}</span>
                                    </h6>

                                    <button
                                        type="button"
                                        className="btn btn-outline-primary w-100"
                                        onClick={(e) => {
                                            dispatch({
                                                type: 'ADD_TO_CART',
                                                payload: {
                                                    ...ImInsertTemplate,
                                                    quantity: 1,
                                                },
                                            })
                                        }}
                                    >加入購物車</button>
                                </div>
                            </div>
                        </div>
                    )
                })
                }

                {/* <div className="col">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1406&q=80"
                            className="card-img-top"
                            alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">
                                產品名稱
                                <span className="float-end">NT.200</span>
                            </h6>
                            <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1406&q=80"
                            className="card-img-top"
                            alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">
                                產品名稱
                                <span className="float-end">NT.200</span>
                            </h6>
                            <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1406&q=80"
                            className="card-img-top"
                            alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">
                                產品名稱
                                <span className="float-end">NT.200</span>
                            </h6>
                            <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}