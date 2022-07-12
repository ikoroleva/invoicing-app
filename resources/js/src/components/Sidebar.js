import home from "/images/home.svg";

const Sidebar = () => {

    return (
        <aside>
            <h2>
                logo
            </h2>

            <div className="navs">
                <img src={home} alt="home icon" />
                <span>imgIcon</span>
                <span>imgIcon</span>
            </div>


            <h3>
                user
            </h3>
        </aside>
    );
}

export default Sidebar;