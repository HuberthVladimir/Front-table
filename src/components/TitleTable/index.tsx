import './styles.scss'

import { TitleTableProps } from '../../types'

export const TitleTable = ({ titleData, children }: TitleTableProps) => {
   return (
      <table>
         <thead>
            <tr>
               {titleData?.map((data, index) => {
                  return (
                     <th key={index}>
                        {data.toUpperCase()}
                     </th>)
               })}
            </tr>
         </thead>
         <tbody>
            {children}
         </tbody>
      </table>
   )
}