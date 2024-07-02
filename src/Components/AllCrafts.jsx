import { useLoaderData, useNavigate } from "react-router-dom";

const AllCrafts = () => {
  const crafts = useLoaderData();
  const navigate = useNavigate();
  let count = 1;
  return (
    <div className="container90 mt-20">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-base lg:text-lg font-semibold text-lbr">User Name</th>
              <th className="text-base lg:text-lg font-semibold text-lbr">Item Name</th>
              <th className="text-base lg:text-lg font-semibold text-lbr">Subcategory</th>
              <th className="text-base lg:text-lg font-semibold text-lbr">Price</th>
              <th className="text-base lg:text-lg font-semibold text-lbr">Rating</th>
              <th className="text-base lg:text-lg font-semibold text-lbr">Stock Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              crafts.map((item) => (
                <tr key={item._id}>
                  <td className="font-medium text-sm lg:text-base">{count++}</td>
                  <td className="font-medium text-sm lg:text-base">{item.name}</td>
                  <td className="font-medium text-sm lg:text-base">{item.item_name}</td>
                  <td className="font-medium text-sm lg:text-base">{item.subcategory_name}</td>
                  <td className="font-medium text-sm lg:text-base">${item.price}</td>
                  <td className="font-medium text-sm lg:text-base">{item.rating}</td>
                  <td className="font-medium text-sm lg:text-base">{item.stock_status}</td>
                  <td>
                  <button className="px-4 py-1 rounded-lg hover:text-dbr hover:bg-skin text-white bg-dbr lg:text-lg text-xs"
                    onClick={() => {
                      navigate(`/details/${item._id}`);
                    }}
                  >View Details</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCrafts;
