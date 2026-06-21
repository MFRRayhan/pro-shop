import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function Rating({ value = 0, text }) {
  return (
    <div className="flex items-center gap-1 text-yellow-500 mt-3">
      {[1, 2, 3, 4, 5].map((num) => (
        <span key={num}>
          {value >= num ? (
            <FaStar />
          ) : value >= num - 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
      ))}

      {text && <span className="ml-2 text-gray-600 text-sm">{text}</span>}
    </div>
  );
}
