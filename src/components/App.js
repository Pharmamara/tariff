import React from "react";
import "./App.css";
import Card from "./card";

function App() {
  const TARIFF = [
    {
      label: "tariff1",
      style: { background: "#9ffceb" },
      name: "Безлимитный 300",
      price: "руб 300 /мес",
      speed: "до 10 МБит/сек",
      description: "объем включенного трафика не ограничен",
    },
    {
      label: "tariff2",
      style: { background: "#9ffca8" },
      name: "Безлимитный 450",
      price: "руб 400 /мес",
      speed: "до 50 МБит/сек",
      description: "объем включенного трафика не ограничен",
    },
    {
      label: "tariff3",
      style: { background: "#fc9fa5", width: "30vw", height: "30vw" },
      name: "Безлимитный 550",
      price: "руб 550 /мес",
      speed: "до 100 МБит/сек",
      description: "объем включенного трафика не ограничен",
    },
    {
      label: "tariff4",
      style: { background: "#666" },
      name: "Безлимитный 1000",
      price: "руб 1000 /мес",
      speed: "до 200 МБит/сек",
      description: "объем включенного трафика не ограничен",
    },
  ];

  /*return (
    <div className="App">
      {TARIFF.map((entry, index) => (
        <Card {...entry} key={index} />
      ))}
    </div>
  );*/

  return (
    <div className="App">
      {TARIFF.map((entry, index, TARIFF) => (
        <Card {...entry} key={index} style={TARIFF.style} />
      ))}
    </div>
  );
}

export default App;
