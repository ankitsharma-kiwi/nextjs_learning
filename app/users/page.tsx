import React, { useState } from 'react'
import AddToCart from '../Components/AddToCart'
import Link from 'next/link'
import UserTable from './UserTable'

interface UserPageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

const page = async ({ searchParams }: UserPageProps) => {
  return (
    <>
      <AddToCart />
      <h1>Users Table</h1>
      <UserTable searchParams={searchParams} />
    </>
  )
}

export default page
