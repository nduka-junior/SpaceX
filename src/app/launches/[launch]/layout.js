import React from "react";

export async function generateMetadata({ params }) {
  // read route params
  const id = params.launch;

  // return a dynamic title
  return {
    title: `Launch - ${id}`,
  };
}
function layout({ children }) {
  return <div className="bg-mainBg">{children}</div>;
}

export default layout;
