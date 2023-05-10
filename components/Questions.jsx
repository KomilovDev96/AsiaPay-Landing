import React, { useRef, useState } from 'react'
import Image from 'next/image'
import styleQuestions from '../styles/questions.module.scss'
import arrow from '../public/svgs/arrow.svg'
import { useTranslation } from 'next-i18next'
import Motion from './elements/Motion'
import { itemOption, titleOption } from './framer/question'
import { motion } from 'framer-motion'
import DetectInView from './elements/DetectInView'

const Questions = () => {

     const { t } = useTranslation()

     return (
          <div className={styleQuestions.questions} id="questions">
               <Motion
                    variants={titleOption}
                    transition={titleOption.transition}
               >
                    <h3>{t("questions.title")}</h3>
               </Motion>
               <DetectInView>
                    <div className="container">
                         <div className="row justify-content-center">
                              <div className="col-lg-10 col-md-12">
                                   {
                                        [1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                             <QuestionItem key={i} index={i}
                                                  item={{ title: t("questions.1.title"), desc: t("questions.1.text") }}
                                             />
                                        ))
                                   }
                              </div>
                         </div>
                    </div>
               </DetectInView>
          </div>
     )
}

export default Questions

const QuestionItem = ({ item, index }) => {

     const itemRef = useRef(null)
     const [isOpen, setIsOpen] = useState(false)

     const handleOpen = () => setIsOpen(p => !p)

     return (
          <motion.div
               className={styleQuestions.questions_item}
               variants={itemOption}
               transition={{ ...itemOption.transition, delay: 0.3 + (index / 10) }}
          >
               <div onClick={handleOpen} className={styleQuestions[`questions_item_head${isOpen ? '_active' : ''}`]}>
                    <h5>{item.title}</h5>
                    <Image src={arrow} alt="" />
               </div>
               <div
                    className={styleQuestions.questions_item_body}
                    style={{ height: isOpen ? itemRef.current?.offsetHeight : 0 }}
               >
                    <p ref={itemRef}>{item.desc}</p>
               </div>
          </motion.div>
     )
}