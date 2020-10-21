import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { } from '@material-ui/core';

import LaunchItem from '../LaunchItem/LaunchItem';

interface LaunchData {
	flightNum: number | null;
	mission: string | null;
	year: string | null;
	date: any | null;
	success: boolean | null;
}

interface LaunchesState {
	launches: LaunchData[];
}

const LAUNCHES_QUERY = gql`
	query LaunchesQuery {
		launches {
			flight_number
			mission_name
			launch_year
			launch_date_local
			launch_success
		}
	}
`;

const Launches: React.FC = () => {
	const { data, loading, error } = useQuery<LaunchesState>(LAUNCHES_QUERY);

	return (
		<div>
			<header>
				<h1>SpaceX Launches</h1>
			</header>
			{loading && <h4>loading...</h4>}
			{data && (
				<section>
					{data.launches.map((item, idx) => {
						const values = Object.values(item);
						console.log(values[0])
						return (
							<LaunchItem
								flightNum={values[0]}
								mission={values[1]}
								year={values[2]}
								date={values[3]}
								success={values[4]}
							/>
						);
					})}
				</section>
			)}
			{error && <h4>{error} has occured...</h4>}
		</div>
	);
};

export default Launches;
