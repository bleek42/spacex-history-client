import React from 'react';
import { useQuery, gql } from '@apollo/client';

interface RocketsData {
	id: string | null;
	name: string | null;
	type: string | null;
}

interface RocketsState {
	rockets: RocketsData[];
}

const ROCKETS_QUERY = gql`
	query RocketsQuery {
		rockets {
			rocket_id
			rocket_name
			rocket_type
		}
	}
`;

const Rockets: React.FC = () => {
	const { data, loading, error } = useQuery<RocketsState>(ROCKETS_QUERY);
	console.log(error);

	return (
		<div>
			<header>
				<h4>SpaceX Rockets</h4>
			</header>
			<section>
				{loading && (
					<h4>loading rockets...</h4>
				)}
				{error && (
					<>
						<h4>{error}</h4>
						<p>something went wrong... please refresh or contact an admin.</p>
					</>
				)}
				{data && (
					<>
						<ul>
							{data.rockets.map((item, idx) => {
								// const values = Object.values(item)
								return (
									<li key={idx}>
										<h4>{Object.values(item)}</h4>
									</li>
								)
							})}
						</ul>
					</>
				)}
			</section>
		</div>
		// <div>
		// 	<header>
		// 		<h3>SpaceX Rockets</h3>
		// 	</header>
		// 	{loading ? (
		// 		<h4>loading...</h4>
		// 	) : (
		// 		<ul>
		// 				{data.rockets.map((item, idx) => {
		// 					console.log(item.id);
		// 				return (
		// 					<li key={idx}>
		// 						<h5>{item.name}</h5>
		// 						<p>{item.id}</p>
		// 						<p>{item.type}</p>
		// 					</li>
		// 				);
		// 			})}
		// 		</ul>
		// 	)}
		// </div>
	);
};

export default Rockets;
