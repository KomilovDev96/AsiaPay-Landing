import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const DetectInView = ({ children }) => {

     const ref = useRef(null)
     const isInView = useInView(ref)

     return (
          <motion.div
               ref={ref}
               animate={isInView && "active"}
               initial="inactive"
          >
               {children}
          </motion.div>
     )
}

export default DetectInView