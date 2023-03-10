import React, { useState, FC } from "react";
import cn from "classnames";
import { CustomLink } from "../../modules/customLink";
import styles from "./Profile.module.sass";
import {Icon} from "../../modules/icon";
import {UserProfile} from "../../modules/userProfile";
import { IProfile } from "./types";
import { IdeaCard } from "@/components/modules/ideaCard";
import { TIdeas } from "../ideas/types";
import { Card } from "@/components/modules/card";

const navLinks = [
   "Products",
   "Ideas",
];


const idea1 = {
    id: "1",
    title: "1",
    type: [],
    description: "haha",
    feature: "none",
    createdAt: "Today",
    updatedAt: "",
    authorId: "Pink",
    author: "Pink",
    categories: [],
}



const Profile: FC<IProfile> = ({ user, products, ideas }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  console.log('profile user', user);
  console.log(user.ideas);


  const socials = [
    {
      title: "twitter",
      url: user.twitter ? user.twitter : "https://twitter.com/home",
    },
    {
      title: "instagram",
      url: user.instagram ? user.instagram : "https://www.instagram.com/",
    },
    {
      title: "facebook",
      url: user.facebook ? user.facebook : "https://www.facebook.com/",
    },
  ];
  
  return (
    <div className={styles.profile}>
      <div
        className={cn(styles.head, { [styles.active]: visible })}
        style={{
          backgroundImage: "url(/images/content/bg-profile.jpg)",
        }}
      >
        <div className={cn("container", styles.container)}>
          <div className={styles.btns}>
            <button
              className={cn("button-stroke button-small", styles.button)}
              onClick={() => setVisible(true)}
            >
              <span>Edit cover photo</span>
              <Icon name="edit" size="16" />
            </button>
            <CustomLink
              className={cn("button-stroke button-small", styles.button)}
              href={`/profile-edit/${user.id}`}
            >
              <span>Edit profile</span>
              <Icon name="image" size="16" />
            </CustomLink>
          </div>
          <div className={styles.file}>
            <input type="file" />
            <div className={styles.wrap}>
              <Icon name="upload-file" size="48" />
              <div className={styles.info}>Drag and drop your photo here</div>
              <div className={styles.text}>or click to browse</div>
            </div>
            <button
              className={cn("button-small", styles.button)}
              onClick={() => setVisible(false)}
            >
              Save photo
            </button>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={cn("container", styles.container)}>
          <UserProfile 
            className={styles.user} 
            socials={socials} 
            user={user}
            
          />
          {/* <div className={styles.wrapper}>
            <div className={styles.nav}>
              {navLinks.map((x, index) => (
                <button
                  className={cn(styles.link, {
                    [styles.active]: index === activeIndex,
                  })}
                  key={index}
                  onClick={() => setActiveIndex(index)}
                >
                  {x}
                </button>
              ))}
            </div>
            <div className={styles.group}>
              <div className={styles.item}> */}
                
                {/* {(activeIndex === 0 && myDataNFTs) && (
                  <Items 
                    className={styles.items} 
                    items={myDataNFTs.slice(0, 6)} 
                    cardName="View / Sell"
                    isBuy={false}
                  />
                )} */}
                {/* {activeIndex === 1 && (
                  <></>
                )}
                {activeIndex === 2 && (
                  <></>
                )}
              </div>
            </div>
          </div> */}
            
          {/* Changes  */}
          {/* <div className={styles.row}>
            <div className={styles.wrapper_}>
                <div className={styles.list}>
                    {bids.map((x, index) => (
                        <Card className={styles.card} item={x} key={index} />
                    ))}
                </div>
                <div className={styles.btns_}>
                    <button className={cn("button-stroke", styles.button)}>
                        <span>Load more</span>
                    </button>
                </div>
            </div>
          </div> */}

          <div className={styles.wrapper}>
            <div className={styles.nav}>
              {navLinks.map((x, index) => (
                <button
                  className={cn(styles.link, {
                    [styles.active]: index === activeIndex,
                  })}
                  key={index}
                  onClick={() => setActiveIndex(index)}
                >
                  {x}
                </button>
              ))}
            </div>
            <div className={styles.group}>
              <div className={styles.item}>
                {/* {activeIndex === 0 && (
                  <Product className ={styles.items} item={bids.slice(0, 3)} />
                )}*/}


                {activeIndex === 1 && (
                  // <IdeaCard idea = {idea1} />

                  <div>
                    {ideas.map((idea, index) => <IdeaCard key={index} idea={idea} />)}
                  </div>


                )}
                {activeIndex === 0 && (
                  <div className={styles.wrapper}>       
                    <div className={styles.list}>
                      {products.map((product, index) => 
                        <Card className={styles.card} key={index} product={product} />
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* End_Changes */}


        </div>
      </div>
    </div>
  );
};

export default Profile;


{/* <div className={styles.row}>
    <div className={styles.wrapper_}>
        <div className={styles.list}>
            {bids.map((x, index) => (
                <Card className={styles.card} item={x} key={index} />
            ))}
        </div>
        <div className={styles.btns_}>
            <button className={cn("button-stroke", styles.button)}>
                <span>Load more</span>
            </button>
        </div>
    </div>
</div> */}