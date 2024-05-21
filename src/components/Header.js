import logo from '../assets/img/logo.svg';
import Nav from './Nav';
import Logo from './Logo';

const Header = () => (
    <header>
        <Logo img={logo} alt={'logo'} width={202} height={76}/>
        <Nav/>
    </header>
)
export default Header