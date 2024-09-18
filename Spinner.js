import React from "react";
import loading from "./loading.gif"; // Adjust path if necessary

const Spinner = () => {
  return (
    <div className="text-center">
      <img
        src={loading}
        alt="Loading..."
        style={{ width: "50px", height: "50px" }} // You can adjust size as needed
      />
    </div>
  );
};

export default Spinner;
