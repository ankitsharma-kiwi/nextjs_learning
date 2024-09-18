import React, { useState } from 'react'
import AddToCart from '../Components/AddToCart'
import Link from 'next/link'
import UserTable from './UserTable'

interface User {
  id: number
  name: string
  email: string
}

interface UserPageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

const page = async ({ searchParams }: UserPageProps) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' })
  const data: User[] = await res.json()

  return (
    <>
      <AddToCart />
      <h1>Users Table</h1>
      <UserTable data={data} searchParams={searchParams} />
    </>
  )
}

export default page
