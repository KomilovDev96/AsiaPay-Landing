import React from 'react'
import Image from 'next/image'
import styleFooter from '../styles/footer.module.scss'
import compliant from '../public/svgs/compliant_logo.png'
import facebook from '../public/svgs/facebook.svg'
import instagram from '../public/svgs/instagram.svg'
import telegram from '../public/svgs/telegram.svg'
import logo from '../public/svgs/light_logo.svg'
import { useTranslation } from 'next-i18next'

const Footer = () => {

     const { t } = useTranslation("common")

     return (
          <div className={styleFooter.footer}>
               <div className="container">
                    <div className="row justify-content-center">
                         <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                              <p className={styleFooter.phones_title}>{t("footer.support")}</p>
                              <div className={styleFooter.footer_phones}>
                                   <a href="tel: +998 99 999 99 88">+998 99 999 99 88</a>
                                   <a href="tel: +998 99 999 99 88">+998 99 999 99 88</a>
                              </div>
                              <div className={styleFooter.footer_icons}>
                                   <div className={styleFooter.footer_icons_img}>
                                        <Image src={logo} alt="" />
                                   </div>
                                   <a href="#"><Image src={instagram} alt="" /></a>
                                   <a href="#"><Image src={facebook} alt="" /></a>
                                   <a href="#"><Image src={telegram} alt="" /></a>
                              </div>
                         </div>
                         <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                              <a href='#'>{t("navbar.advantages")}</a>
                              <a href='#'>{t("navbar.wallet")}</a>
                              <a href='#'>{t("navbar.capabilities")}</a>
                              <a href='#'>{t("navbar.questions")}</a>
                         </div>
                         <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                              <a href='#'>{t("footer.developers")}</a>
                              <a href='#'>{t("footer.blog")}</a>
                              <a href='#'>{t("footer.jobs")}</a>
                              <Image src={compliant} alt="" />
                         </div>
                         <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                              <div className={styleFooter.bottom_links}>
                                   <a href="#">{t("footer.privacy")}</a>
                                   <a href="#">{t("footer.offer")}</a>
                                   <a href="#">{t("footer.license")}</a>
                                   <a href="#">{t("footer.network")}</a>
                                   <a href="#">{t("footer.eco")}</a>
                              </div>
                         </div>
                    </div>
               </div>
               <div style={{ display: "flex", justifyContent: "center"}}>
                    <p><a href="https://komilovstudio.uz/" style={{ marginLeft: "4px", textDecoration: "underline" }}><b>Разработала команда Komilovstudio</b></a></p>
               </div>
          </div >
     )
}

export default Footer