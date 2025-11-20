import linkedinLogo from "../assets/lindedin.png"
import githubLogo from "../assets/github-mark.png"
import instagramLogo from "../assets/instagram-mark.png"

export default function Footer() {
	return (
		<div className="footer-container">
			<a href="https://www.linkedin.com/in/jandortiz/" target="_blank"><img src={linkedinLogo} alt="Linkedin logo"></img></a>
			<a href="https://github.com/jandortiz" target="_blank"><img src={githubLogo} alt="GitHub logo"></img></a>
			<a href="https://www.instagram.com/jand_ortiz/" target="_blank"><img src={instagramLogo} alt="Instagram logo"></img></a>
		</div>
	)
}