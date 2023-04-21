import React from "react";
import { Helmet } from "react-helmet";
//single product view meta data
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Clothshop | Mern Stack",
  description: "Men's clothing store",
  keywords: "lylescott, hollister, champions, adidas, nike",
};

export default Meta;
