import React from "react";
import classes from "../styles/Blog.module.css";
import Link from "next/link";
import Image from "next/image";
import blog from '../public/blog.jpg'

const Blog = () => {
  return (
    <section className={classes.blog}>
      <div className="container">
        <h2 className="title">Blog</h2>
        <div className={classes.blogs}>
          <div className={classes.blogItem}>
            <Image src={blog} alt="" />
            <div className={classes.blogBody}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat eos quod repudiandae quo suscipit similique exercitationem quaerat totam, unde iusto alias facere rem, quae porro
                modi hic tempore esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat eos quod repudiandae quo suscipit similique exercitationem quaerat totam, unde iusto alias
                facere rem, quae porro modi hic tempore esse.
              </p>
              <Link href="/" className="my-button">
                Read More
              </Link>
            </div>
          </div>
          <div className={classes.blogItem}>
            <Image src={blog} alt="" />
            <div className={classes.blogBody}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat eos quod repudiandae quo suscipit similique exercitationem quaerat totam, unde iusto alias facere rem, quae porro
                modi hic tempore esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat eos quod repudiandae quo suscipit similique exercitationem quaerat totam, unde iusto alias
                facere rem, quae porro modi hic tempore esse.
              </p>
              <Link href="/" className="my-button">
                Read More
              </Link>
            </div>
          </div>
          <div className={classes.blogItem}>
            <Image src={blog} alt="" />
            <div className={classes.blogBody}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat eos quod repudiandae quo suscipit similique exercitationem quaerat totam, unde iusto alias facere rem, quae porro
                modi hic tempore esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat eos quod repudiandae quo suscipit similique exercitationem quaerat totam, unde iusto alias
                facere rem, quae porro modi hic tempore esse.
              </p>
              <Link href="/" className="my-button">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
