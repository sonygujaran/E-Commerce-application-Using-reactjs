function Cart({ cartData, setCartData }) {

    function increaseQty(id) {
        setCartData(
            cartData.map((item) => item.id === id?{ ...item, qty: item.qty + 1 }:item));
    }

    function decreaseQty(id) {
        const cart = cartData.map((item) =>item.id === id?{ ...item, qty: item.qty - 1 }:item)
        const updatedCart=cart.filter((item) => item.qty > 0);

        setCartData(updatedCart);
    }

    return (
        <div className="container mt-4 ">

            

            {cartData.length === 0 ? (
                <h3 className="text-center"> Cart is Empty!!!!!</h3>
            ) : (
                cartData.map((item) => (
                    <div className="card mb-3" key={item.id}  >
                        <div className="card-body  bg-warning " >
                            <div className="row align-items-center">

                                <div className="col-4 text-center bg-dark" style={{borderRadius: '30px' }}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        width="120"
                                        height="150"


                                    />
                                </div>

                                <div className="col-5 ">
                                    <h5>{item.title}</h5>
                                    <h6>Category: {item.category}</h6>
                                    <h5>Price: ${item.price}</h5>
                                </div>

                                <div className="col-3 text-center ">

                                    <button className="btn btn-dark" onClick={() => decreaseQty(item.id)}>-</button>

                                    <span className="mx-3 fs-4">{item.qty}</span>

                                    <button className="btn btn-dark" onClick={() => increaseQty(item.id)}>+</button>

                                    <h5 className="mt-3">
                                        Total: ${(item.price * item.qty).toFixed(2)}
                                    </h5>

                                </div>

                            </div>
                        </div>
                    </div>
                ))
            )}

        </div>
    );
}

export default Cart;