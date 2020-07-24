import React, { useState } from 'react'
import css from "./style.module.css"

export default function Select({ onChange }) {
   const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
   const years = [2019, 2020, 2021];
   // let [option, setOption] = useState([])



   const handleSelect = (event) => {
      //console.log(event.target.value);
      onChange(event.target.value); // Devolve para APP os dados do select (value dos options)
   }
   const handleClickDecrement = (event) => {
      console.log(event.target)
   }

   return (
      <div className={css.container} >
         <button
            className="btn waves-effect waves-ligh"
            style={{ zIndex: "0" }}
            onClick={handleClickDecrement}
         >{"<"}
         </button>
         <select className={css.select} onChange={handleSelect} >
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
         <button
            className="btn waves-effect waves-ligh"
            style={{ zIndex: "0" }}
         >{">"}
         </button>
      </ div>
   )
}

