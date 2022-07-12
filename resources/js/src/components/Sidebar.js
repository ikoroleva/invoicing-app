import home from "/images/home.svg";
import document from "/images/document.svg";
import people from '/images/people.svg';


const Sidebar = () => {

    return (
        <aside>
            <h2>
                logo
            </h2>

            <div className="navs">
                <img src={home} alt="home icon" />
                <img src={document} alt="document icon" />
                <img src={people} alt="users icon" />
            </div>


            <h3>
                user
            </h3>
        </aside>
    );
}

export default Sidebar;