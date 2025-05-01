import HeaderBanner from '@/components/dashboard/HeaderBanner'
import { RoutesName } from '@/lib/constants'
import React from 'react'

export default function Department() {
  return (
    <>
    <HeaderBanner title='إدارة القسم العلمي' linkCreate={{
        text: 'إضافة قسم علمي',
        href: RoutesName.DEPARTMENT_CREATE
    }} />

    
    </>
  )
}
