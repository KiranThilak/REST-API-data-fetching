import React from "react";
import Row from "./Row";

const Table = ({ items }) => {
  return (
    <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
      <tbody>
        {items.map((item) => (
          <Row key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
