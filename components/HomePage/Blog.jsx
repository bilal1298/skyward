import React from "react";
import classes from "../../styles/Blog.module.css";
import Image from "next/image";
import blog from "../../public/blog.jpg";
import Section from "../UI/Section";
import Button from "../UI/Button";

const Blog = () => {
  return (
    <Section padding={"70px 0"} background={"#fece1a"} title={<span className="titleBackground">Blog</span>} >
      <div className={`${classes.blogs}`}>
        <div className={classes.blog}>
          <div className={classes.blogImage}>
            <Image src={blog} alt="" />
          </div>
          <div className={classes.blogTitle}>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          </div>
          <div className={classes.button}>
            <Button href="/">Read More</Button>
          </div>
        </div>
        <div className={classes.blog}>
          <div className={classes.blogImage}>
            <Image src={blog} alt="" />
          </div>
          <div className={classes.blogTitle}>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          </div>
          <div className={classes.button}>
            <Button href="/">Read More</Button>
          </div>
        </div>
        <div className={classes.blog}>
          <div className={classes.blogImage}>
            <Image src={blog} alt="" />
          </div>
          <div className={classes.blogTitle}>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          </div>
          <div className={classes.button}>
            <Button href="/">Read More</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
