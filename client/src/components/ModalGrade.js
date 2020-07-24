import React, { useState } from 'react'
import Modal from "react-modal"

import ServiceHttp from "../services/TransactionService";
import css from "./helpers/modal.module.css"


Modal.setAppElement('#root')

export default function ModalGrade({ onClose }) {
   const initialForm = {
      description: '',
      type: '',
      value: '',
      category: '',
      date: '',
   }

   const [gradeForm, setGradeForm] = useState(initialForm);
   let valueDate = ""
   const handleInputChange = (event) => {
      const { name, value } = event.target;

      if (name === "date") { // Tira os - de date separa campo YYYY MM DD
         valueDate = value.split("-");
         setGradeForm({ ...gradeForm, [name]: valueDate });

         return
      }
      setGradeForm({ ...gradeForm, [name]: value });
   }

   const handleFormSubmit = async (event) => {
      event.preventDefault();

      const { date } = gradeForm
      const data = {
         description: gradeForm.description,
         type: gradeForm.type,
         value: parseInt(gradeForm.value),
         category: gradeForm.category,
         year: parseInt(date[0]),
         month: parseInt(date[1]),
         day: parseInt(date[2]),
         yearMonth: `${date[0]}-${date[1]}`,
         yearMonthDay: `${date[0]}-${date[1]}-${date[2]}`,
      }
      let respost = await ServiceHttp.create(data)
      console.log(respost) // Colocar uma mensagem que fale que foi efetuado com sucesso


      onClose(null);

   }

   const handleModalClose = () => {
      onClose(null);
   };


   return (
      <div  >
         <Modal isOpen={true} >
            <div className={css.row}>
               <div >
                  <h3>Lançamento</h3>
                  <button className="waves-effect waves-lights btn red dark-4"
                     onClick={handleModalClose}>X</button>
               </div>
               <form onSubmit={handleFormSubmit}>
                  <div>
                     <p>
                        <label>
                           <input
                              name="type"
                              type="radio"
                              value="-"
                              required
                              onChange={handleInputChange}
                           />
                           <span>Despesa</span>
                        </label>
                     </p>
                     <p>
                        <label>
                           <input
                              name="type"
                              type="radio"
                              value="+"
                              required
                              onChange={handleInputChange}
                           />
                           <span>Receita</span>
                        </label>
                     </p>
                  </div>
                  <div className="input-field">
                     <input
                        type="text"
                        id="description"
                        required
                        name="description"
                        onChange={handleInputChange}
                     />
                     <label htmlFor="description" className="active">Descrição:</label>
                  </div>
                  <div className="input-field">
                     <input
                        type="text"
                        required
                        name="category"
                        id="category"
                        onChange={handleInputChange}
                     />
                     <label htmlFor="category" className="active">Categoria:</label>
                  </div>
                  <div className="input-field">
                     <input
                        type="number"
                        id="value"
                        required
                        name="value"
                        min="0"
                        onChange={handleInputChange}
                     />
                     <label htmlFor="value" className="active">Valor:</label>
                  </div>
                  <div className="input-field">
                     <input
                        type="date"
                        name="date"
                        required
                        id="date"
                        onChange={handleInputChange}
                     />
                     <label htmlFor="date" className="active">Data:</label>
                  </div>
                  <button className="btn waves-effect waves-ligh col s3" >Enviar</button>
               </form>
            </div>
         </Modal>
      </div>
   )
}
