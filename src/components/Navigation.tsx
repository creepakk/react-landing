import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Navigation() {
    const [isOpened, setIsOpened] = useState(false)
    const navigate = useNavigate()

    const changeHandler = () => setIsOpened(!isOpened)

    useEffect(() => {
        setIsOpened(false)
    }, [navigate])

    return (
        <header>
            <div className="burger_button">
                <input type="checkbox"
                    id="check-menu"
                    onChange={changeHandler}
                    checked={isOpened} />
                <label htmlFor="check-menu" className={isOpened ? 'opened' : ''}>
                    <span className="burger_line first"></span>
                    <span className="burger_line second"></span>
                    <span className="burger_line third"></span>
                    {/* <span className="burger_line fourth"></span> */}
                </label>
                <ul className="menu_mobile">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/guides'}>Guides</Link></li>
                    <li><Link to={'/flights'}>Flights</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact_us'}>Contact Us</Link></li>
                </ul>
            </div>
            <nav className="menu_pc">
                <Link to={'/'} className="button_home">Home</Link>
                <Link to={'/guides'}>Guides</Link>
                <Link to={'/flights'}>Flights</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact_us'} className="button_contact">Contact Us</Link>
            </nav>
        </header>
    )
}