import * as React from 'react';
import { Link } from "react-router-dom";
import { Entry, hardcodedData } from './hardcodedData';

const Entry: React.SFC<{ entry: Entry }> = ({ entry }) => {
  return (
    <>
      <b>{entry.date.toString()}</b>
      &mdash;
      <Link to={`/${entry.slug}`}>{entry.title}</Link>
    </>
  );
};

export const App: React.SFC = () => {
  return (
    <>
      <h1>{hardcodedData.name}'s Self</h1>
      <ul>
        {hardcodedData.entries.map(entry => (
          <li key={entry.slug}>
            <Entry entry={entry}/>
          </li>
        ))}
      </ul>
    </>
  );
};

