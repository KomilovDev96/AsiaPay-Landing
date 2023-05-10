import React from 'react';
import stylesHeader from '../styles/header.module.scss';
import Image from 'next/image';
import card1 from '../public/svgs/card1.svg'
import card2 from '../public/svgs/card2.svg'
import card3 from '../public/svgs/card3.svg'
import blue from '../public/svgs/blueSvg.svg'
import monitor from '../public/monitor.png'
import CardImages from './elements/CardImages';
import header2 from '../public/svgs/header2.svg';
import Wave from 'react-wavify';
import { useTranslation } from 'next-i18next';
import { btnOption, cardOption, imgOption, leftOption, monitorOption } from './framer/header';
import { motion } from 'framer-motion';
import Motion from './elements/Motion';

const options = {
    scale: 1.2,
    speed: 1000,
    max: 30
};

const Header = () => {

    const { t } = useTranslation("common")

    const waves = [
        {
            options: {
                height: 10,
                amplitude: 20,
                speed: 0.25,
                points: 3
            },
            color: 'rgba(76, 77, 156, 0.25)'
        },
        {
            options: {
                height: 15,
                amplitude: 20,
                speed: 0.25,
                points: 4
            },
            color: 'rgba(76, 77, 156, 0.2)'
        },
        {
            options: {
                height: 20,
                amplitude: 20,
                speed: 0.2,
                points: 5
            },
            color: '#ffffff'
        },
    ]

    const cards = [card1, card2, card3]

    return (
        <div
            className={stylesHeader.header}>
            <div className="container d-flex">
                <div className="row w-100 flex-column-reverse flex-sm-row">
                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className={stylesHeader.title}>
                            <Motion
                                variants={leftOption}
                                transition={leftOption.transition}
                            >
                                <h1>{t("header.title")}</h1>
                            </Motion>
                            <Motion
                                variants={leftOption}
                                transition={leftOption.transition}
                            >
                                <p>{t("header.text")}</p>
                            </Motion>
                            <Motion
                                variants={btnOption}
                                transition={btnOption.transition}
                            >
                                <a href="#">{t("general.login")}</a>
                            </Motion>
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-6 col-12">
                        <div className={stylesHeader.header__realitive}>
                            <div className={stylesHeader.header__position}>
                                <motion.div
                                    variants={imgOption}
                                    transition={imgOption.transition}
                                    className={stylesHeader.header__blue}>
                                    <div className='d-none d-lg-block'>
                                        <Image src={blue} alt="svg" />
                                    </div>
                                    <div className='d-lg-none'>
                                        <Image src={header2} alt="svg" />
                                    </div>
                                </motion.div>
                                <div className={stylesHeader.header__cards}>
                                    <ul>
                                        {
                                            cards.map((img, i) => (
                                                <motion.li key={i}
                                                    variants={cardOption}
                                                    transition={{ ...cardOption.transition, delay: 1 + (i / 10) }}
                                                >
                                                    <CardImages image={img} className="box" options={options} />
                                                </motion.li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <motion.div
                                    variants={monitorOption}
                                    transition={monitorOption.transition}
                                    className={stylesHeader.header__monitor}
                                >
                                    <Image src={monitor} alt="png" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-none d-md-block'>
                {
                    waves.map((el, i) => (
                        <div className={stylesHeader.header__waves} key={i}>
                            <Wave fill={el.color} options={el.options} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Header;
