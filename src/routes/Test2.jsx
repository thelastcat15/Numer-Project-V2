import { div } from 'framer-motion/client'
import React, { useState } from 'react'

function Test2() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      {
        open && (
          <div></div>
        )
      }
    </div>
  )
}

export default Test2