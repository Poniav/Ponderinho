import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import {
  FormattedMessage,
  FormattedDate,
  FormattedNumber,
  FormattedPlural,
  FormattedTime,
} from "react-intl";

export default function Game() {
  return (
    <Container>
      <Helmet>
        <title>Games | Ponderinho</title>
      </Helmet>
      <main style={{ padding: "1rem 0" }}>
        <h2>Game</h2>
        <FormattedMessage
          id="app.channel.plug"
          defaultMessage="Tutorial brought to you by Lokalise"
        />
      </main>
    </Container>
  );
}
