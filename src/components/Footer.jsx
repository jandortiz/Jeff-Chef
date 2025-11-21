import linkedinLogo from "../assets/linkedin.svg"
import githubLogo from "../assets/github-mark.png"
import websiteIcon from "../assets/website-icon.svg"

export default function Footer() {
	return (
		<div className="footer-container">
			<a href="https://www.linkedin.com/in/jandortiz/" target="_blank"><img src={linkedinLogo} alt="Linkedin logo"></img></a>
			<a href="https://github.com/jandortiz" target="_blank"><img src={githubLogo} alt="GitHub logo"></img></a>
			<a href="http://jandortiz.com" target="_blank"><img src={websiteIcon} alt="Website logo"></img></a>
		</div>
	)
}