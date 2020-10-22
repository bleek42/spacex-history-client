import React from "react";
import { useQuery, gql } from "@apollo/client";
import {
  AppBar,
  GridList,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  LinearProgress,
} from "@material-ui/core";

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

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 2,
  },

  header: {
    border: "3px solid black",
    borderRadius: "20% 60%",
  },

  gridList: {
    width: 800,
    height: 650,
  },
}));

const History: React.FC = () => {
  const { data, loading, error } = useQuery<HistoryState>(HISTORY_QUERY);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant="h4">
        Space-X Historic MileStone Timeline
      </Typography>

      {loading && <LinearProgress />}
      {error && <Typography variant="h4">error occured</Typography>}
      {data && (
        <GridList cellHeight={400} cols={3} className={classes.gridList}>
          {data.history.map((item, idx) => (
            <GridListTile key={idx}>
              <img alt="history-img" />
              <GridListTileBar
                title={item.title}
                subtitle={<span>by: {item.date}</span>}
              ></GridListTileBar>
            </GridListTile>
          ))}
        </GridList>
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
