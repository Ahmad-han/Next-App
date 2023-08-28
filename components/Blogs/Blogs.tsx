import React from "react";
import styles from "@/styles/blogs.module.scss";
import { Blog } from "./Blog";
import { Blogs_DataProps } from "@/data_view/blogs";

async function getData() {
    const res = await fetch("http://localhost:3000/api/hello")

    return res.json()
}



export const Blogs: React.FC = async() => {
    const blogs = await getData();
  return (
    <div className={styles.container}>
      {
      blogs.map((item: Blogs_DataProps) => {
        return <Blog item={item} key={item.id} />;
      })
      }
    </div>
  );
};
