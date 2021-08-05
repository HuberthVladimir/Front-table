import './style.scss'

import { Header } from '../../components/Header'
import { PageTitle } from '../../components/PageTitle'
//import { TitleTable } from '../../components/TitleTable'

export const Employers = () => {
   return (
      <div className="pageContent">
         <Header />
         <main className="mainContent">
            <PageTitle title='Funcionários' placeholderInput="Pesquisar" />
         </main>
      </div>
   )
}
// <TitleTable titleData={['foto', 'nome', 'cargo', 'data de admissão', 'telefone']} />