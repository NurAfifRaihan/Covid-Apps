
import Card from "./global.module";

function GlobalCard(props) {
    const { status, total } = props;

    return (
      <Card className={status.toLowerCase()}>
          <p>{status}</p>
          <h2>{total}</h2>
      </Card>
    );
}

export default GlobalCard;
