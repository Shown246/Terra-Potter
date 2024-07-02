import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Cards = (props) => {
  const { data } = props;
  const crafts = data.slice(0, 6);

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mt-16 mt-8">
        {crafts.map((item) => (
          <Card card={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ card }) => {
  const {_id, image, item_name, subcategory_name, price, rating, stock_status } =
    card;
  const navigate = useNavigate();
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
      <img className="w-full" src={image} alt={item_name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item_name}</div>
        <p className="text-pretty text-base">{subcategory_name}</p>
      </div>
      <div className="pl-6 py-4 flex lg:gap-6 md:gap-4 gap-2">
        <div className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {price} $
        </div>
        <div className="flex items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          <FaStar color="#f59e0b" />
          {rating}
        </div>
        <div className="border border-amber-500 px-2 py-1 rounded-md">{stock_status}</div>
      </div>
      <div className="p-6">
        <button className="btn w-full hover:text-dbr hover:bg-skin text-white lg:font-semibold bg-dbr lg:text-lg text-xs"
          onClick={() => {
            navigate(`/details/${_id}`);
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

Cards.propTypes = {
  data: PropTypes.array.isRequired,
};
Card.propTypes = {
  card: PropTypes.object.isRequired,
};
export default Cards;
