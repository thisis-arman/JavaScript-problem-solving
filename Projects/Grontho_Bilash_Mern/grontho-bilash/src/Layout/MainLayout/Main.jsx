import { Outlet } from "react-router-dom";
import Navbar from "../../Utils/Navbar";
// import Homepage from "../../Pages/HomePage/Homepage";


const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />

        </div>
    );
};

export default Main;