// import React from "react";

import Link from "next/link";

export const metadata = {
  title: "About Page",
  description: "Created by vzan2012",
};

export default function About() {
  // throw new Error("Error Test");
  return (
    <>
      <div className="text-center">About page</div>
      <Link href="/">Link to Home Page</Link>
    </>
  );
}
