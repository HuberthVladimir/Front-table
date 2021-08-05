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
}

export type TitleTableProps = {
   titleData: string[]
   children?: ReactNode
}