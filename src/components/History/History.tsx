import React, { useState } from "react";
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
  root: {},

  header: {
    border: "3px solid black",
    borderRadius: "40% 60%",
  },

  accordion: {
    border: "2px solid black",
    boxShadow: "none",

    "&:not(:lasthild-c)": {
      borderBottom: 0,
    },

    "&:before": {
      display: "none",
    },

    "&$expanded": {
      margin: "auto",
    },

    accordionSummary: {
      margin: "2px",
    },

    accordionDetails: {
      padding: "3px 3px",
    },
  },
}));

const History: React.FC = () => {
  const { data, loading, error } = useQuery<HistoryState>(HISTORY_QUERY);
  const [toggle, setToggle] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      
      {loading && <LinearProgress />}
      {error && <Typography variant="h4">error occured</Typography>}
      {data && (
        <Typography className={classes.header} variant="h4">
        Space-X Historic MileStone Timeline
          {data.history.map((item, idx) => {
            return (
              <Accordion
                key={idx}
                square
                expanded={toggle ? true : false}
                // onClick={(ev) => setToggle(true)}
              >
                <AccordionSummary>{item.title}: {item.date} </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.details}</Typography>
                </AccordionDetails>
              </Accordion>
            );
            // <GridListTile key={idx}>
            //   <img alt="history-img" />
            //   <GridListTileBar
            //     title={item.title}
            //     subtitle={<span>by: {item.date}</span>}
            //   ></GridListTileBar>
            // </GridListTile>
          })}
        </Typography>
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
