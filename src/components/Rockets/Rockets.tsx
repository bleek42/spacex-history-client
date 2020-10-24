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

  return (
    <div>
      <header>
        <h4>SpaceX Rockets</h4>
      </header>
      <section>
        {loading && <h4>loading rockets...</h4>}
        {error && (
          <>
            <h4>{error}</h4>
            <p>something went wrong... please refresh or contact an admin.</p>
          </>
        )}
        {data && (
          <>
            <ul>
              {data.rockets.map((item, idx) => (
                <li key={idx}>
                  <h4>{Object.values(item)}</h4>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </div>
  );
};

export default Rockets;
