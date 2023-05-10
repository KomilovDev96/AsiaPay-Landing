import React from 'react'
import Image from 'next/image'
import styleLogin from '../styles/login.module.scss'
import login from '../public/svgs/login.png'
import Motion from './elements/Motion'
import { leftOption, rightOption } from './framer/login'
import { useWindowWidth } from './hooks/generalHooks'

const Login = () => {

     const width = useWindowWidth()

     return (
          <div className={styleLogin.login}>
               <div className="container">
                    <div className="row">
                         <div className="col-lg-5">
                              <Motion
                                   className={styleLogin.login_left}
                                   variants={leftOption}
                                   transition={leftOption.transition}
                              >
                                   <h3>Все платежи и переводы на одной платформе!</h3>
                                   <p>Совершайте операции с картами, оплатой услуг и переводами из любого устройства.</p>
                                   <a href="#">Войти</a>
                              </Motion>
                         </div>
                         <div className="col-lg-7">
                              <Motion
                                   className="login-right"
                                   variants={rightOption}
                                   transition={rightOption.transition}
                              >
                                   <Image src={login} alt="" />
                              </Motion>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Login