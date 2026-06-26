import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/products");
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const truncateText = (text, limit = 25) => {
    if (text.length <= 25) return text;
    return text.slice(0, limit) + "...";
  };

  return (
    <section className="py-20">
      <h2 className="section-title mb-10">Latest Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="rounded-md shadow overflow-hidden bg-base-100 hover:shadow-lg transition-shadow duration-300 "
          >
            <Link to={`/product/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-md p-4"
              />
            </Link>

            <div className="p-5 space-y-3">
              <Link
                to={`/product/${product._id}`}
                className="hover:text-primary transition-colors"
              >
                <h3 className="font-semibold text-lg line-clamp-2 underline text-ellipsis">
                  {truncateText(product.name)}
                </h3>
              </Link>

              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />

              <p className="text-xl font-bold text-primary">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
