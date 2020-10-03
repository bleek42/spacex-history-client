import React from 'react';
import { useQuery, gql } from '@apollo/client';

import LaunchItem from '../LaunchItem/LaunchItem';

interface LaunchData {
  flightNum: number | null;
  mission: string | null;
  year: string | null;
  date: string | null;
  success: boolean | null;
}

interface LaunchesState {
  launches: LaunchData[]
}

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches: React.FC = () => {
  const { data, loading } = useQuery<LaunchesState>(LAUNCHES_QUERY);

  return (
		<div>
			<header>
				<h1>SpaceX Launches</h1>
			</header>
			{loading ? (
				<h4>loading...</h4>
			) : (
				<div>
					{data.launches.map((item) => (
						console.log(item)
						// <LaunchItem
						// 	key={item.flightNum}
						// 	flightNum={item.flightNum}
						// 	mission={item.mission}
						// 	year={item.year}
						// 	date={item.date}
						// 	success={item.success}
						// />
					))}
				</div>
			)}
		</div>
	);
}

export default Launches
