import { ReactNode } from 'react'

export type tableDataTypes = {
   id: number
   name: string
   image: string
   job: string
   admission_date: string
   phone: string
}

export type PageTitleProps = {
   title: string
   placeholderInput: string
   inputValue: string
   isFormClickedTrue?: () => void
   isFormClickedFalse?: () => void
   handleSearch: (e: any) => void
   handleClickSearch?: () => void
}

export type TitleTableProps = {
   titleData: string[]
   children?: ReactNode
}