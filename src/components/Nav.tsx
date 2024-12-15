import logo from '../images/RedditLogo.png';
import profilePicture from '../images/RedditProfile.png';

function Nav() {
    return (
        <nav className="Nav">
            <div className="Nav--Logo">
                <a href="#">Reddit
                    <img src={logo}/>
                </a>
            </div>
            <div className="Nav--SearchBar">
                <form className="searchForm">
                    <label className="hidden" htmlFor="search">Search Reddit</label>      
                    <input type="text" id="search" name="search" placeholder="Search Reddit"></input>
                </form>
            </div>
            <div className="Nav--Account">
                <div className="Notifications">
                </div>
                <div className="Account">
                    <img src={profilePicture}/>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
