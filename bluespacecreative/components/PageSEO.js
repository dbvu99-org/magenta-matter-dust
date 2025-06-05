import React from "react";
import Head from "next/head";

function PageSEO({ title = "loading | " }) {
  return (
    <Head>
      <title>{title} | bluespace creative</title>;
    </Head>
  );
}

export default PageSEO;
