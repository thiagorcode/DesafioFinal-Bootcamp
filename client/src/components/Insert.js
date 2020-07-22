import React from 'react'

export default function Insert() {

   // 1 () Criar o get para busca no BD ou nas variáveis do React.input
   // 2 () Criar rota de post do create.
   return (
      <div className="row">
         <button className="btn waves-effect waves-ligh col s3">+ Novo Lançamento</button>
         <input className="col s9" type="text" placeholder="Filtro" />
      </div>
   )
}
