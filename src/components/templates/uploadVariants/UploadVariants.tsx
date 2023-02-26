import React, {FC} from "react";
import { CustomLink } from "../../modules/customLink";
import cn from "classnames";
import styles from "./UploadVariants.module.sass";
import {Control} from "../../modules/control";

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Upload Item",
  },
];

const items = [
  {
    url: "/upload-product-details",
    buttonText: "New Post",
    image: "/images/content/upload-pic-1.jpg",
    image2x: "/images/content/upload-pic-1@2x.jpg",
  },
  {
    url: "/upload-idea-details",
    buttonText: "New Idea",
    image: "/images/content/upload-pic-2.jpg",
    image2x: "/images/content/upload-pic-2@2x.jpg",
  },
];

const UploadVariants:FC = () => {
  return (
    <div className={styles.page}>
      <Control className="" item={breadcrumbs} />
      <div className={cn("section-pt80", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.top}>
            <h1 className={cn("h2", styles.title)}>Upload item</h1>
            <div className={styles.info}>
              Choose <span>“New Post”</span> if you want to share any product or <span>“New Idea”</span> if you want to share your idea
            </div>
          </div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.preview}>
                  <img srcSet={`${x.image2x} 2x`} src={x.image} alt="Upload" />
                </div>
                <CustomLink className={cn("button-stroke", styles.button)} href={x.url}>
                  {x.buttonText}
                </CustomLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadVariants;
