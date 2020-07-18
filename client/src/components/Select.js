import React, { useState } from 'react'
import css from "./style.module.css"

export default function Select() {
   const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
   const years = [2019, 2020, 2021];
   let [option, setOption] = useState([])



   const handleSelect = (event) => {
      console.log(event.target)
   }
   const handleClickDecrement = (event) => {
      console.log(event.target)
   }

   return (
      <div className={css.container} >
         <button className="btn waves-effect waves-ligh" onClick={handleClickDecrement}>{"<"}</button>
         <select className={css.select} onChange={handleSelect} on >
            {
               years.map(year => {
                  return (
                     months.map((month, index) => {
                        return (
                           <option key={`${year}${index}`} value={`${year}-${++index <= 9 ? "0" + index : index}`}>{`${month}/${year}`}</option>
                        )
                     })
                  )
               })
            }
         </select>
         <button className="btn waves-effect waves-ligh">{">"}</button>
      </ div>
   )
}

