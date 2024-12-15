import profilePicture from '../images/RedditProfile.png';
import Logo from './Logo';

function Nav() {
    return (
        <nav className="nav flex flex-jc-sb">
            <Logo />
            <div className="nav--searchBar flex flex-ai-c">
                <svg className='nav--searchBar--search' aria-hidden="true" fill="currentColor" icon-name="search-outline" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5 18.616 14.985 14.1a8.528 8.528 0 1 0-.884.884l4.515 4.515.884-.884ZM1.301 8.553a7.253 7.253 0 1 1 7.252 7.253 7.261 7.261 0 0 1-7.252-7.253Z"></path>
                </svg>
                <form>
                    <label className="hidden" htmlFor="search">Search Reddit</label>      
                    <input type="text" id="search" name="search" placeholder="Search Reddit"></input>
                </form>
            </div>
            <div className="nav--account">
                <div className="notifications">
                </div>
                <div className="account">
                    <img src={profilePicture} alt="User profile picture"/>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
