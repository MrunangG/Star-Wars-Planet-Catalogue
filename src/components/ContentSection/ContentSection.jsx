import { useState } from "react";
import Card from "./Card";
import ResidentCard from "./ResidentCard";

export default function ContentSection(props) {
  const [residentData, setResidentData] = useState();

  return (
    props.data && (
      <section className="content-section">
        {props.data.results.map((item) => (
          <Card
            key={item.name}
            data={item}
            residentData={residentData}
            setResidentData={setResidentData}
            setIsLoading={props.setIsLoading}
            uniqueClass={item.name.split(" ")[0]}
          />
        ))}
        <div className="resident-overlay">
          <div
            className="close"
            onClick={() => {
              document.querySelector(".resident-overlay").style.display =
                "none";
              document.querySelector(".pagination").style.display = "grid";
            }}
          >
            <img src="./close.svg" alt="close" />
          </div>
          <p className="title">RESIDENTS</p>
          <div className="content-section">
            {residentData &&
              residentData.map((item) => (
                <ResidentCard
                  key={item.name}
                  data={item}
                  uniqueClass={item.name.split(" ")[0]}
                />
              ))}
          </div>
        </div>
      </section>
    )
  );
}
