import logo from '../images/RedditLogo.png';

function Logo() {
    return (
        <div className="logo">
            <a href="#">Reddit
                <img src={logo} alt="Reddit Logo"/>
            </a>
        </div>
        )
}

export default Logo
