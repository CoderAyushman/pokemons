import axios from "axios";
import React, { useEffect, useState } from "react";
import "./../App.css";
import Card from "./Card";

const FetchData = () => {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data?.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleData = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <main>
      <div className="search-bar-conatainer">

        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </div>
      <div className="card-container">

        {filteredData &&
          filteredData.map((v, i) => {
            return (
              <div key={i}>
                <Card value={v} />
              </div>
            );
          })}
      </div>
    </main>
  );
};

export default FetchData;
