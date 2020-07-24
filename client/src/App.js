import React, { useState, useEffect } from 'react';
import Select from './components/Select';

import ServiceHttp from "./services/TransactionService";
import Balance from './components/Balance';
import Report from './components/Report';
import ModalGrade from './components/ModalGrade';

export default function App() {
  const [current, setCurrent] = useState("");
  const [yearMonth, setYearMonth] = useState("2019-01")
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getAll = async (yearMonth) => {
      const currentTrasanction = await ServiceHttp.getAll(yearMonth)
      setCurrent(currentTrasanction.data)
    }
    getAll(yearMonth)

    // Quando verifica que yearMonth alterou ou a modal fechou ou abriu faz uma nova consulta
  }, [yearMonth, isModalOpen])
  const handleGetAll = (event) => {
    setYearMonth(event)
  }
  // Manipulação do Modal
  const handleModal = () => {
    setIsModalOpen(true)
  }
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="container center">
      <h4>Desafio Final do Bootcamp Full Stack</h4>
      <h5>Controle Financeiro Pessoal</h5>

      <Select onChange={handleGetAll} />
      <Balance transanctions={current || 0} />
      <Report transanctions={current || 0} modal={handleModal} />




      {isModalOpen && (
        <ModalGrade
          onClose={handleClose}
        />
      )
      }
    </div>
  )

}
