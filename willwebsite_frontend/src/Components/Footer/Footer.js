import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className='col'>
                <h3> Career </h3>
                    <li>
                        <a>
                            Download My CV
                        </a>
                    </li>

            </div>
            <div className='col'>
                <h3> Project Links </h3>
                    <li>
                        <a href='https://willmccudden.atlassian.net/jira/software/projects/WW/boards/2?atlOrigin=eyJpIjoiYzhhZWZmOTExZWY5NGZiMWExZmM0ZjlmNjg4YmMwZTgiLCJwIjoiaiJ9' target='_blank'>
                            Jira
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/willmccudden/willwebsite' target='_blank'>
                            Github
                        </a>
                    </li>
            </div>
            <div className='col'>
                <h3> Contact </h3>
                    <li>
                        <div>0424528691</div>
                    </li>
                    <li>
                        <div>willmccudden@gmail.com</div>
                    </li>
            </div>
        </div>
    )
}

export default Footer;