import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/contextprovider";

export default function DefaultLayout(){
    const {user, token} = useStateContext();
    if(!token){
        return <Navigate to='/login'/>
    }

    const onLogout = (ev) =>{
        ev.preventDefault();
    }

    return(
        <div id="defaultLayout">
            <div className="content">
                <header>
                    <div>
                        Header
                    </div>
                    <div>
                        {user.name}
                        <a hre="#" onClick={onLogout} className="btn-logout">Logout</a>
                    </div>
                </header>
            </div>
            <main>
            <Outlet />
            </main>
        </div>
    )
}