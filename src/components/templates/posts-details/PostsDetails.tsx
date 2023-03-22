import React, { FC, useState, useEffect } from "react";
import cn from "classnames";
import styles from "./PostsDetails.module.sass";
import {Users} from "../../modules/control/users";
import { Icon } from "@/components/modules/icon";
import { TProductDetails } from "./types";
import { updatedAt } from "utils/updatedAt";
import { CustomLink } from "@/components/modules/customLink";
import { Popular } from "@/components/modules/popular";

const navLinks = ["About", "Features", "Images", "FAQs & Discussions"];

const PostsDetails: FC<TProductDetails> = ({product}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [like, setLike] = useState<boolean>(false);
  const [vote, setVote] = useState<number>(product.vote);
  const [likeAuthor, setLikeAuthor] = useState<string[]>(product.likeAuthor);
  //chatgpt method
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = ['/images/home-background/cover.webp', '/images/home-background/cover2.webp', '/images/home-background/cover3.webp'];

  const nextSlide = () => {
    setActiveImageIndex((activeImageIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveImageIndex((activeImageIndex + images.length - 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((activeImageIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeImageIndex]);


  const categories = [
    {
      category: "black",
      content: product.type[0],
    },
  ];

  const handleClick = () => {
    setLike(!like);
  }

  const [bigImage,setBigImage] = useState<string>(product.image[0]);
  return (
    <>
      <div className={styles.topsection}>
        <div className={styles.slider}>
          <div className={styles.imageWrapper}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              style={{ opacity: activeImageIndex === index ? 1 : 0 }}
            />
          ))}
          </div>
          <button onClick={prevSlide} className={styles.navButtonLeft}>
            <Icon name="arrow-prev" size="12" />
          </button>
          <button onClick={nextSlide} className={styles.navButtonRight}>
            <Icon name="arrow-next" size="12" />
          </button>
        </div>
      </div>
      <div className={cn("section-pt12", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.leftsection}>
            <div className={styles.bg}>
              <div className={styles.preview}>
                <img
                    srcSet={bigImage}
                    src="/images/content/item-pic.jpg"
                    alt="Item"
                />
                <div className={styles.titlegroup}>
                  <h1 className={cn("h3", styles.title)}>{product.title}</h1>
                  <h3 className={cn("h5", styles.subtitle)}>A modern format of presentations</h3>
                </div>
              </div>
            </div>
            <div className={styles.bg}>
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
            </div>
            <div className={styles.bg}>
              <div className={styles.item}>
                <div className={styles.about}>
                  {product.description}
                </div>
              </div>
            </div>
            <div className={styles.bg}>
              <div className={styles.item}>
                <div className={styles.about}>
                  {product.link}
                </div>
              </div>
            </div>
            <div className={styles.bg}>
              <div className={styles.item}>
                <div className={styles.about}>
                  {product.description}
                </div>
              </div>
            </div>
            {/* <div className={styles.bg} id="3">
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
            </div> */}
          </div>
          <div className={styles.rightsection}>
            <div className={styles.details}>
              <div className={styles.visitgroup}>
                <CustomLink
                  className={cn("button-small", styles.button)}
                  href="/upload-variants"
                >
                  Visit
                </CustomLink>
              </div>
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
            </div>
            <div className={styles.details}>
              <div className={styles.tags}>
                <h3 className={cn("h5", styles.title)}>Statistics</h3>
              </div>
              <div className={styles.lists}>
                <div className={styles.square}>
                  <Icon name="heart" size="22" />
                </div>
                <div className={styles.text}>
                  <p className={styles.subtitle}>Registered</p>
                  <p>26,860</p>
                </div>
              </div>
              <div className={styles.lists}>
                <div className={styles.square}>
                  <Icon name="heart" size="22" />
                </div>
                <div className={styles.text}>
                  <p className={styles.subtitle}>Application Deadline</p>
                  <p>12 days left</p>
                </div>
              </div>
              <div className={styles.lists}>
                <div className={styles.square}>
                  <Icon name="heart" size="22" />
                </div>
                <div className={styles.text}>
                  <p className={styles.subtitle}>Contribution</p>
                  <p>46,19,185</p>
                </div>
              </div>
            </div>
            <div className={styles.details2}>
              <div className={styles.visitgroup}>
                <CustomLink
                  className={cn("button-small", styles.button)}
                  href="/upload-variants"
                >
                  Creative Idea
                </CustomLink>
              </div>
            </div>
            <div className={styles.details}>
              <div className={styles.tags}>
                <h3 className={cn("h5", styles.title)}>Tags</h3>
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
      </div>
      <div className={styles.bottomsection}>
        <Popular />
      </div>
    </>
  );
};





export default PostsDetails;