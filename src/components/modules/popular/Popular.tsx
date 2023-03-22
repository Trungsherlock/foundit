import React, { useState, FC } from "react";
import cn from "classnames";
import Slider from "react-slick";
import { CustomLink } from "../customLink";
import styles from "./Popular.module.sass";
import Add from "./add/Add";
import {Icon} from "../icon";
import {Dropdown} from "../dropdown";
import { TSlick } from "./types";
//import {DropdownEmpty} from "../../../components/DropdownEmpty";

const items = [
  {
    name: "Facebook",
    sign: "/images/content/donut.svg",
    number: "1",
    url: "/profile",
    color: "#3772FF",
    avatar: "/images/mock-logo/4.png",
    reward: "/images/content/reward-1.svg",
    price: "Social Media",
  },
  {
    name: "SoundCloud",
    sign: "/images/content/lightning.svg",
    number: "2",
    url: "/profile",
    color: "#9757D7",
    avatar: "/images/mock-logo/44.png",
    reward: "/images/content/reward-1.svg",
    price: "An online audio streaming",
  },
  {
    name: "Dropbox",
    sign: "/images/content/lightning.svg",
    number: "3",
    url: "/profile",
    color: "#45B26B",
    avatar: "/images/mock-logo/25.webp",
    reward: "/images/content/reward-1.svg",
    price: "A cloud storage service",
  },
  {
    name: "BBC",
    sign: "/images/content/donut.svg",
    number: "4",
    url: "/profile",
    color: "#23262F",
    avatar: "/images/mock-logo/18.jpeg",
    reward: "/images/content/reward-1.svg",
    price: "A British broadcaster",
  },
  {
    name: "LinkedIn",
    sign: "/images/content/donut.svg",
    number: "5",
    url: "/profile",
    color: "#777E90",
    avatar: "/images/mock-logo/7.png",
    reward: "/images/content/reward-1.svg",
    price: "The professional network",
  },
  // {
  //   name: "Edd Harris",
  //   sign: "/images/content/cup.svg",
  //   number: "1",
  //   url: "/profile",
  //   color: "#3772FF",
  //   avatar: "/images/content/avatar-5.jpg",
  //   reward: "/images/content/reward-1.svg",
  //   price: "<span>2.456</span> ETH",
  // },
  // {
  //   name: "Odell Hane",
  //   sign: "/images/content/donut.svg",
  //   number: "2",
  //   url: "/profile",
  //   color: "#9757D7",
  //   avatar: "/images/content/avatar-6.jpg",
  //   reward: "/images/content/reward-1.svg",
  //   price: "<span>2.456</span> ETH",
  // },
  // {
  //   name: "Marlee Kuphal",
  //   sign: "/images/content/lightning.svg",
  //   number: "3",
  //   url: "/profile",
  //   color: "#45B26B",
  //   avatar: "/images/content/avatar-7.jpg",
  //   reward: "/images/content/reward-1.svg",
  //   price: "<span>2.456</span> ETH",
  // },
];

const SlickArrow:FC<TSlick> = ({children, ...props }) => (
  <button {...props}>{children}</button>
);

const dateOptions = ["Today", "This Week", "This Month"];
//const directionOptions = ["Sellers", "Buyers"];

const Popular: FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
    ],
  };

  const [date, setDate] = useState(dateOptions[0]);
  //const [direction, setDirection] = useState(directionOptions[0]);

  return (
    <div className={cn("section-pt80", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={styles.box}>
            <div className={styles.stage}>Similar Websites</div>
            {/* <DropdownEmpty
              className={styles.dropdown}
              value={direction}
              setValue={setDirection}
              options={directionOptions}
            /> */}
          </div>
          <div className={styles.field}>
            <div className={styles.label}>timeframe</div>
            <Dropdown
              className={styles.dropdown}
              value={date}
              setValue={setDate}
              options={dateOptions}
            />
          </div>
        </div>
        <div className={styles.wrapper}>
          <Slider className="popular-slider" {...settings}>
            {items.map((x, index) => (
              <div className={styles.slide} key={index}>
                <div className={styles.item}>
                  <div className={styles.head}>
                    <div
                      className={styles.rating}
                      style={{ backgroundColor: x.color }}
                    >
                      <div className={styles.icon}>
                        <img src={x.sign} alt="Rating" />
                      </div>
                      <div className={styles.number}>#{x.number} Social Media</div>
                    </div>
                    <div className={styles.control}>
                      <Add className={styles.button} />
                      <CustomLink className={styles.button} href={x.url}>
                        <Icon name="arrow-expand" size="24" />
                      </CustomLink>
                    </div>
                  </div>
                  <div className={styles.body}>
                    <div className={styles.avatar}>
                      <img src={x.avatar} alt="Avatar" />
                      <div className={styles.reward}>
                        <img src={x.reward} alt="Reward" />
                      </div>
                    </div>
                    <div className={styles.name}>{x.name}</div>
                    <div
                      className={styles.price}
                      dangerouslySetInnerHTML={{ __html: x.price }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Popular;
