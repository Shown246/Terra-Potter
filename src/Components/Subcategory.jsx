import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Subcategory = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [subcategories, setSubcategories] = useState([]);
  useEffect(() => {
    fetch("https://ph-assignment10-server-omega.vercel.app/subcategories")
      .then((res) => res.json())
      .then((data) => {
        setSubcategories(data);
        setLoading(false);
      });
  }, []);
  const subcategoriesData = subcategories.slice(0, 6);
  return (
    <div className="mb-16 mt-20">
      {
        loading ? <div className="flex justify-center"><span className="loading loading-dots loading-lg "></span></div> :
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {subcategoriesData.map((subcategory) => (
          <div key={subcategory._id} className="flex justify-center">
            <button className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl"
              onClick={() =>
                navigate(`/subcategories/${subcategory._id}`)
              }
            >
                  <img
                    className="w-full h-64 object-cover"
                    src={subcategory.image}
                    alt={subcategory.subcategory_name}
                  />
                  <div className="uppercase tracking-wide text-lg mt-4 text-indigo-500 font-semibold">
                    {subcategory.subcategory_name}
                  </div>
                  <p className="mt-2 overflow-hidden line-clamp-1">
                    {subcategory.origins}
                  </p>
              <div className="p-4">
                <p className="mt-2 overflow-hidden line-clamp-2">
                  {subcategory.key_elements}
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>}
    </div>
  );
};

export default Subcategory;
