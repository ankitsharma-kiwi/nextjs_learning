import React from 'react'

interface PhotoPageProps {
  params: {
    photoid: string
    id: string
  }
}

const PhotoDetailsPage = ({ params: { photoid, id } }: PhotoPageProps) => {
  return <div>PhotoDetailsPage {photoid} {id}</div>
}

export default PhotoDetailsPage
