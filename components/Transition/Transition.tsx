import { motion } from 'motion/react'
import React from 'react'

const Transition = (props: any) => {
  const { children } = props

  return <motion.div {...props}>{children}</motion.div>
}

export default Transition
