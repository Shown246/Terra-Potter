import Banner from "./Banner"
import Cards from "./Cards"
import { useLoaderData } from "react-router-dom";
import Subcategory from "./Subcategory";
import Review from "./Review";
import Newsletter from "./Newsletter";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="container90 mt-20">
      <Banner/>
      <Cards data={data}/>
      <Subcategory/>
      <Review/>
      <Newsletter/>
    </div>
  )
}

export default Home