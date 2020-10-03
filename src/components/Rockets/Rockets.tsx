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
  const { data, loading } = useQuery<RocketsState>(ROCKETS_QUERY)


  console.log(data)
  console.table(data)

  return (
    <div>
      <header>
        <h3>SpaceX Rockets</h3>
      </header>
      {loading ? (
        <h4>loading...</h4>
      ) : (
        <ul>
          {data.rockets.map(item => (
            console.log(item)
        ))}
        </ul>
      )
    }
    </div>
  )
}

export default Rockets
