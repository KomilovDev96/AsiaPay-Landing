import React from 'react';
import Image from 'next/image';
import styleAbout from '../styles/about.module.scss'
import planet from '../public/svgs/planet.png'
import card from '../public/svgs/card.png'
import check from '../public/svgs/check.png'
import safity from '../public/svgs/safity.png'
import support from '../public/svgs/support.png'
import wallet from '../public/svgs/wallet.png'
import asiaCard from '../public/svgs/asia-card.svg'
import CardImages from './elements/CardImages';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { cardImgOption, cardTextOption, leftOption, plasticOption, titleOption } from './framer/about';
import Motion from './elements/Motion';

const options = {
    scale: 1,
    speed: 1000,
    max: 30
};

const About = () => {

    const { t } = useTranslation("common")

    const images = [planet, wallet, check, card, safity, support]

    return (
        <div className={styleAbout.about} id="advantages">
            <Motion
                variants={titleOption}
                transition={titleOption.transition}
            >
                <h3 className={styleAbout.about_title}>{t("about.title")}</h3>
            </Motion>
            <div className={styleAbout.about_cards}>
                <div className="container">
                    <div className="row">
                        {
                            images.map((image, i) => (
                                <div className="col-lg-4 col-md-4 col-sm-6" key={i}>
                                    <div className={styleAbout.card_wrapper}>
                                        <Motion
                                            className={styleAbout.card_image}
                                            variants={cardImgOption}
                                            transition={{ ...cardImgOption.transition, delay: i / 10 }}
                                        >
                                            <Image src={image} alt="png" />
                                        </Motion>
                                        <Motion
                                            variants={cardTextOption}
                                            transition={{ ...cardTextOption.transition, delay: i / 10 }}
                                        >
                                            <h5 className={styleAbout.card_title}>{t(`about.${i + 1}.title`)}</h5>
                                        </Motion>
                                        <Motion
                                            variants={cardTextOption}
                                            transition={{ ...cardTextOption.transition, delay: (i / 10) + 0.1 }}
                                        >
                                            <p className={styleAbout.card_text}>{t(`about.${i + 1}.text`)}</p>
                                        </Motion>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={styleAbout.about_bottom} id="ewallet">
                <div className="container">
                    <div className={styleAbout.bottom_content}>
                        <Motion
                            className={styleAbout.bottom_info}
                            variants={leftOption}
                            transition={leftOption.transition}
                        >
                            <h3>{t("ewallet.title")}</h3>
                            <p>{t("ewallet.text")}</p>
                            <button>{t("ewallet.more")}</button>
                        </Motion>
                        <Motion
                            className={styleAbout.bottom_image}
                            variants={plasticOption}
                            transition={plasticOption.transition}
                        >
                            <CardImages image={asiaCard} className="box" options={options} />
                        </Motion>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
