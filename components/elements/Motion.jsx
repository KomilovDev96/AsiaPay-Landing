import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Motion = ({ children, transition, variants, className }) => {

     const ref = useRef(null)
     const isInView = useInView(ref)

     return (
          <motion.div
               ref={ref}
               animate={isInView && "active"}
               initial="inactive"
               transition={transition}
               variants={variants}
               className={className}
          >
               {children}
          </motion.div>
     )
}

export default Motion