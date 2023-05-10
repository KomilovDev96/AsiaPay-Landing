import React, { Fragment } from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'
import styleNavbar from '../../styles/navbar.module.scss'

const MenuToogle = ({ isActive, toggle }) => {

     return (
          <div className={cx(styleNavbar.menu_toggle, { [styleNavbar.menu_toggle_active]: isActive })} onClick={toggle}>
               <span />
               <span />
               <span />
          </div>
     )
}

export default MenuToogle