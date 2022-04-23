import HistoryCard from "./historyCard";
import { useSelector } from "react-redux";
function History() {
  const account = useSelector((state) => state.account)

  return (
    <div className="px-auto">
      <h3>Daily Record</h3>
      {/* {account.name} */}
      {account.records.map(rec => (
        <HistoryCard date={rec.date} distance={rec.distance}/>
      ))}
    </div>
  )
}

export default History;