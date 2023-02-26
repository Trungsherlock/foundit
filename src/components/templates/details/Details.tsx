import React, { FC, useState } from "react";
import cn from "classnames";
import styles from "./Details.module.sass";
import {Users} from "../../modules/control/users";
import { Icon } from "@/components/modules/icon";
import { TProductDetails } from "./types";
import { updatedAt } from "utils/updatedAt";

const navLinks = ["About", "Features", "Authors"];

const Item: FC<TProductDetails> = ({product}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [like, setLike] = useState<boolean>(false);

  const categories = [
    {
      category: "black",
      content: product.type[0],
    },
  ];

  const handleClick = () => {
    setLike(!like);
    console.log(like);
  }

  const [bigImage,setBigImage] = useState<string>(product.image[0]);
  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.bg}>
            <div className={styles.preview}>
              <div className={styles.categories}>
                {categories.map((x, index) => (
                  <div
                    className={cn(
                      { "status-black": x.category === "black" },
                      { "status-purple": x.category === "purple" },
                      styles.category
                    )}
                    key={index}
                  >
                    {x.content}
                  </div>
                ))}
              </div>
              <div>
                <img
                  srcSet={bigImage}
                  src="/images/content/item-pic.jpg"
                  alt="Item"
                />
              </div>
              <div className={styles.threeSlide}>
                <div className={styles.slideOne}>
                  
                <img
                srcSet={product.image[0]? product.image[0] :"/images/content/photo-1.1.jpg"}
                src="/images/content/photo-1.1.jpg"
                alt="Item"
                onClick={() => setBigImage("/images/content/photo-1.1.jpg")}
                />  
                </div>
                <div className={styles.slideTwo}>
                  <img
                  srcSet={product.image[1]? product.image[1] :"/images/content/item-pic@2x.jpg 2x"}
                  src="/images/content/photo-1.2.jpg"
                  alt="Item"
                  onClick={() => setBigImage("/images/content/item-pic@2x.jpg 2x")}
                />  
                </div>
                <div className={styles.slideThree}>
                  <img
                  srcSet={product.image[2]? product.image[2] :"/images/content/item-pic@2x.jpg 2x"}
                  src="/images/content/photo-1.3.jpg"
                  alt="Item"
                  onClick={() => setBigImage("/images/content/item-pic@2x.jpg 2x")}
                />  
                </div>
              </div>
            </div>
            {/* <Options className={styles.options} /> */}
          </div>
          <div className={styles.details}>
            <h1 className={cn("h3", styles.title)}>{product.title}</h1>
            <div className={styles.cost}>
              <div className={cn("status-stroke-green", styles.price)}>
                <button onClick={handleClick} className={styles.copy}>
                  {like? 'like': <Icon name="heart" size="22" />}
                </button>
              <div className={styles.number}>{product.vote}</div>
              </div>
              <div className={styles.counter}>{updatedAt(product.updatedAt)}</div>
            </div>
            <div className={styles.info}>
              {product.brief}
            </div>
            <div className={styles.nav}>
              {navLinks.map((x, index) => (
                <button
                  className={cn(
                    { [styles.active]: index === activeIndex },
                    styles.link
                  )}
                  onClick={() => setActiveIndex(index)}
                  key={index}
                >
                  {x}
                </button>
              ))}
            </div> 
            <div className={styles.group}>
              <div className={styles.item}>
                {activeIndex === 0 && (
                  <div className={styles.about}>
                    {product.description}
                    </div>
                )}
                {activeIndex === 1 && (
                  <div className={styles.about}>
                    {product.link}
                  </div>
                )}
                 {activeIndex === 2 && (
                <div>
                  <Users className={styles.users} product={product}/>
                </div>
                )}
              </div>
            </div>
            <div className={styles.categoryBox}>
              {product.categories.map((c, index) => (
                <div className={cn("status-purple", styles.tag)} key={index}>
                  <p className={styles.textCenter}>{c}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};





export default Item;