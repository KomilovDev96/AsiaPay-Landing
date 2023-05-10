import React, { useEffect, useState } from 'react';
import { useWindowScroll } from "react-use";
import scroll from '../styles/scroll.module.scss'
import Arrow from './elements/Arrow';
import cx from 'classnames'

const Scrolltop = () => {

    const { y: pageYOffset } = useWindowScroll()
    const [visible, setVisiblity] = useState(false)

    useEffect(() => {
        if (pageYOffset > 500) {
            setVisiblity(true)
        } else {
            setVisiblity(false)
        }
    }, [pageYOffset])
    const scrolltoTopP = () => window.scrollTo({ top: 0, behavior: "smooth" })


    return (
        <div className={cx(scroll.scrollTOp, { [scroll.scrollTOp_active]: visible })} onClick={scrolltoTopP}>
            <Arrow />
        </div>
    );
}

export default Scrolltop;