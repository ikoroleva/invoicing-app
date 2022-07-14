import home from "/images/home.svg";
import document from "/images/document.svg";
import people from "/images/people.svg";
import ClientList from "./ClientList";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Fragment, useContext, useState, useEffect } from "react";
import BoxItem from './BoxItem';




const Sidebar = () => {
    const { user } = useContext(UserContext);

    let menuItems = [
        {
            name: "Eduhance",
            iconName: "menu",
            url: "/home",
        },
        {
            name: "Home",
            iconName: "home",
            url: "/dashboard",
            type: "solid"
        },
        {
            name: "Invoice",
            iconName: "document",
            url: "/create-invoice",
            type: "solid"
        },
        {
            name: "Clients",
            iconName: "people",
            url: "/home",
            type: "solid"
        }

    ];

    const [hovered, setHovered] = useState(null);
    const [active, setActive] = useState(1);
    const [animate, setAnimate] = useState(false);
    const [expanded, setExpanded] = useState(false);

    let delay = 1;
    useEffect(() => {
        setAnimate(true);
        let timer = setTimeout(() => setAnimate(false), delay * 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [active, delay]);

    return (
        <aside>
            {user && (
                <div className={`sidebar ${expanded && "expanded"}`}>

                    {menuItems.map((item, index) => {

                        let middle = false;
                        if (!(index === 0)) {
                            middle = true;
                        }

                        return (
                            <div
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
                                    }
                                    if (index === 0) {
                                        setExpanded(!expanded);
                                    }
                                }}
                                key={index}
                            >
                                <BoxItem
                                    className={`${middle && "boxicon"} 
                                    ${!middle && "first-and-last-trash-fix"}
                                    ${active === index && "active"}
                                    `}
                                    // size={changeSmall ? "sm" : "md"}
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
                                </p></div>
                        );

                    })}

                    {/* <div className="boxicon-container">
                        <Link to="/dashboard">
                            <img src={home} alt="home icon" />
                        </Link>
                    </div>
                    <box-icon size="md" name="alt" type="solid" color="red" />
                    <div className="boxicon-container">
                        <Link to="/create-invoice">
                            <img src={document} alt="document icon" />
                        </Link>
                    </div>
                    <div className="boxicon-container">
                        <img src={people} alt="users icon" />
                    </div>
                    <ClientList /> */}
                </div>
            )
            }
        </aside>
    );
};

export default Sidebar;


{/* <div className={`sidebar ${expanded && "expanded"}`}>
      {menuItems.map((item, index) => {
        let middle = false;
        if (!(index === 0 || index === menuItems.length - 1)) {
          middle = true;
        }
        return (
          <div
            className={`boxicon-container ${
              expanded && "expanded-boxicon-container"
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
              }
              if (index === 0) {
                setExpanded(!expanded);
              }
            }}
            key={index}
          >
            <box-icon
              class={`${middle && "boxicon"} 
                      ${!middle && "first-and-last-trash-fix"}
                      ${active === index && "active"}
                      `}
              size={changeSmall ? "sm" : "md"}
              name={item.iconName}
              type={item.type}
              color={
                hovered === index || active === index ? "white" : item.color
              }
              animation={active === index && animate ? "tada" : ""}
              rotate={item.rotate}
            ></box-icon>
            <p
              className={`description 
            ${expanded && "show-description"}
            ${active === index && "active-description"}`}
            >
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}; */}

