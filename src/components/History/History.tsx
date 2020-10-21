import React from 'react';
import { useQuery, gql } from '@apollo/client';
import {AppBar, Grid, GridList, IconButton, Toolbar, Typography,  } from '@material-ui/core';

interface HistoryData {
	readonly title: string | null;
	readonly date: string | null;
	readonly details: string | null;
}

interface HistoryState {
	history: HistoryData[];
}

const HISTORY_QUERY = gql`
	query HistoryQuery {
		history {
			title
			event_date_utc
			details
		}
	}
`;

const History: React.FC = () => {
	const { data, loading, error } = useQuery<HistoryState>(HISTORY_QUERY);

	return (
		<Grid
			container
			direction="row"
			justify="flex-start"
			alignItems="flex-start"
		>
		
				<Typography variant="h4" >
					Space-X Historic MileStone Timeline
				</Typography>

				<section>
					{loading && (
						<h4>loading...</h4>
					)}
					{data && (
						<ul>
							{data.history.map((item, idx) => (
								<li key={idx}>
									<h4>{item.title}</h4>
									<details>
										<summary>{item.date}</summary>
										<p>{item.details}</p>
									</details>
								</li>
							))}
						</ul>
					)}
					{error && (
						<h4>{error} error has occured: please refresh! </h4>
					)}
				</section>
		</Grid>
	);
};

export default History;
