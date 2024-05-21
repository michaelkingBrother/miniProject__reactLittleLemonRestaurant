import footerLogo from '../assets/img/logo-footer.png';
import Logo from './Logo';
import Nav from './Nav';

const Footer = () => (
    <footer>
        <Logo img={footerLogo} alt={'footer logo'} width={162} height={279}/>
        <Nav horizontal={true} title='Doormat Navigation'/>
        <nav>
          <h4>Contact</h4>
          <ul>
            <li><a>address</a></li>
            <li><a>phone number</a></li>
            <li><a>email</a></li>
          </ul>
        </nav>
        <nav>
          <h4>Social Medial</h4>
          <ul>
            <li><a>address</a></li>
            <li><a>phone number</a></li>
            <li><a>email</a></li>
          </ul>
        </nav>
    </footer>
)
export default Footer