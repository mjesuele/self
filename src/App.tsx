import * as React from 'react';
import { Link } from "react-router-dom";
import { AddEntryForm } from "./AddEntryForm";
import { Entry, hardcodedData } from './hardcodedData';
import { EntryParams, entryRepo } from './repositories/entryRepo';

const dateDisplayOptions = { year: 'numeric', month: 'long', day: 'numeric' };

const Entry: React.SFC<{ entry: Entry }> = ({ entry }) => {
  return (
    <>
      <b>{entry.date.toLocaleDateString("en-US", dateDisplayOptions)}</b>
      &mdash;
      <Link to={`/${entry.slug}`}>{entry.title}</Link>
    </>
  );
};

type AppState = {
  entries: Entry[],
};

export class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      entries: entryRepo.getEntries(),
    };
  }
  public render() {
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
        <AddEntryForm addEntry={this.addEntry} />
      </>
    );
  }
  private addEntry = (entry: EntryParams) => {
    if (entryRepo.addEntry(entry)) {
      this.setState(state => ({
        ...state,
        entries: entryRepo.getEntries(),
      }));
      return true;
    }

    return false;
  }
}
