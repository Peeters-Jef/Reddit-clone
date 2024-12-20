function Sidebar() {
    return (
        <div className="container left-sidebar sticky">
            <nav className="flex left-sidebar--nav">
                <ul className="left-sidebar--heading flex">
                    <ul className="left-sidebar--subitems" id="nav--sub-ul">
                        <li className="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Popular</a>
                        </li>
                        <li>
                            <a href="#">Explore</a>
                        </li>
                        <li>
                            <a href="#">All</a>
                        </li>
                    </ul>
                    <li className="left-sidebar--heading-item">
                        <a href="#">communities</a>
                    </li>
                    <ul className="left-sidebar--subitems" id="communities--sub-ul">
                        <li>
                            <a href="#">r/Anki</a>
                        </li>
                        <li>
                            <a href="#">r/linux</a>
                        </li>
                        <li>
                            <a href="#">r/Piracy</a>
                        </li>
                    </ul>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;
