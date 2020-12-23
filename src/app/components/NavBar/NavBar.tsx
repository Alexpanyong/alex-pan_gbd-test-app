import React from 'react';
import './NavBar.scss';
import logo from '../../assets/images/logo_bonanza.png';
import Button from '../Button/Button';
import { pageNames } from '../../shared/config/pageNames';
import useMediaQuery from '../../shared/hooks/useMediaQuery';
import iconMenu from '../../assets/images/icon_menu.png';
import iconClose from '../../assets/images/icon_close.png';

interface Props {
  currentPage: string
}

const NavBar = (props: Props) => {
  const { currentPage } = props;
  const screenSize = useMediaQuery();
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="navBarWrap">
      <div className="navBar">
        <div className="logo"><img src={logo} alt="bonanza logo" /></div>
        {screenSize === 'mobile' && <div className="mobileMenuBtn" onClick={()=>{handleShowMobileMenu()}}><img src={showMobileMenu ? iconClose : iconMenu} alt="menu icon" /></div>}
        <div className={`menuWrap ${screenSize === 'mobile' ? `mobile ${showMobileMenu ? '' : 'hidden'}` : ''}`}>
          <div className="loginBtnGroup">
            <Button text="Login" />
            <Button text="Sign Up" primary/>
          </div>
          <div className="menu">
            {pageNames.map((name: string, index: number) => <div className={`menuItem ${name === currentPage ? 'highlighted' : ''}`} id={`item${index+1}`} key={name}>{name}</div>)}
          </div>
        </div>
      </div>
    </div>
  )
};

export default NavBar;
