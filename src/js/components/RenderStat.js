import React from "react";
import Card from "./Card";
import Formater from "../utils/Formater";

const RenderStat = ({ data }) => {
  const {
    totalsasaran,
    vaksinasi1,
    vaksinasi2,
    sasaranvaksinsdmk,
    sasaranvaksinlansia,
    sasaranvaksinpetugaspublik,
    lastUpdate,
  } = data;

  return (
    <main>
      <div className="stats">
        <Card title="Total Sasaran" description={Formater(totalsasaran)} />
        <Card title="Total Vaksin Pertama" description={Formater(vaksinasi1)} />
        <Card title="Total Vaksin Kedua" description={Formater(vaksinasi2)} />
        <Card
          title="Sasaran Vaksin SDMK"
          description={Formater(sasaranvaksinsdmk)}
        />
        <Card
          title="Sasaran Vaksin Lanjut Usia"
          description={Formater(sasaranvaksinlansia)}
        />
        <Card
          title="Sasaran Vaksin Petugas Publik"
          description={Formater(sasaranvaksinpetugaspublik)}
        />
      </div>
      <p className="update">Diperbarui pada {lastUpdate}</p>
    </main>
  );
};

export default RenderStat;
