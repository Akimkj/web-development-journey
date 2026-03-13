import { Summary } from "../components/Summary";
import Transactions from "../components/Transactions/Transactions";
import { Header } from "../components/Header/Header";
export default function Home() {
  return (
    <div>
      <Header/>
      <Summary/>
      <Transactions/>
    </div>
  );
}
