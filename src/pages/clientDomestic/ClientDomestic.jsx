import React from "react";
import Expences from "../../components/expences/Expences";
import Header from "../../components/header/Header";

function ClientDomestic() {
  return (
    <>
      <Header type="finance" />
      <div id="add-employee" className="container-sm ">
        <h1 className="title text-center">Client Domestic Expences</h1>
        <Expences type="2" />
      </div>
    </>
  );
}

export default ClientDomestic;
