"use client";

import Link from "next/link";

const Error = ({ error, reset }) => (
  <div>
    <p>Something went wrong</p>
    <p>
      <Link href="/">Go Back to Home 🏡</Link>
    </p>
  </div>
);

export default Error;
