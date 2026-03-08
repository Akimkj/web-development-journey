import { Summary } from "../components/Summary";
import Trasactions from "../components/Transactions/Transactions";

export default function Home() {
  return (
    <div>
      <Summary/>
      <Trasactions type={"outcome"}/>
    </div>
  );
}
