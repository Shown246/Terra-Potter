import { useLoaderData } from "react-router-dom";

const Details = () => {
  const item = useLoaderData();
  console.log(item);
  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-4xl mx-auto  p-8 rounded-md shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={item.image} alt={item.item_name} className="w-full h-auto mb-8 rounded-md" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">{item.item_name}</h2>
            <p className="text-lg font-semibold mb-4">{item.subcategory_name}</p>
            <p className="text-sm mb-4">{item.short_description}</p>
            <p className="text-lg font-bold mb-4">${item.price}</p>
            <p className="text-lg mb-4"><span className="font-semibold text-lg">Rating: </span>{item.rating}</p>
            <p className="text-lg mb-4"><span className="font-semibold text-lg">Customization: </span> {item.customization}</p>
            <p className="text-lg mb-4"><span className="font-semibold text-lg">Processing Time: </span>{item.processing_time}</p>
            <p className="text-lg mb-4"><span className="font-semibold text-lg">Stock Status: </span>{item.stock_status}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details