import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const Layout = () => {


    return (
        <div className="layout">

            <Header />
            <div className="main-container">
                <Sidebar />
                <MainContent />
            </div>
            <Footer />

        </div>
    );
}

export default Layout;