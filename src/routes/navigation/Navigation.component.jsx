import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss'
import { default as CrownLogo } from '../../assets/crown.svg';

const Navigation = () => {
        return (
        <Fragment>
            <div className='navigation'>
                <Link to='/' className='logo_container'>
                    <img src={CrownLogo} className='logo' />
                </Link>
                <div className='nav_links_container'>
                    <Link to='/shop' className='nav_link'>
                        SHOP
                    </Link>
                    <Link to='/sign-in' className='nav_link'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
        )
}
export default Navigation;