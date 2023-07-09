import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <tr className="Log">
      <td>
        {log.mistakesWereMadeToday ? (
          <span>💥</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={`/logs/${index}`} >
          {log.captainName}
        </a>
      </td>
      <td>
{/* This was updated 7.8.23 */}
        {/* <Link to={`/logs/${index}`}>✏️</Link> */}
        <Link to={`/logs/${index}`}>{log.title}</Link>
      </td>
    </tr>
  );
}

export default Log;
