import { notFound } from 'next/navigation'
import React from 'react'

interface UserDetailsProps {
  params: {
    id: number
  }
}

const UserDetails = ({ params: { id } }: UserDetailsProps) => {
  if (id > 10) notFound()
  return <div>UserDetails {id}</div>
}

export default UserDetails
