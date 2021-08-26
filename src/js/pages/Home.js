import React from "react";
import useSWR from "swr";
import RenderStat from "../components/RenderStat";
import Fetcher from "../utils/Fetcher";

export const Home = () => {
  const { data, error } = useSWR(
    "https://vaksincovid19-api.vercel.app/api/vaksin",
    Fetcher
  );
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (!data) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <div className="container">
      <header>
        <h1>Vaksin Indonesia</h1>
      </header>
      {isLoading && <h2>Memuat Data.</h2>}
      {error && <h2>Terjadi kesalahan, harap muat ulang halaman.</h2>}
      {data && <RenderStat data={data} />}
    </div>
  );
};
