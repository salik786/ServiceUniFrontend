

import { Link, useLocation } from "react-router-dom"
import "./style.css"
function Breadcrumbs({ links }) {
    const location = useLocation();
    console.log(links)
    return (

        <nav className="m-4">
            {links.length > 0 ? links.map((item, index) => {
                return (<>
                    <Link to={item.path}
                        className={location.pathname === item.path ? "breadcrumb-active" : "breadcrumb-not-active"}
                    >
                        {item.name}
                    </Link>
                    {links.length - 1 == index ? <></> : <span className="breadcrumb-arrow">&gt;</span>}
                </>)
            }) : <></>
            }

        </nav>
    );
}

export default Breadcrumbs;