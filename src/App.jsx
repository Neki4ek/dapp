import { ethers } from "ethers";
import './App.css';
import BalanceReader from "./BalanceReader";
import BlockExplorer from "./BlockExplorer";
import VendingMachine from "./VendingMachine";

const providerUrl = 'https://sepolia.drpc.org';
const provider = new ethers.JsonRpcProvider(providerUrl);
const network = await provider.getNetwork();
function App() {
console.log(network);
return (
<>
  <VendingMachine provider={provider}/>
</>
)
}
export default App;
