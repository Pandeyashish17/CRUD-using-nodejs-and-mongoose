import React from "react";
import axios from "axios";
const index = ({ data }) => {
  const { title, body, image } = data.data;
  return (
    <div style={{ background: "white", color: "black" }}>
      <p>{title}</p>
      <p>{body}</p>
      <img src={image} alt="" />
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await axios("http://localhost:4000/blog");
  const data = res.data.data;

  const paths = data.map((curElem) => {
    return {
      params: {
        slug: curElem.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const res = await axios(`http://localhost:4000/blog/${slug}`);
  const data = res.data;

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

export default index;
