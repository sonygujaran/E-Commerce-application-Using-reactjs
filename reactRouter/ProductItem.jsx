import { useNavigate, useParams, Link } from "react-router-dom";
import Axios from 'axios';
import { useEffect, useState } from "react";



function ProductItem() {
    const { prodId } = useParams();
    const navigate = useNavigate();
    const [product, setproduct] = useState({})
    useEffect(() => {
        fetchData()

    }, [product])

    const url = `https://fakestoreapi.com/products/${prodId}`
    function fetchData() {

    }
    async function fetchData() {
        try {
            let prodInfo = await Axios.get(url)
            setproduct(prodInfo.data)
            console.log(prodInfo.data)







        } catch (err) {
            console.log(err)


        }

    }




    return (
        <>
            <div className="container-fluid     mt-4">
                <div className="row  ">
                    <div className="col-6 m-auto">

                    <div className='card  bg-secondary'>
                        <div className="card-body bg-warning   text-dark "  >
                            
                                
                                  
                                  <div className="mb-2 m-auto ">
                                      <img src={product.image} style={{
                                        height: "200px",
                                        width: "200px",
                                        marginTop: '25%',
                                    }} />
                                  </div>
                                    <h4><span >Cateory:</span> <span>{product.category}</span></h4>

                                   

                                    <h3>Title: {product.title}</h3>
                                    <h4>Price :${product.price}</h4>
                                    

                                    <p><b>Description:</b>{product.description} <br/></p>
                                   
                                
                            </div>
                            








                        </div>

                    </div>
                    </div>
                    </div>



                    <button className='btn btn-dark' onClick={() => navigate(-1)}>
                        Back
                    </button>
                </>
                );
}

                export default ProductItem;