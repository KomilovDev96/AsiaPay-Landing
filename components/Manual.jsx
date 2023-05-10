import React, { useEffect } from 'react'
import Image from 'next/image'
import styleManual from '../styles/manual.module.scss'
import logo from '../public/svgs/manual_logo.svg'
import phone from '../public/svgs/phone.png'
import Motion from './elements/Motion'
import { boxOption, imgOption, patterOption, titleOption } from './framer/manual'

const Manual = () => {


     return (
          <div className={styleManual.manual}>
               <div className="container">
                    <div className="row">
                         <div className="col-lg-7">
                              <div className={styleManual.manual_info}>
                                   <Motion
                                        variants={titleOption}
                                        transition={{ ...titleOption.transition, delay: 0.2 }}
                                   >
                                        <h3>Теперь не нужно дату оплаты различных услуг. Автоплатеж сделает это за вас!</h3>
                                   </Motion>
                                   <Motion
                                        variants={titleOption}
                                        transition={{ ...titleOption.transition, delay: 0.3 }}
                                   >
                                        <h4>Что такое автоплатеж и как его подключить?</h4>
                                   </Motion>
                                   <Motion
                                        variants={titleOption}
                                        transition={{ ...titleOption.transition, delay: 0.4 }}
                                   >
                                        <p>Банк с согласия клиента будет своевременно с точностью до копейки автоматически  производить списание средств в счет оплаты разных услуг. </p>
                                   </Motion>
                                   <Motion
                                        variants={titleOption}
                                        transition={{ ...titleOption.transition, delay: 0.5 }}
                                   >
                                        <p>Используя сервис автоматических платежей, достаточно выполнить настройку периодичности выплат по  определенным счетам, чтобы не проходить процедуру каждый раз.</p>
                                   </Motion>
                                   <Motion
                                        className={styleManual.manual_info_box}
                                        variants={boxOption}
                                        transition={boxOption.transition}
                                   >
                                        <p>Важно! Для возможности использования данной услуги необходимо, чтобы на счету или в личном кабинете пользователя были денежные средства для совершения платежа или перевода в требуемом размере.</p>
                                   </Motion>
                              </div>
                         </div>
                         <div className="col-lg-5">
                              <Motion
                                   className={styleManual.manual_image}
                                   variants={imgOption}
                                   transition={imgOption.transition}
                              >
                                   <Image src={phone} alt="" />
                              </Motion>
                         </div>
                    </div>
               </div>
               <div className={styleManual.manual_logo}>
                    <Motion
                         variants={patterOption}
                         transition={patterOption.transition}
                    >
                         <Image src={logo} alt="" />
                    </Motion>
               </div>
          </div>
     )
}

export default Manual