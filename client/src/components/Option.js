import React, { useState } from 'react'

export default function Option(deps) {
   const { yearMonth, index } = deps


   return (
      yearMonth.map((date) => {
         return (<option  >
            {
               date
            }
         </option>)
      })


   )
}
