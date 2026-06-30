import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import Rating from "../components/Rating";
import { FaArrowLeft } from "react-icons/fa";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import Message from "./Message";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { id: productId } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  console.log(error);

  // if (!product) return <h2>No Product Found</h2>;

  return (
    <div className="space-y-10">
      <button onClick={() => navigate(-1)} className="btn btn-border-reveal">
        <FaArrowLeft />
        Go Back
      </button>

      {isLoading ? (
        <Loading />
      ) : error ? (
        <Message variant={"alert-error"}>
          {error?.message || error?.error}
        </Message>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image */}
            <div className="lg:col-span-5">
              <img
                src={product?.image}
                alt={product?.name}
                className="w-full rounded-lg"
              />
            </div>

            {/* Details */}
            <div className="product-details lg:col-span-4 space-y-4">
              <h2 className="text-2xl">{product?.name}</h2>

              <div className="divider"></div>

              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />

              <div className="divider"></div>

              <h3 className="text-2xl text-primary">
                Price: $ {product.price}
              </h3>

              <div className="divider"></div>

              <p>{product.description}</p>
            </div>

            {/* Cart */}
            <form className="lg:col-span-3 space-y-4 shadow rounded-md p-5 border border-base-300 h-fit">
              <div className="flex items-center justify-between">
                <p>
                  <strong>Price:</strong>
                </p>
                <span>$ {product.price}</span>
              </div>

              <div className="divider"></div>

              <div className="flex items-center justify-between">
                <p>
                  <strong>Status:</strong>
                </p>
                <span
                  className={
                    product.countInStock > 0
                      ? "font-semibold badge badge-success"
                      : "font-semibold badge badge-error"
                  }
                >
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              <div className="divider"></div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <label className="label">Qty:</label>
                <input
                  type="number"
                  placeholder="Enter Order Qty"
                  className="input w-full"
                />
              </div>

              <div className="divider"></div>

              <button type="submit" className="btn btn-border-reveal w-full">
                Add to Cart
              </button>
            </form>
          </div>

          {/* REVIEWS */}
          <div className="review-section w-1/2 max-w-1/2 space-y-4">
            <h2 className="bg-gray-200 p-2 rounded-md text-lg">Reviews</h2>

            {/* REVIEWER DETAILS */}
            <div className="reviewer-details px-5">
              <h3>Fazle Rabbi Rayhan</h3>
              <p>5 Star</p>
              <p>Review Date</p>
              <p>Comment: e.g. 'This is a great product'</p>
            </div>

            <div className="divider"></div>

            <form>
              <h2 className="bg-gray-200 p-2 rounded-md text-lg">
                Write a customer review
              </h2>

              <fieldset className="fieldset">
                <label className="label">Rating</label>
                <select defaultValue="Select..." className="select w-full">
                  <option disabled={true}>Select...</option>
                  <option>1 Star</option>
                  <option>2 Star</option>
                  <option>3 Star</option>
                  <option>4 Star</option>
                  <option>5 Star</option>
                </select>

                <label className="label">Comment</label>
                <textarea className="textarea w-full"></textarea>
                <button type="submit" className="btn btn-border-reveal w-30">
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
