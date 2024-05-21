import { Link } from "react-router-dom"

const Nav = (props) => (
    <nav className={props.horizontal ? 'horizontal-navbar' : null}>
        {props.title ? <h4>{props.title}</h4>: null}
        <menu role='menu'>
            <li role='menuitem'><Link to='/'>Home</Link></li>
            <li role='menuitem'><Link to='/about'>About</Link></li>
            <li role='menuitem'><Link to='/menu'>Menu</Link></li>
            <li role='menuitem'><Link to='/booking'>Reservations</Link></li>
            <li role='menuitem'><Link to='/order'>Order Online</Link></li>
            <li role='menuitem'><Link to='/login'>Login</Link></li>
        </menu>
    </nav>
)
export default Nav