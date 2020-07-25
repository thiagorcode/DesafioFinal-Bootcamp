import React, { useState, useEffect } from 'react';
import Spinner from './helpers/Spinner';
import ServiceHttp from "../services/TransactionService";

import css from "./helpers/report.module.css";
import Action from './Action';

export default function Report({ transanctions, modal }) {
   const report = transanctions !== 0 ? transanctions
      .report
      .map(transanction => {
         return { ...transanction, isDeleted: true }
      })
      .sort((a, b) => {
         return a.day - b.day;
      }) : 0;


   let id = 0
   const [currentReport, setCurrentReport] = useState(report)
   useEffect(() => {
      setCurrentReport(report)
   }, [])
   console.log(currentReport);
   const handleClickDelete = async (id) => {

      let status = await ServiceHttp.remove(id);

   }

   const handleClickEdit = async (id) => {

      //let status = await ServiceHttp.remove(id);

   }

   // Modal
   const handleClick = (id) => {
      modal(id)
   }

   return (
      <div>
         <div className="row">
            <button
               className="btn waves-effect waves-ligh col s3"
               style={{ zIndex: "0" }}
               onClick={handleClick}
            >+ Novo Lançamento</button>
            <input
               className="col s9"
               type="text"
               placeholder="Filtro"
            />
         </div>
         {currentReport === 0 ? <Spinner /> : currentReport.map(transanction => {
            const {
               day,
               category,
               description,
               value,
               type,
               _id,
               isDeleted
            } = transanction;
            return (

               <div className={css.flexRow}
                  style={type === "-" ? styles.backgroundNegative : styles.backgroundPositive}
                  key={id++}>
                  <div className={css.containerFlex}>
                     <span style={styles.bold}>{day <= 9 ? "0" + day : day}</span>
                     <div className={css.flexColumn}>
                        <span style={styles.bold}>{category}</span>
                        <span>{description}</span>
                     </div>
                  </div>
                  <div className={css.containerFlex}>

                     <span style={styles.bold}>R$ {value}</span>
                     {isDeleted ? (
                        <Action
                           id={_id}
                           click={handleClick}
                           deleted={handleClickDelete}
                           edit={handleClickEdit}
                        />) : ''
                     }
                  </div>

               </div>
            )
         })}
      </div>
   )
}

const styles = {
   backgroundPositive: {
      padding: "20px",
      margin: "5px 0",
      backgroundColor: "#A1F0DC"
   },
   backgroundNegative: {
      padding: "20px",
      margin: "5px 0",
      backgroundColor: "#F0A1A8"
   },
   bold: {
      fontWeight: "bold",
      fontSize: "1.5rem",
      padding: "0 10px"
   }
}