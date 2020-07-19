import React, { useState, useEffect } from 'react'
import css from "./style.module.css"
import Option from './Option';

export default function Select() {
   const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
   const years = [2019, 2020, 2021];
   const [options, setOptions] = useState([])
   const [option, setOption] = useState([])

   let [index, setIndex] = useState(0)
   let yearMonth = [];
   let test = [];

   years.map(year => {
      return months.map(month => {
         yearMonth.push(`${month}/${year}`)
      })
   })

   useEffect(() => {

   }, [index])

   const handleLoad = (event) => {


   }
   const handleSelect = (event) => {
      setOption(event.target)
      console.log(event)

   }
   const handleClickDecrement = () => {
      if (index === 0) {
         return
      }
      setIndex(--index)
      console.log(index)
   }
   const handleClickIncrement = () => {
      if (index === 36) {
         return
      }
      setIndex(++index)
      console.log(index)
   }
   const handleChange = (event) => {

      test = [...test, event]


      // Chama uma function no qual vai alterar um estado no qual os button vão ter acesso também
   }// Lança os dados para outro lado para serem tratados
   // !Lançar para a OPTION algum atributo com uma função e devolver preechido.
   return (
      <div className={css.container} >
         <button className="btn waves-effect waves-ligh" onClick={handleClickDecrement}>{"<"}</button>
         <select className={css.select} onClick={handleSelect} >
            <Option yearMonth={yearMonth} onChange={handleChange} index={index} />


         </select>
         <button className="btn waves-effect waves-ligh" onClick={handleClickIncrement}>{">"}</button>
      </ div>
   )
}

