import { useEffect, useState } from "react";
import axios from "axios";
import Histogram from "../components/histogram/Histogram";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<number[]>([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new"
      );

      const arr = res.data
        .replace(/\n/g, ",")
        .split(",")
        .map((str: string) => parseInt(str, 10));

      setData(arr);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div data-testid="home-page">
      <h3>Data fetching and visualization</h3>
      {!loading && <Histogram data={data} />}
      <p>by Ryan Boros</p>
    </div>
  );
};

export default Home;
