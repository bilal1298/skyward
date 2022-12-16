import React from "react";
import classes from "../../styles/Blog.module.css";
import Image from "next/image";
import blog from "../../public/blog.jpg";
import Section from "../UI/Section";
import Link from "next/link";

const Blog = () => {
  return (
    <Section padding={"70px 0"} background={"#002eff"} title={"Blog"} color={"#fff"}>
      <div className={`${classes.blogs} row`}>
        <div className="col-4">
          <div className={classes.blogImage}>
            <Image src={blog} alt="" />
          </div>
          <div className={classes.blogTitle}>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          </div>
          <div className={classes.button}>
            <Link href="/" className={classes.readMore}>
              Read More
            </Link>
          </div>
        </div>
        <div className="col-4">
          <div className={classes.blogImage}>
            <Image src={blog} alt="" />
          </div>
          <div className={classes.blogTitle}>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          </div>
          <div className={classes.button}>
            <Link href="/" className={classes.readMore}>
              Read More
            </Link>
          </div>
        </div>
        <div className="col-4">
          <div className={classes.blogImage}>
            <Image src={blog} alt="" />
          </div>
          <div className={classes.blogTitle}>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          </div>
          <div className={classes.button}>
            <Link href="/" className={classes.readMore}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
