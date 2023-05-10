import React from 'react'
import serviceStyle from '../styles/service.module.scss'
import Image from 'next/image'
import service1 from '../public/svgs/service1.svg'
import service2 from '../public/svgs/service2.svg'
import service3 from '../public/svgs/service3.svg'
import service4 from '../public/svgs/service4.svg'
import safity1 from '../public/svgs/safity1.png'
import safity2 from '../public/svgs/safity2.png'
import safity3 from '../public/svgs/safity3.png'
import safity4 from '../public/svgs/safity4.png'
import safity5 from '../public/svgs/safity5.png'
import safity6 from '../public/svgs/safity6.png'
import { useTranslation } from 'next-i18next'
import Motion from './elements/Motion'
import { leftOption, rightOption, safityCardOption, serviceCardOption, titleOption } from './framer/service'

const Service = () => {

     const { t } = useTranslation("common")

     const serviceData = [service1, service2, service3, service4]

     const safityData = [safity1, safity2, safity3, safity4, safity5, safity6]

     return (
          <div className={serviceStyle.service} id="capabilities">
               <div className={serviceStyle.service_offers}>
                    <Motion
                         variants={titleOption}
                         transition={titleOption.transition}
                    >
                         <h3>{t("capabilities.title")}</h3>
                    </Motion>
                    <div className="card_wrapper">
                         <div className="container">
                              <div className="row">
                                   {
                                        serviceData.map((icon, i) => (
                                             <div className="col-lg-3 col-md-3 col-sm-6 col-6" key={i}>
                                                  <Motion
                                                       className={serviceStyle.service_card}
                                                       variants={serviceCardOption}
                                                       transition={{ ...serviceCardOption.transition, delay: 0.5 + (i / 5) }}
                                                  >
                                                       <div className={serviceStyle.card_image}>
                                                            <Image src={icon} alt="" />
                                                       </div>
                                                       <p className={serviceStyle.card_title}>
                                                            {t(`capabilities.${i + 1}`)}
                                                       </p>
                                                  </Motion>
                                             </div>
                                        ))
                                   }
                              </div>
                         </div>
                    </div>
               </div>
               <div className={serviceStyle.service_security}>
                    <div className={serviceStyle.security_top}>
                         <div className="container">
                              <div className="row justify-content-between">
                                   <div className="col-lg-5 col-md-6">
                                        <Motion
                                             variants={leftOption}
                                             transition={leftOption.transition}
                                        >
                                             <h3>{t("safity.title")}</h3>
                                        </Motion>
                                   </div>
                                   <div className="col-lg-6 col-md-6">
                                        <Motion
                                             variants={rightOption}
                                             transition={rightOption.transition}
                                        >
                                             <p>{t("safity.text")}</p>
                                        </Motion>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="container">
                         <div className="row">
                              {
                                   safityData.map((image, i) => (
                                        <div className="col-lg-4 col-md-6" key={i}>
                                             <Motion
                                                  className={serviceStyle.security_card}
                                                  variants={safityCardOption}
                                                  transition={{ ...safityCardOption.transition, delay: 0.5 + (i / 5) }}
                                             >
                                                  <div className={serviceStyle.card_top}>
                                                       <div className={serviceStyle.image_wrapper}>
                                                            <Image src={image} alt="" />
                                                       </div>
                                                       <h5>{t(`safity.${i + 1}.title`)}</h5>
                                                  </div>
                                                  <p>{t(`safity.${i + 1}.text`)}</p>
                                             </Motion>
                                        </div>
                                   ))
                              }
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Service