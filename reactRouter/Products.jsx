import { useState, useEffect } from 'react';
import Axios from 'axios';
import useFetch from './useFetch';
import { Link, Outlet } from 'react-router-dom';
function Products({ cartItem }) {
    const [product, isLoading, isError] = useFetch('https://fakestoreapi.com/products')

    function handleClick(product) {
        cartItem(product);
    }






    return (<>

        {isLoading && <h1>Loading....</h1>}
        {isError && <h1>{isError}</h1>}
        {!isLoading && !isError &&
            <div className='row justify-content-center  '>
                <div className='card '>
                    {product.map((ele, ind) => (
                        <div key={ind} className="card-body bg-secondary p-2 "  >
                            <div className="row ">
                                <div className="col-3 bg-dark ms-4" style={{
                                    height: "300px",
                                    width: "250px",
                                    borderRadius: '30px'
                                }}>
                                    <img src={ele.image} style={{
                                        height: "200px",
                                        width: "200px",
                                        marginTop: '25%',
                                    }} />
                                </div>
                                <div className="col-8 text-dark bg-warning ms-2 p-2 " style={{

                                    borderRadius: '30px'
                                }}> <h4><span >Cateory:</span> <span>{ele.category}</span></h4>

                                   

                                    <h3>Title: {ele.title}</h3>
                                    <h4>Price :${ele.price}</h4>
                                    <h5>Rating: ⭐{ele.rating.rate}</h5>
                                    {/* <h6>Quantity: {ele.rating.count}</h6> */}

                                    <p><b>Description:</b>{ele.description} <Link to={`/products/${ele.id}`}>read more</Link><br/></p>
                                   
                                    <button className='btn btn-dark text-warning ms-4 ' onClick={() => handleClick(ele)}>Add To Cart</button>

                                
                               
                                </div>
                            </div>
                        </div>






                    ))
                    }
                </div>
            </div >
        }
    </>)
}
export default Products;