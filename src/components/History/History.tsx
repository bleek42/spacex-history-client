import React from 'react';
import { useQuery, gql } from '@apollo/client';

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
		<div>
			<header>
				<h1>SpaceX Historic milestones</h1>
			</header>
			<div>
				<section>
					{loading && (
						<h4>loading...</h4>
					)}
					{data && (
						<ul>
							{data.history.map((item, idx) => (
								<li key={idx}>
									<h4>{item.title}</h4>
									<p>{item.date}</p>
									<details>
										<summary>
											{item.details}
										</summary>
									</details>
								</li>
							))}
						</ul>
					)}
					{/* {loading ? (
						<h4>loading...</h4>
					) : (
						<ul>
							{data.history.map((item, idx) => (
								<li key={idx}>
									<h5>{item.title}</h5>
									<p>{item.date}</p>
									<p>{item.details}</p>
								</li>
							))}
						</ul>
					)} */}
				</section>
			</div>
		</div>
	);
};

export default History;
