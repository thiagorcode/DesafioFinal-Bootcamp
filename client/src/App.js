import React, { useState } from 'react';
import Select from './components/Select';

import ServiceHttp from "./services/TransactionService";
import Balance from './components/Balance';
import Insert from './components/Insert';

export default function App() {
  const [current, setCurrent] = useState("");

  const handleGetAll = async (date) => {
    const currentTrasanction = await ServiceHttp.getAll(date)
    setCurrent(currentTrasanction.data)
    //console.log(current)
  }

  return (
    <div className="center">
      <h2>Desafio Final do Bootcamp Full Stack</h2>
      <h3>Controle Financeiro Pessoal</h3>
      <Select onChange={handleGetAll} />
      <Balance transanctions={current || 0} />
      <Insert />
    </div>
  )

}
