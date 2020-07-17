import React, { useState } from 'react'

export default function Select() {
   let [selected, setSelected] = useState({value: "red"});

   const handleChange = (event) => {
      setSelected({value: event.target.value});
   }
   console.log(selected.value)
   return (
      <div>
         <form action="">
            <label htmlFor="">
               Escolha sua Cor
            
               <select value={selected.value} onChange={handleChange} >
                  Value
                  <option value="Red">Red</option>
                  <option value="Yellow">Yellow</option>
                  <option value="Bleu">Red</option>
               </select>
            </label>
         </form>
      </div>
   )
}

