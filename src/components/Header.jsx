import chefIcon from '../assets/chef-icon.png'


export default function Header() {
	return (
		<header className="header-container">
			<nav className="header-nav">
				<img className='header-img' src={chefIcon} alt='Chef icon'></img>
				<h1 className='header-title'>Jeff-Chef</h1>
			</nav>
		</header>
	)
}