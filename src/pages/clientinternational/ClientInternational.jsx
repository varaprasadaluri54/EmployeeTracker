import React from "react";
import Expences from "../../components/expences/Expences";
import Header from "../../components/header/Header";

function ClientInternational() {
  return (
    <>
      <Header type="finance" />
      <div id="add-employee" className="container-sm ">
        <h1 className="title text-center">Client International Expences</h1>
        <Expences type="clientDomestic" />
      </div>
    </>
  );
}

export default ClientInternational;
