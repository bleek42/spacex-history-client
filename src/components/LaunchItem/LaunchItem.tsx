import React from 'react'

type LaunchItemProps = {
  mission: string | null,
  year: string | null,
  date: string | null,
  success: boolean | null
}

const LaunchItem: React.FC<LaunchItemProps> = ({ mission, year, date, success }) => {
  return (
    <div>
      <h5>{mission}</h5>
      <p>{year}</p>
      <p>{date}</p>
      <p>{success}</p>
    </div>
  )
}

export default LaunchItem
