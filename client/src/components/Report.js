import React from 'react';
import Spinner from './helpers/Spinner';

import css from "./helpers/report.module.css";

export default function Report({ transanctions }) {
   if (transanctions !== 0) transanctions = transanctions
      .report
      .sort((a, b) => {
         return a.day - b.day;
      })

   return (
      <div>
         {transanctions === 0 ? <Spinner /> : transanctions.map(transanction => {
            const { day, category, description, value, type } = transanction;
            return (
               <div className={css.flexRow}
                  style={type === "-" ? styles.backgroundNegative : styles.backgroundPositive}>
                  <div className={css.containerFlex}>
                     <span style={styles.bold}>{day <= 9 ? "0" + day : day}</span>
                     <div className={css.flexColumn}>
                        <span style={styles.bold}>{category}</span>
                        <span>{description}</span>
                     </div>
                  </div>
                  <div>
                     <span style={styles.bold}>R$ {value}</span>
                     <button className="btn waves-effect waves-ligh col s3"><i class="small material-icons">edit</i></button>
                     <button className="btn waves-effect waves-ligh col s3 red"><i class="small material-icons">delete</i></button>

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