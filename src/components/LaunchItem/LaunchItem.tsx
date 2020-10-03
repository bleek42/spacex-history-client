import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

type LaunchItemProps = {
  flightNum: number | null,
  mission: string | null,
  year: string | null,
  date: string | null,
  success: boolean | null
}

const GET_MISSION = gql`
  query LaunchItemQuery($flightNum: Int!) {
    launch(flight_number: $flightNum) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;

const LaunchItem: React.FC<LaunchItemProps> = ({ flightNum, mission, year, date, success }) => {
  // const [getItem, {called, loading, data }] = useLazyQuery(GET_MISSION, {
  //   variables: {
  //     flightNum
  //   }
  // })

  return (
    <div>
      <header>
        <h4>{flightNum} </h4>
      </header>
    </div>
  )
}

export default LaunchItem
