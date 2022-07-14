import ClientList from "./ClientList";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Fragment, useContext, useState, useEffect } from "react";
import BoxItem from './BoxItem';




const Sidebar = () => {
    const { user } = useContext(UserContext);

    let menuItems = [
        {
            name: "",
            iconName: "menu",
            url: "/home",
        },
        {
            name: "Home",
            iconName: "mdiHome",
            url: "/dashboard"
        },
        {
            name: "New invoice",
            iconName: "mdiFileDocument",
            url: "/create-invoice"
        },
        {
            name: "Clients",
            iconName: "mdiAccountMultiple",
            url: "/home"
        }

    ];

    const [hovered, setHovered] = useState(null);
    const [active, setActive] = useState(1);
    const [expanded, setExpanded] = useState(false);
    const [showClients, setShowClients] = useState(false);


    return (
        <>
            {user && (
                <div className={`sidebar ${expanded && "expanded"}`}>

                    {menuItems.map((item, index) => {

                        let middle = false;
                        if (!(index === 0)) {
                            middle = true;
                        }

                        let last = false;
                        if (index === menuItems.length - 1) {
                            last = true;
                        }

                        return (

                            <Link to={item.url}
                                className={`boxicon-container ${expanded && "expanded-boxicon-container"
                                    }`}
                                onMouseEnter={() => {
                                    if (middle) {
                                        setHovered(index);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (middle) {
                                        setHovered(null);
                                    }
                                }}
                                onClick={() => {
                                    if (middle) {
                                        setActive(index);
                                        setShowClients(false);
                                    }
                                    if (index === 0) {
                                        setExpanded(!expanded);
                                        setShowClients(!expanded && active == menuItems.length - 1);
                                    }
                                    if (last) {
                                        setShowClients(expanded);
                                    }
                                }}
                                key={index}
                            >
                                {/* <Link to={item.url}> */}
                                <BoxItem
                                    className={`${middle && "boxicon"} 
                                    ${!middle && "first-and-last-trash-fix"}
                                    ${active === index && "active"}
                                    `}
                                    name={item.iconName}
                                    // type={item.type}
                                    color={
                                        hovered === index || active === index ? "white" : item.color
                                    }
                                // animation={active === index && animate ? "tada" : ""}
                                // rotate={item.rotate}
                                ></BoxItem>

                                <p
                                    className={`description 
                                        ${expanded && "show-description"}
                                        ${active === index && "active-description"}`}
                                >   {item.name}
                                </p>
                            </Link>
                            // </div>
                        );


                    })}
                    <ClientList showClients={showClients} />
                </div>
            )
            }

        </>
    );
};

export default Sidebar;


