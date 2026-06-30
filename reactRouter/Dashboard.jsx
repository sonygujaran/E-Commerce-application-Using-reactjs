import {BrowserRouter,Routes,Route,NavLink,Outlet} from 'react-router-dom'
function Dashboard(){
    return(<>
    <button className="btn btn-dark text-white mt-4 ms-4"><NavLink to="profile" className="text-light text-decoration-none me-3">
                    profile
                </NavLink></button>
    <button className="btn btn-dark text-white  mt-4 ms-4"><NavLink to="setting" className="text-light text-decoration-none me-3">
                    setting
                </NavLink></button>
                <Outlet/>
               
               

    </>)
}
export default Dashboard;