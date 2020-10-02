import React from 'react';
import { useQuery, gql } from '@apollo/client';

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

const History: React.FC = () => {
  const { data, loading } = useQuery<HistoryState>(HISTORY_QUERY);

  return (
    <div>
      <header>
        <h1>SpaceX Historic milestones</h1>
      </header>
      <div>
        <section>
          {loading ? ( <h4>loading...</h4>
         ) : ( <ul>
            {data.history.map(item => (
              <li>{item.title}</li>
            ))}
            </ul>)}
        </section>
      </div>
    </div>
  )
}

export default History;
