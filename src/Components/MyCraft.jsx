import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContextProvider";
import swal from "sweetalert";

const MyCraft = () => {
  const [crafts, setCrafts] = useState([]);
  const [customization, setCustomization] = useState("");
  const [loading, setLoading] = useState(true);
  const onCustomChange = (e) => {
    const value = e.target.value;
    const query = new URLSearchParams();
    if (value) {
      query.append("customization", value);
    }
    setCustomization(`?${query.toString()}`);
  };
  useEffect(() => {
    fetch(`https://ph-assignment10-server-omega.vercel.app/mycrafts${customization}`)
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [customization]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const myCrafts = crafts.filter((craft) => craft.email === user.email);
  
  const handleUpdate = (itemID) => {
    console.log(itemID);
    navigate(`/update/${itemID}`);
  };

  const handleDelete = (itemId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://ph-assignment10-server-omega.vercel.app/crafts/${itemId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            swal("Poof! Your Craft has been deleted!", {
              icon: "success",
            });
            setCustomization("");
            navigate("/myCraft", { replace: true });
            console.log(customization, "Deleted");
          })
          .catch((err) => {
            console.log(err);
            swal({
              title: "Error",
              text: "Something went wrong",
              icon: "error",
              button: "Ok",
            });
          });
        
      } else {
        swal("Your item is safe!");
      }
    });
  };

  return (
    <>
      <div className="container90 mt-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Items List</h2>
          <div className="flex justify-center mb-8">
            <select
              className="p-2 border border-gray-300 rounded-md"
              onChange={(e) => {onCustomChange(e)}}
            >
              <option value="">Customization</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          {
            loading ? <div className="flex justify-center"><span className="loading loading-dots loading-lg "></span></div> :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myCrafts.length === 0 ? (
              <div className="text-center text-2xl font-semibold">
                You have not added any items yet
              </div>
            ) : (
              myCrafts.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.item_name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {item.item_name}
                    </h3>
                    <p className="text-gray-700 text-sm mb-2">${item.price}</p>
                    <p className="text-gray-700 text-sm mb-2">
                      Rating: {item.rating}
                    </p>
                    <p className="text-gray-700 text-sm mb-2">
                      Customization: {item.customization}
                    </p>
                    <p className="text-gray-700 text-sm mb-2">
                      Stock Status: {item.stock_status}
                    </p>
                    <div className="flex justify-around">
                      <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        onClick={() => handleUpdate(item._id)}
                      >
                        Update
                      </button>
                      <button
                        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>}
        </div>
      </div>
    </>
  );
};

export default MyCraft;
