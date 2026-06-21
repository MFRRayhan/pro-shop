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

  console.log(products);

  return (
    <section className="py-20">
      <h2 className="text-4xl mb-10">Latest Products</h2>

      <div className="grid grid-cols-4 gap-10">
        {products.map((product) => (
          <div key={product._id} className="p-5 rounded-md shadow space-y-3">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-md"
            />
            <Link to={`/product/${product._id}`}>
              <h2 className="underline">{product.name}</h2>
            </Link>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            ></Rating>
            <p className="text-xl font-semibold text-gray-500">
              $ {product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
