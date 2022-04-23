import HistoryCard from "./historyCard";
import { useSelector } from "react-redux";
function History() {
  const profile = useSelector((state) => state.profile)

  return (
    <div className="px-auto">
      <h3>Daily Record</h3>
      {/* {account.name} */}
      {profile.records.map(rec => (
        <HistoryCard date={rec.date} distance={rec.distance}/>
      ))}
    </div>
  )
}

export default History;