import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [trip, setTrip] = useState([]);
  const [findTrip, setFindtrip] = useState("");

  const getTrips = async () => {
    try {
      if (findTrip !== "") {
        const result = await axios.get(
          `http://localhost:4001/trips?keywords=${findTrip}`
        );
        console.log(result);
        // setBook(result.data.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrips();
  }, [findTrip]);

  // const Ttips = () => {
  //   if (findTrip) {
  //     return book.map((data, index) => (
  //       <li key={index}>{data.volumeInfo.title}</li>
  //     ));
  //   } else {
  //     return null;
  //   }
  // };
  return (
    <div className="App">
      <h1>เที่ยวไหนดี</h1>
      <div>
        <p>ค้นหาที่เที่ยว</p>

        <section className="wrapper-detail">
          {/* map ตรงนี้ */}
          <div className="find-tourist-attraction">
            <input
              type="text"
              placeholder="หาที่เที่ยวแล้วไปกัน ..."
              value={findTrip}
              onChange={(event) => {
                setFindtrip(event.target.value);
              }}
            ></input>

            <hr />
          </div>
          {/* <div>{Ttips()}</div> */}
          <div className="detail-card">
            <img className="image-tourist-attraction" src="" />
            <div className="description-tourist-attraction"></div>
          </div>
          {/* หกดเ้่าส */}
        </section>
      </div>
    </div>
  );
}

export default App;
