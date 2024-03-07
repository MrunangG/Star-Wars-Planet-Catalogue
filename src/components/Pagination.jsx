export default function Pagination(props) {
  return (
    props.data && (
      <div className="pagination">
        <div
          className="previous"
          onClick={() => props.fetchData(props.data.previous)}
        >
          <img src="./light-saber-left.svg" alt="previous" />
        </div>
        <div className="next" onClick={() => props.fetchData(props.data.next)}>
          <img src="./light-saber-right.svg" alt="next" />
        </div>
      </div>
    )
  );
}
