import * as React from 'react';
import { EntryParams } from './repositories/entryRepo';

type AddEntryProps = {
  addEntry: (entry: EntryParams) => boolean,
};

type AddEntryState = {
  title: string | null,
  date: string | null,
  content: {
    text: string | null,
    images: string[],
  },
};

const initialState: AddEntryState = {
  title: null,
  date: null,
  content: {
    text: null,
    images: [],
  },
};

export class AddEntryForm extends React.Component<AddEntryProps, AddEntryState> {
  constructor(props: AddEntryProps) {
    super(props);
    this.state = initialState;
  }

  public render() {
    return (
      <form onSubmit={this.submitForm}>
        <input name="title" placeholder="Title" onChange={this.update} />
        <input type="date" name="date" onChange={this.update} />
        <input type="submit" value="Add Entry" disabled={!this.isValidEntry()} />
      </form>
    );
  }

  private update = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    this.setState(state => ({
      ...state,
      [name]: value,
    }));
  }

  private submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = {
      ...this.state,
      date: new Date(this.state.date as string),
    } as EntryParams;
    console.log(this.props.addEntry(params));
  }

  private isValidEntry = () => {
    return !!(this.state.title && this.state.date);
  }
}
