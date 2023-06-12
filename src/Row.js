import React from "react";
import Cell from "./Cell";

const Row = ({ item }) => {
  return (
    <>
      {/*     <tr class="text-left border-b-2 border-gray-300">
        <th class="px-4 py-3">Firstname</th>
        <th class="px-4 py-3">Lastname</th>
        <th class="px-4 py-3">Age</th>
        <th class="px-4 py-3">Sex</th>
      </tr> */}

      <tr class="bg-gray-100 border-b border-gray-200">
        {Object.entries(item).map(([key, value]) => {
          return <Cell key={key} cellData={JSON.stringify(value)} />;
        })}
      </tr>
    </>
  );
};

export default Row;
