import React from 'react';
import Image from 'next/image';
import logo from "../public/logo.svg"
import phone from "../public/phone.svg"
import stylesNav from "../styles/navbar.module.scss";
import { useTranslation } from 'next-i18next';
import LangMenu from './elements/LangMenu';
import cx from 'classnames'
import { useToggle } from './hooks/generalHooks';
import MenuToogle from './elements/MenuToogle';
import { logoOption, rightOption, menuOption } from './framer/navbar';
import Motion from './elements/Motion';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {

    const { t } = useTranslation("common")
    const { isActive, toggle } = useToggle(false)

    const navMenu = [
        {
            to: "advantages",
            title: t("navbar.advantages"),
            spy: true,
            duration: 500
        },
        {
            to: "ewallet",
            title: t("navbar.wallet"),
            spy: true,
            duration: 500
        },
        {
            to: "capabilities",
            title: t("navbar.capabilities"),
            spy: true,
            duration: 500
        },
        {
            to: "questions",
            title: t("navbar.questions"),
            spy: true,
            duration: 500
        },
    ]
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return (
        <div className={stylesNav.navbar_main}>
            <div className="container">
                <div className={stylesNav.navbar__row}>
                    <Motion
                        className={cx(stylesNav.navbar__logo)}
                        variants={logoOption}
                        transition={logoOption.transition}
                    >
                        <Image onClick={scrollToTop} src={logo} alt="logo" />
                    </Motion>
                    <Motion
                        className={stylesNav.hidden_menu_wrapper}
                        variants={rightOption}
                        transition={rightOption.transition}
                    >
                        <div className={cx(stylesNav.hidden_menu_lang, { [stylesNav.hidden_menu_lang_active]: isActive })}>
                            <LangMenu />
                        </div>
                        <MenuToogle isActive={isActive} toggle={toggle} />
                    </Motion>
                    <div className={cx(stylesNav.navbar__row, stylesNav.hidden_menu, { [stylesNav.hidden_menu_active]: isActive })}>
                        <ul className={stylesNav.navbar__menu}>
                            {
                                navMenu.map((item, i) => (
                                    <li key={i}>
                                        <Motion
                                            variants={menuOption}
                                            transition={{ ...menuOption.transition, delay: i / 10 }}
                                        >
                                            <Link to={item.to} spy={item.spy} offset={-50} smooth={item.smooth} duration={item.duration}>
                                                {item.title}
                                            </Link>
                                        </Motion>
                                    </li>
                                ))
                            }
                        </ul>
                        <Motion
                            className={stylesNav.contact}
                            variants={rightOption}
                            transition={rightOption.transition}
                        >
                            <a href='tel: +998 99 777 99 88' className={stylesNav.contact__phone}>
                                <div className={stylesNav.contact__phone_img}>
                                    <Image src={phone} alt="logo" width="100%" height="100%" />
                                </div>
                                <span className={stylesNav.contact__phone_phone}>+998 99 777 99 88</span>
                            </a>

                            <div className={stylesNav.contact__select}>
                                <div className='d-none d-lg-block'>
                                    <LangMenu />
                                </div>
                                <a href="#" className={stylesNav.contact__select_btn}>{t("general.login")}</a>
                            </div>
                        </Motion>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Navbar;
