import './style.scss'

import Search from '../../assets/images/search.svg'

interface PageTitleProps {
   title: string
   placeholderInput: string
}

export const PageTitle = ({ title, placeholderInput }: PageTitleProps) => {
   return (
      <div className="pageTitle">
         <h2>{title}</h2>
         <div className="seachInput">
            <input type="search" placeholder={placeholderInput} />
            <img src={Search} alt="icone pesquisar" />
         </div>
      </div>
   )
}