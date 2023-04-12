import Four from "@/components/Four";
import Header from "@/components/Header";
import React from "react";

const wind = () => {
  return (
    <div>
      <Header
        showH2={false}
        showP2={false}
        p1Text="Wind"
        backgroundImage="https://images.unsplash.com/photo-1565085360602-de694f1d7650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
      />
      <Four />
    </div>
  );
};

export default wind;
