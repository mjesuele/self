import * as React from 'react';
import { Link } from "react-router-dom";
import data, { Entry } from './hardcodedData';

const Entry: React.SFC<{ entry: Entry }> = ({ entry }) => {
  return (
    <>
      <b>{entry.date.toString()}</b>
      &mdash;
      <Link to={`/${entry.slug}`}>{entry.title}</Link>
    </>
  );
};

const App: React.SFC = () => {
  return (
    <>
      <h1>{data.name}'s Self</h1>
      <ul>
        {data.entries.map(entry => (
          <li key={entry.slug}>
            <Entry entry={entry}/>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
