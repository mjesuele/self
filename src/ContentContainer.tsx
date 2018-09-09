import * as React from "react";
import { Link } from "react-router-dom";
import { Entry } from "./hardcodedData";
import { EntryRepo, IEntryRepo } from "./repositories/entryRepo";

type ContentContainerProps = { slug: string; entryRepo?: IEntryRepo };
type ContentContainerState = { entry?: Entry; entryRepo: IEntryRepo };

export class ContentContainer extends React.Component<
  ContentContainerProps,
  ContentContainerState
> {
  public constructor(props: ContentContainerProps) {
    super(props);
    this.state = {
      entryRepo: props.entryRepo || new EntryRepo(),
    };
  }

  public componentDidMount() {
    this.setState(state => ({
      ...state,
      entry: this.state.entryRepo.getEntryBySlug(this.props.slug),
    }));
  }

  public render() {
    if (!this.state.entry) {
      return <p>No entry found at that URL</p>;
    }

    return <Content entry={this.state.entry} />;
  }
}

export const Content: React.SFC<{ entry: Entry }> = ({ entry }) => {
  const { images, text } = entry.content;
  return (
    <>
      <header>
        <Link to="/">Back</Link>
      </header>
      <h1>{entry.title}</h1>
      {text && <p>{text}</p>}
      {images && images.map(img => <img key={img} src={img} />)}
    </>
  );
};
