import React from 'react'

interface UserDetailsProps {
  params: {
    id: string
  }
}

const UserDetails = ({ params: {id} }: UserDetailsProps) => {
  return <div>UserDetails {id}</div>
}

export default UserDetails
