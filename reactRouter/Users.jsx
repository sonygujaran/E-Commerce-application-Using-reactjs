import { useState, useEffect } from 'react';
import Axios from 'axios';
import useFetch from './useFetch';
function Users() {
    const [user,isLoading,isError]=useFetch('https://fakestoreapi.com/users')
   
   

    return (<>

        {isLoading && <h1>Loading....</h1>}
        {isError && <h1>{isError}</h1>}
        {!isLoading && !isError &&
        <div className="container-fluid  mt-4">
            <div className="row ">
                                {user.map((ele, ind) => (
                                     <div key={ind} className='col-4 mt-2 '>
                    <div  className='card '>
                        <div className="card-body bg-success text-white "  >
                           




                                <h4><span >Name:</span> <span>{ele.name.firstname} {ele.name.lastname}</span></h4>
                                <h3>Mobile No: {ele.phone}</h3>
                                <h4>Email :{ele.email}</h4>

                                <h6>Location: {ele.address.city}</h6>



                            </div>
                            
                        </div>
                    </div>


                ))
                }

            </div>
        </div>

            // <div className='row justify-content-center  '>

                // {user.map((ele, ind) => (
                //     <div key={ind} className='card flex-d'>
                //         <div className="card-body bg-secondary "  >
                //             <div className='col-4'>




                //                 <h4><span >Name:</span> <span>{ele.name.firstname} {ele.name.lastname}</span></h4>
                //                 <h3>Mobile No: {ele.phone}</h3>
                //                 <h4>Email :{ele.email}</h4>

                //                 <h6>Location: {ele.address.city}</h6>



                //             </div>
                            
                //         </div>
                //     </div>


                // ))
                // }







          

        }
    </>)
}
export default Users;