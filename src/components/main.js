import React from "react";
import Card from "./cards";
import { Table } from "./table";
function MainBody() {
  return (
    <>
      <div className="flex flex-col  w-full ">
        <div>
          <Card />
        </div>
        <div >
          <Table />
        </div>
      </div>
    </>
  );
}

export default MainBody;
