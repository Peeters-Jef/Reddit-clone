function Sidebar() {
    return (
        <div className="left-sidebar sticky">
            <nav className="left-sidebar--nav">
                <ul className="left-sidebar--heading">
                    <li>
                        <a href="#">topics</a>
                    </li>
                    <ul className="left-sidebar--subitems" id="topics--sub-ul">
                        <li>
                            <a href="#">Internet Culture (Viral)</a>
                        </li>
                        <li>
                            <a href="#">Games</a>
                        </li>
                        <li>
                            <a href="#">Q&as</a>
                        </li>
                        <li>
                            <a href="#">technology</a>
                        </li>
                    </ul>
                    <li>
                        <a href="#">resources</a>
                    </li>
                    <ul className="left-sidebar--subitems" id="resources--sub-ul">
                        <li>
                            <a href="#">About Reddit</a>
                        </li>
                        <li>
                            <a href="#">Advertise</a>
                        </li>
                        <li>
                            <a href="#">Help</a>
                        </li>
                    </ul>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;
