import { useEffect, useState } from 'react'
import './style.scss'

import { Header } from '../../components/Header'
import { PageTitle } from '../../components/PageTitle'
import { TitleTable } from '../../components/TitleTable'
import { api } from '../../services/api'

import { tableDataTypes } from '../../types'

import { formDate, formatPhoneNumber } from '../../functions'

export const Employers = () => {
   const [tableData, setTableData] = useState<tableDataTypes[]>([])

   useEffect(() => {
      const getApiDatas = async () => {
         const request = await api.get('/employess')
         setTableData(request.data)
      }
      getApiDatas()
   }, [])

   return (
      <div className="pageContent">
         <Header />
         <main className="mainContent">
            <PageTitle title='Funcionários' placeholderInput="Pesquisar" />
            <section>
               <TitleTable titleData={['foto', 'nome', 'cargo', 'data de admissão', 'telefone']}>
                  {tableData.map((response) => {
                     return (
                        <tr key={response.id}>
                           <td>
                              <img src={response.image} alt={`${response.name} foto`} />
                           </td>
                           <td>{response.name}</td>
                           <td>{response.job}</td>
                           <td>{formDate(response.admission_date)}</td>
                           <td>{formatPhoneNumber(response.phone)}</td>
                        </tr>
                     )
                  })}
               </TitleTable>
            </section>
         </main>
      </div>
   )
}