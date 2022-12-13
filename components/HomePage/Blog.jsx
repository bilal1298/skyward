import React from "react";
import classes from "../../styles/Blog.module.css";
import Image from "next/image";
import blog from "../../public/blog.jpg";
import Section from "../UI/Section";
import Button from "../UI/Button";

const Blog = () => {
  return (
    <Section padding={"70px 0"} background={"#002eff"} title={"Blog"} color={'#fff'}>
      <div className={classes.blogs}>
        <div className={classes.blogItem}>
          <Image src={blog} alt="" />
          <div className={classes.blogBody}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat eos quod repudiandae quo suscipit similique exercitationem quaerat totam, unde iusto alias facere rem, quae porro
              modi hic tempore esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat eos quod repudiandae quo suscipit similique exercitationem quaerat totam, unde iusto alias
              facere rem, quae porro modi hic tempore esse.
            </p>
            <Button href={'/'}>Read More</Button>
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
            <Button href={'/'}>Read More</Button>
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
            <Button href={'/'}>Read More</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
