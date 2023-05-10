import React from 'react'
import Image from 'next/image'
import styleCategory from '../styles/category.module.scss'
import catalog1 from '../public/svgs/catalog1.png'
import catalog2 from '../public/svgs/catalog2.png'
import catalog3 from '../public/svgs/catalog3.png'
import catalog4 from '../public/svgs/catalog4.png'
import category1 from '../public/svgs/category1.png'
import category2 from '../public/svgs/category2.png'
import category3 from '../public/svgs/category3.png'
import category4 from '../public/svgs/category4.png'
import category5 from '../public/svgs/category5.png'
import { useTranslation } from 'next-i18next'
import Motion from './elements/Motion'
import { btnOption, catalogOption, categoryOption, leftOption, rightOption, titleOption } from './framer/category'

const Category = () => {

     const { t } = useTranslation("common")

     const catalogData = [catalog1, catalog2, catalog3, catalog4]

     const categoryData = [category1, category2, category3, category4, category5]

     return (
          <div className='cateogry' >
               <div className={styleCategory.category_catalog}>
                    <div className={styleCategory.category_catalog_top}>
                         <Motion
                              variants={titleOption}
                              transition={{ ...titleOption, delay: 0.3 }}
                         >
                              <h3>{t("catalog.title")}</h3>
                         </Motion>
                         <Motion
                              variants={titleOption}
                              transition={{ ...titleOption, delay: 0.4 }}
                         >
                              <p>{t("catalog.text")}</p>
                         </Motion>
                    </div>
                    <div className={styleCategory.catalog_body}>
                         <div className="container">
                              <div className="row justify-content-between">
                                   {
                                        catalogData.map((icon, i) => (
                                             <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
                                                  <Motion
                                                       className={styleCategory.catalog_card}
                                                       variants={catalogOption}
                                                       transition={{ ...catalogOption.transition, delay: 0.5 + (i / 5) }}
                                                  >
                                                       <div className={styleCategory.image_wrapper}>
                                                            <Image src={icon} alt="" />
                                                       </div>
                                                       <p>{t(`catalog.${i + 1}`)}</p>
                                                  </Motion>
                                             </div>
                                        ))
                                   }
                              </div>
                         </div>
                    </div>
                    <Motion
                         className="container"
                         variants={btnOption}
                         transition={btnOption.transition}
                    >
                         <a href="#">Весь список</a>
                    </Motion>
               </div>
               <div className={styleCategory.category_list}>
                    <div className="container">
                         <div className={styleCategory.category_list_top}>
                              <div className="row justify-content-between">
                                   <div className="col-lg-5 col-md-7 col-sm-12">
                                        <Motion
                                             variants={leftOption}
                                             transition={leftOption.transition}
                                        >
                                             <h3>{t("category.title")}</h3>
                                        </Motion>
                                   </div>
                                   <div className="col-lg-3 col-md-5 d-none d-md-block">
                                        <Motion
                                             variants={rightOption}
                                             transition={rightOption.transition}
                                        >
                                             <a href="#">{t("category.all")}</a>
                                        </Motion>
                                   </div>
                              </div>
                         </div>
                         <div className={styleCategory.category_body}>
                              <div className="row justify-content-lg-between justify-content-md-center justify-content-sm-center justify-content-center">
                                   {
                                        categoryData.map((icon, i) => (
                                             <div className={`col-lg-${categoryData.length - 1 === i ? "2" : "2"} col-md-4 col-sm-6 col-6`} key={i}>
                                                  <Motion
                                                       className={styleCategory.category_card}
                                                       variants={categoryOption}
                                                       transition={{ ...categoryOption.transition, delay: 0.5 + (i / 10) }}
                                                  >
                                                       <div className={styleCategory.category_image}>
                                                            <Image src={icon} alt="" />
                                                       </div>
                                                       <p>{t(`category.${i + 1}`)}</p>
                                                  </Motion>
                                             </div>
                                        ))
                                   }
                                   <div className="col-lg-3 col-md-5 d-md-none">
                                        <a href="#">{t("category.all")}</a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Category