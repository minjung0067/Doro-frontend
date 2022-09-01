import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center"
      style={{ minWidth: "106.667rem" }}
    >
      <Helmet>
        <title>Not Found | Nuber Eats</title>
      </Helmet>
      <h2 className="font-semibold text-3xl mb-3">Page Not Found.</h2>
      <h4 className="font-medium text-base mb-5">
        The page you're looking for does not exist or has moved.
      </h4>
      <Link className="hover:underline text-blue-700" to="/">
        Go back home &rarr;
      </Link>
    </div>
  );
};
