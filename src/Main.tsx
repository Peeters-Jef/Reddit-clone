import Feed from "./components/Feed"
import Sidebar from "./components/Sidebar"

const Main = () => {
    return (
        <div className="flex">
            <Sidebar />
            <Feed />
        </div>
    )
};

export default Main;
