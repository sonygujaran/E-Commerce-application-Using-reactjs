import Product from "../pages/Products";
import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom'

function Home({items}) {



    return (
        <>

            <div className="mt-4 text-warning justify-content-center">
                <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa delectus molestiae ipsam, obcaecati eum rem vel aut perspiciatis similique amet et laboriosam. Nihil nisi possimus mollitia sunt similique cumque doloribus?.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis repellendus numquam nesciunt sunt alias natus optio at, soluta ad similique vitae voluptatibus tempore error est earum id eveniet fugit asperiores consequuntur ab repellat dolor? Ea facilis quia beatae in aliquam rerum, ducimus hic ipsum, sit eius harum quo alias.</p>
                <button className='btn btn-dark ms-2' ><NavLink to="/contact" className="text-light text-decoration-none me-3">
                    Contact Now
                </NavLink></button>
            </div>







        </>)
}
export default Home;