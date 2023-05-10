import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import cx from 'classnames'
import stylesNav from '../../styles/navbar.module.scss'
import arrow from "../../public/svgs/arrow_down.svg"
import { useOutsideClick } from '../hooks/generalHooks'

const LangMenu = () => {

     const langs = ["ru", "uz", "en"]
     const { t, i18n: { language } } = useTranslation("common")
     const { ref, isVisible, setIsVisible } = useOutsideClick(false)

     return (
          <div className={stylesNav.contact__lang} >
               <div className={stylesNav.contact__lang_input} onClick={() => !isVisible && setIsVisible(true)}>
                    <span>{t(`navbar.${language}`)}</span> <Image src={arrow} alt="" />
               </div>
               <ul className={cx(stylesNav.contact__lang_menu, { [stylesNav.contact__lang_menu_active]: isVisible })} ref={ref}>
                    {
                         langs.map(el => (
                              <li key={el} onClick={() => setIsVisible(false)}>
                                   <Link href="/" locale={el}>{t(`navbar.${el}`)}</Link>
                              </li>
                         ))
                    }
               </ul>
          </div >
     )
}

export default LangMenu