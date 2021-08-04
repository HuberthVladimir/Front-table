import { ReactNode } from 'react'
import './styles.scss'

interface TitleTableProps {
   titleData: string[]
   children?: ReactNode
}

export const TitleTable = ({ titleData, children }: TitleTableProps) => {
   return (
      <table>
         {titleData?.map((data) => {
            return (
               <th>
                  {data.toUpperCase()}
               </th>)
         })}
         {children}
      </table>
   )
}