import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="">
            <Link className="btn btn-warning" to='/addCoffee'>add coffee</Link>
            <Link className="btn btn-warning" to='/updateCoffee'>update coffee</Link>
        </div>
    );
};

export default Navbar;