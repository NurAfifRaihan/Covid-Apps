
import Card from "./benua.module";

function BenuaCard(props) {
    const { status, total } = props;

    return (
      <Card className={status.toLowerCase()}>
          <p>{status}</p>
          <h2>{total}</h2>
      </Card>
    );
}

export default BenuaCard;
