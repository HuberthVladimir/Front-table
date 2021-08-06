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
   const [valueInput, setValueInput] = useState<string>('')
   const [isFormClicked, setIsFormClicled] = useState(false)
   const [isSearching, setIsSearching] = useState<boolean>(false)
   const [errorApi, setErrorApi] = useState(false)

   useEffect(() => {
      setErrorApi(false)
      const getApiDatas = async () => {
         try {
            const request = await api.get('/employess')
            setTableData(request.data)
         } catch (e) {
            setErrorApi(true)
         }
      }
      getApiDatas()

   }, [])

   useEffect(() => {
      if (isFormClicked && isSearching) {
         setIsSearching(false)
      }
   }, [isFormClicked, isSearching])

   const handleClickSearch = () => {
      if (valueInput === '') {
         setIsSearching(false)
      } else {
         setIsSearching(true)
      }
   }

   return (
      <div className="pageContent">
         <Header />
         <main className="mainContent">
            <PageTitle
               inputValue={valueInput}
               handleSearch={(e) => setValueInput(e.target.value)}
               title='Funcionários'
               placeholderInput="Pesquisar"
               handleClickSearch={handleClickSearch}
               isFormClickedTrue={() => setIsFormClicled(true)}
               isFormClickedFalse={() => setIsFormClicled(false)}
            />
            <section>

               {errorApi && <h1 className="messageError">Desculpe parece que estamos com poblemas no momento, tente novamente mais tarde</h1>}

               {!errorApi && (
                  <TitleTable titleData={['foto', 'nome', 'cargo', 'data de admissão', 'telefone']}>
                     {!isSearching &&
                        (
                           tableData.map((response) => {
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
                           })
                        )}
                     {isSearching &&
                        (
                           tableData.map((response) => {
                              if (response.name.toLowerCase().includes(valueInput.toLowerCase())) {
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
                              } else {
                                 return false
                              }
                           })
                        )
                     }
                  </TitleTable>
               )}

            </section>
         </main>
      </div>
   )
}