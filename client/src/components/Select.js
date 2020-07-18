import React, { useState } from 'react'
import css from "./style.module.css"
import Option from './Option';

export default function Select() {
   const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
   const years = [2019, 2020, 2021];
   const [option, setOption] = useState([])



   const handleSelect = (event) => {
      console.log(event.target)
   }
   const handleClickDecrement = (event) => {
      console.log(event.target)
   }
   const handleChange = () => {
      // Chama uma function no qual vai alterar um estado no qual os button vão ter acesso também
   }// Lança os dados para outro lado para serem tratados

   return (
      <div className={css.container} >
         <button className="btn waves-effect waves-ligh" onClick={handleClickDecrement}>{"<"}</button>
         <select className={css.select} onChange={handleSelect} on >
            {
               years.map(year => {
                  return (
                     months.map((month, index) => {

                        return (

                           <Option year={year} index={index} month={month} onChange={handleChange} />

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

