import React, { useState } from "react";
import cn from "classnames";
import styles from "./Details.module.sass";
import {Users} from "../../modules/control/users";
import { Icon } from "@/components/modules/icon";

const navLinks = ["About", "Features", "Authors"];

const categories = [
  {
    category: "black",
    content: "TYPE",
  },
];


const users = [
  {
    name: "Raquel Will",
    position: "Owner",
    avatar: "/images/content/avatar-2.jpg",
    reward: "/images/content/reward-1.svg",
  },
  {
    name: "Selina Mayert",
    position: "Creator",
    avatar: "/images/content/avatar-1.jpg",
  },
];

const Item = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
              <img
                srcSet="/images/content/item-pic@2x.jpg 2x"
                src="/images/content/item-pic.jpg"
                alt="Item"
              />
            </div>
            {/* <Options className={styles.options} /> */}
          </div>
          <div className={styles.details}>
            <h1 className={cn("h3", styles.title)}>Product Name</h1>
            <div className={styles.cost}>
              <div className={cn("status-stroke-green", styles.price)}>
                <button className={styles.copy}>
                <Icon name="heart" size="22" />
              </button>
              <div className={styles.number}>100</div>
              </div>
              <div className={styles.counter}>Feb 24, 2023</div>
            </div>
            <div className={styles.info}>
              This NFT Card will give you Access to Special Airdrops. To learn
              more about UI8 please visit{" "}
              <a
                href="https://ui8.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ui8.net
              </a>
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
                  <div className={styles.about}>David arranged a meeting with Page and Brin and his Granite co-founder Andy Bechtolsheim. The meeting was set for 8 AM at the front porch of David's home in Palo Alto and it had to be brief because Andy 
                  had another meeting at Cisco, where he now worked after the acquisition, at 9 AM. Andy briefly tested a demo of the website, liked what he saw, and then went back to his car to grab the check. David Cheriton later also joined in with a $250,000 investment.
                    </div>
                )}
                {activeIndex === 1 && (
                  <div className={styles.about}>Demonstrate your ability to measure and optimize digital ad performance using Google’s measurement solutions. Certified users will show they understand the metrics that matter and can turn key insights into action to improve Google Ads performance and make an impact on their business.
                Note: The Google Ads Measurement certification does not count toward the Google Partner badge.
                    </div>
                )}
                 {activeIndex === 2 && (
                <div>
                  <Users className={styles.users} items={users} />
                </div>
                )}
              </div>
            </div>
            {/* <Users className={styles.users} items={users} /> */}
          </div>
        </div>
      </div>
    </>
  );
};





export default Item;