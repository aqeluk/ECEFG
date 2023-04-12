import Four from "@/components/Four";
import Header from "@/components/Header";
import React from "react";

const solar = () => {
  return (
    <div>
      <Header
        showH2={false}
        showP2={false}
        p1Text="Solar PV"
        backgroundImage="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
      />
      <Four />
    </div>
  );
};

export default solar;
