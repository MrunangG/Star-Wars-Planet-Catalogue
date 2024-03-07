export default function ResidentCard(props) {
  const cardColor = [
    "#805980",
    "#5B6D91",
    "#51827A",
    "#311147",
    "#727F55",
    "#975555",
    "#2981CA",
    "#F4CF3E",
    "#6e7c44",
    "#7c6e44"
  ];

  return (
    <>
      <style>
        {`
          .${props.uniqueClass} {
            background: linear-gradient(to bottom right, ${
              cardColor[Math.floor(Math.random() * 10)]
            }, ${cardColor[Math.floor(Math.random() * 10)]});
          }
        `}
      </style>
      <div className="resident-card">
        <div className={`profile-image ${props.uniqueClass}`}></div>
        <div className="user-details">
          <p className="resident-name">{props.data.name}</p>
          <div className="resident-mes">
            <div className="resident-height">
              <p>📏HEIGHT</p>
              <p>{props.data.height}</p>
            </div>
            <div className="resident-mass">
              <p>🟰MASS:-</p>
              <p>{props.data.mass}</p>
            </div>
          </div>
          <p className="resident-gender">
          🚻GENDER-: <span>{props.data.gender}</span>
          </p>
        </div>
      </div>
    </>
  );
}
