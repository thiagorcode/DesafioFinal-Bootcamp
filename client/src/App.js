import React, { useState, useEffect } from 'react';
import Select from './components/Select';

import ServiceHttp from "./services/TransactionService";
import Balance from './components/Balance';
import Report from './components/Report';


export default function App() {
  const [current, setCurrent] = useState(0);
  const [modified, setModified] = useState(0);
  const [yearMonth, setYearMonth] = useState("2019-01")

  useEffect(() => {
    const getAll = async (yearMonth) => {
      const currentTrasanction = await ServiceHttp.getAll(yearMonth)
      setCurrent(currentTrasanction.data)
    }
    getAll(yearMonth)
    // Quando verifica que yearMonth alterou ou a modal fechou ou abriu faz uma nova consulta
  }, [yearMonth, modified])
  // Verifica as datas

  const handleGetAll = (event) => {
    setYearMonth(event)
  }

  const handleClickDeleted = async (id) => {
    const status = await ServiceHttp.remove(id);
    setModified(status)
  }
  const handleModified = async (modal) => {
    setModified(modal)
  }


  return (
    <div className="container center">
      <h4>Desafio Final do Bootcamp Full Stack</h4>
      <h5>Controle Financeiro Pessoal</h5>
      <p>Feito por<a href="https://www.linkedin.com/in/thiagorodrig/">Thiago Rodrigues </a></p>
      <Select onChange={handleGetAll} />
      <Balance transanctions={current} />
      <Report
        transanctions={current}
        deleted={handleClickDeleted}
        modal={handleModified}
      />




    </div>
  )

}
