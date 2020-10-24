import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import {
	Typography,
	makeStyles,
	LinearProgress,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@material-ui/core';

interface HistoryData {
	title: string | null;
	date: string | null;
	details: string | null;
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

const useStyles = makeStyles((theme) => ({
	root: {
		margin: 0,
	},

	header: {
		border: '3px solid black',
		borderRadius: '40% 60%',
	},

	accordion: {
		border: '2px solid black',
		boxShadow: 'none',

		'&:not(:lasthild-c)': {
			borderBottom: 0,
		},

		'&:before': {
			display: 'none',
		},

		'&$expanded': {
			margin: 'auto',
		},

		accordionSummary: {
			margin: '2px',
		},

		accordionDetails: {
			padding: '3px 3px',
		},
	},
}));

const History: React.FC = () => {
	const { data, loading, error } = useQuery<HistoryState>(HISTORY_QUERY);
	const [toggle, setToggle] = useState<String>('close');
	const classes = useStyles();

	const handleToggle = (): void => {
		setToggle(toggle ? 'close' : 'open');
	};

	return (
		<div className={classes.root}>
			<Typography className={classes.header} variant="h4">
					Space-X Historic MileStone Timeline
					</Typography>
			{loading && <LinearProgress />}
			{error && <Typography variant="h4">error occured</Typography>}
			{data && (
				<ul>
          {data.history.map((item, idx) => {
            console.log(item)
						return (
							<li
								key={idx}
								onChange={handleToggle}
							>
								<Accordion
								square
								expanded={toggle === 'open'}
							>
								<AccordionSummary>
									{item.title}: {item.date}{' '}
								</AccordionSummary>
								<AccordionDetails>
									<Typography>{item.details}</Typography>
								</AccordionDetails>
							</Accordion>
							</li>
							
						);
					})}
					</ul>
			)}
			{/* <section>
        {loading && <h4>loading...</h4>}
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
        {error && <h4>{error} error has occured: please refresh! </h4>}
      </section> */}
		</div>
	);
};

export default History;
