import './style.scss'

import Search from '../../assets/images/search.svg'
import { PageTitleProps } from '../../types'

export const PageTitle = ({ title, placeholderInput, inputValue, isFormClickedTrue, isFormClickedFalse, handleSearch, handleClickSearch }: PageTitleProps) => {
   return (
      <div className="pageTitle">
         <h2>{title}</h2>
         <div className="seachInput">
            <label htmlFor="search" className="sr-only">Pesquisa</label>
            <input
               type="text"
               id="search"
               name="search"
               placeholder={placeholderInput}
               value={inputValue}
               onChange={handleSearch}
               onMouseDown={isFormClickedTrue}
               onMouseOut={isFormClickedFalse}
            />
            <img src={Search} alt="icone pesquisar" onClick={handleClickSearch} />
         </div>
      </div>
   )
}