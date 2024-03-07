export default function Card(props) {
  const cardColor = [
    "#07d9a4",
    "#5d51ff",
    "#20a1aa",
    "#679be5",
    "#457d48",
    "#300024",
    "#ad3760",
    "#5a447c",
    "#447c52",
    "#7c6e44"
  ];
  
  const fetchResidents = async (e) => {
    props.setIsLoading(true);
    props.setResidentData(null);
    document.querySelector(".resident-overlay").style.display = "flex";
    document.querySelector(".pagination").style.display = "none";
    window.scrollTo(0, 0);
    try {
      const fetchDataPromises = [];

      props.data.residents.forEach((url) => {
        fetchDataPromises.push(fetch(url).then((response) => response.json()));
      });

      const results = await Promise.all(fetchDataPromises);

      props.setResidentData(results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    props.setIsLoading(false);
  };

  return (
    <>
      <style>
        {`
          .${props.uniqueClass}:before {
            background: linear-gradient(to bottom right, ${
              cardColor[Math.floor(Math.random() * 10)]
            }, ${cardColor[Math.floor(Math.random() * 10)]});
          }

          .${props.uniqueClass} button {
            background: linear-gradient(to bottom right, ${
              cardColor[Math.floor(Math.random() * 10)]
            }, ${cardColor[Math.floor(Math.random() * 10)]});
          }
        `}
      </style>
      <section className="product-container product-1">
        <div className={`card ${props.uniqueClass}`}>
          <div className="content">
            <div className="title">{props.data.name}</div>
            <div className="feature">
              <p>
              🌍CLIMATE-:<span>{props.data.climate}</span>
              </p>
              <p>
              👩🏾‍🤝‍👨🏻POPULATION-:<span>{props.data.population}</span>
              </p>
              <p>
              🏞TERRAIN-:<span>{props.data.terrain}</span>
              </p>
              {props.data.residents.length ? (
                <button className ="redirect-button" onClick={fetchResidents}>
                  <p>Residents</p>
                  <img src="./redirect.svg" alt="redirect" />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
