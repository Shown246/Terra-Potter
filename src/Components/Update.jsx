import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const Update = () => {
  const data = useLoaderData();
  const [formData, setFormData] = useState({
    image: data.image,
    item_name: data.item_name,
    subcategory_name: data.subcategory_name,
    short_description: data.short_description,
    price: data.price,
    rating: data.rating,
    customization: data.customization,
    processing_time: data.processing_time,
    stock_status: data.stock_status,
    email: data.email,
    name: data.name,
  });

  const resetForm = () => {
    setFormData({
      image: '',
      item_name: '',
      subcategory_name: '',
      short_description: '',
      price: '',
      rating: '',
      customization: 'Yes',
      processing_time: '',
      stock_status: 'In stock',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch(`https://ph-assignment10-server-omega.vercel.app/crafts/${data._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal({
          title: "Item Updated",
          text: "Item updated successfully",
          icon: "success",
          button: "Ok",
        });
        resetForm();
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: "Error",
          text: "Something went wrong",
          icon: "error",
          button: "Ok",
        });
      });
  };

  return (
    <>
      <div className="container90">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Update your Art & Craft Item
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Image URL:</label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-bdr"
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Item Name:</label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-bdr"
                type="text"
                name="item_name"
                value={formData.item_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Subcategory Name:
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-bdr"
                name="subcategory_name"
                value={formData.subcategory_name}
                onChange={handleChange}
                required
              >
                <option value="">Select Subcategory</option>
                <option value="Clay Sculpture">Clay Sculpture</option>
                <option value="Stone Sculpture">Stone Sculpture</option>
                <option value="Metal Sculpture">Metal Sculpture</option>
                <option value="Food carving">Food carving</option>
                <option value="Natural Material Sculpture">
                  Natural Material Sculpture
                </option>
                <option value="Beaded Sculpture">Beaded Sculpture</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Short Description:
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-bdr"
                name="short_description"
                value={formData.short_description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Price:</label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-bdr"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Rating:</label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-bdr"
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Customization:
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-bdr"
                name="customization"
                value={formData.customization}
                onChange={handleChange}
                required
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Processing Time:
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-bdr"
                type="text"
                name="processing_time"
                value={formData.processing_time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Stock Status:
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-bdr"
                name="stock_status"
                value={formData.stock_status}
                onChange={handleChange}
                required
              >
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>
            <button
              className="w-full  py-2 px-4 rounded-md  focus:outline-none focus:bg-dbr btn hover:text-dbr hover:bg-skin text-white lg:font-semibold bg-dbr lg:text-lg text-xs"
              type="submit"
            >
              Update Item
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
