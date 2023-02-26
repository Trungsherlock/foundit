import React, { useState, FC, useEffect } from "react";
import cn from "classnames";
import styles from "./Discover.module.sass";
import { Icon } from "../../modules/icon";
import { Range, getTrackBackground } from "react-range";
import { Card } from "../../modules/card";
import Slider from "react-slick";
import { TSlide, IDiscovery } from "./types";
import {Dropdown} from "../../modules/dropdown";
import { TProducts } from "./types";
import { TProduct } from "types/product";
import { SelectOption1 } from "../uploadIdeaDetails/types";
import {Select} from "../../modules/select";
import { Category, Type } from "@prisma/client";
import { randomizeArray } from "utils/randomizeArrayProduct";
import { compareDate } from "utils/compareDate";

export const options = [
  { label: "Action", value: Category.ACTION },
  { label: "Adventure", value: Category.ADVENTURE },
  { label: "Advertising", value: Category.ADVERTISING },
  { label: "Animation", value: Category.ANIMATION },
  { label: "Anime", value: Category.ANIME },
  { label: "Art", value: Category.ART },
  { label: "Art and Entertainment", value: Category.ARTS_AND_ENTERTAINMENT },
  { label: "Autos and Vehicles", value: Category.AUTOS_AND_VEHICLES },
  { label: "Banking", value: Category.BANKING },
  { label: "Bars", value: Category.BARS },
  { label: "Beauty", value: Category.BEAUTY },
  { label: "Beauty and Fitness", value: Category.BEAUTY_AND_FITNESS },
  { label: "Betting", value: Category.BETTING },
  { label: "Blockchain", value: Category.BLOCKCHAIN },
  { label: "Blogging", value: Category.BLOGGING },
  { label: "Books", value: Category.BOOKS },
  { label: "Books and Literature", value: Category.BOOKS_AND_LITERATURE },
  { label: "Business", value: Category.BUSINESS },
  { label: "Business and Finance", value: Category.BUSINESS_AND_FINANCE },
  { label: "Careers and Employment", value: Category.CAREERS_AND_EMPLOYMENT },
  { label: "Charity", value: Category.CHARITY },
  { label: "Children", value: Category.CHILDREN },
  { label: "Cloud Computing", value: Category.CLOUD_COMPUTING },
  { label: "Cloud Storage", value: Category.CLOUD_STORAGE },
  { label: "Collectibles", value: Category.COLLECTIBLES },
  { label: "Comedy", value: Category.COMEDY },
  { label: "Community", value: Category.COMMUNITY },
  { label: "Computers and Electronics", value: Category.COMPUTERS_AND_ELECTRONICS },
  { label: "Credit", value: Category.CREDIT },
  { label: "Culture", value: Category.CULTURE },
  { label: "Customer Service", value: Category.CUSTOMER_SERVICE },
  { label: "Dating", value: Category.DATING },
  { label: "Design", value: Category.DESIGN },
  { label: "Digital Art", value: Category.DIGITAL_ART },
  { label: "Digital Streaming", value: Category.DIGITAL_STREAMING },
  { label: "DIY", value: Category.DIY },
  { label: "Drama", value: Category.DRAMA },
  { label: "Ecommerce", value: Category.ECOMMERCE },
  { label: "Education", value: Category.EDUCATION },
  { label: "Electronics", value: Category.ELECTRONICS },
  { label: "Email", value: Category.EMAIL },
  { label: "Entertainment", value: Category.ENTERTAINMENT },
  { label: "Environment", value: Category.ENVIRONMENT },
  { label: "Event", value: Category.EVENT },
  { label: "Family and Parenting", value: Category.FAMILY_AND_PARENTING },
  { label: "Fashion", value: Category.FASHION },
  { label: "Finance", value: Category.FINANCE },
  { label: "Fitness", value: Category.FITNESS },
  { label: "Food", value: Category.FOOD },
  { label: "Food and Drink", value: Category.FOOD_AND_DRINK },
  { label: "Gaming", value: Category.GAMING },
  { label: "Gardening", value: Category.GARDENING },
  { label: "Government", value: Category.GOVERNMENT },
  { label: "Health", value: Category.HEALTH },
  { label: "Health and Wellness", value: Category.HEALTH_AND_WELLNESS },
  { label: "Hobbies and Leisure", value: Category.HOBBIES_AND_LEISURE },
  { label: "Hospitality", value: Category.HOSPITALITY },
  { label: "History", value: Category.HISTORY },
  { label: "Home", value: Category.HOME },
  { label: "Home and Garden", value: Category.HOME_AND_GARDEN },
  { label: "Humor", value: Category.HUMOR },
  { label: "Internet and Telecom", value: Category.INTERNET_AND_TELECOM },
  { label: "Investment", value: Category.INVESTMENT },
  { label: "Journalism", value: Category.JOURNALISM },
  { label: "Law and Government", value: Category.LAW_AND_GOVERNMENT },
  { label: "Lifestyle", value: Category.LIFESTYLE },
  { label: "Literature", value: Category.LITERATURE },
  { label: "Live Streaming", value: Category.LIVE_STREAMING },
  { label: "Local Search", value: Category.LOCAL_SEARCH },
  { label: "Maps", value: Category.MAPS },
  { label: "Marketing", value: Category.MARKETING },
  { label: "Media", value: Category.MEDIA },
  { label: "Medical", value: Category.MEDICAL },
  { label: "Music", value: Category.MUSIC },
  { label: "Nature", value: Category.NATURE },
  { label: "News", value: Category.NEWS },
  { label: "Non-Profit", value: Category.NON_PROFIT },
  { label: "Nutrition", value: Category.NUTRITION },
  { label: "Online Communities", value: Category.ONLINE_COMMUNITIES },
  { label: "Online Marketplace", value: Category.ONLINE_MARKETPLACE },
  { label: "Open Source", value: Category.OPEN_SOURCE },
  { label: "Parenting", value: Category.PARENTING },
  { label: "Personal Development", value: Category.PERSONAL_DEVELOPMENT },
  { label: "People and Society", value: Category.PEOPLE_AND_SOCIETY },
  { label: "Pets", value: Category.PETS },
  { label: "Pets and Animals", value: Category.PETS_AND_ANIMALS },
  { label: "Philosophy", value: Category.PHILOSOPHY },
  { label: "Photography", value: Category.PHOTOGRAPHY },
  { label: "Politics", value: Category.POLITICS },
  { label: "Programming", value: Category.PROGRAMMING },
  { label: "Project Management", value: Category.PROJECT_MANAGEMENT },
  { label: "Psychology", value: Category.PSYCHOLOGY },
  { label: "Real Estate", value: Category.REAL_ESTATE },
  { label: "Recruitment", value: Category.RECRUITMENT },
  { label: "Reference", value: Category.REFERENCE },
  { label: "Religion", value: Category.RELIGION },
  { label: "Research", value: Category.RESEARCH },
  { label: "Restaurants", value: Category.RESTAURANTS },
  { label: "Science", value: Category.SCIENCE },
  { label: "Search Engines", value: Category.SEARCH_ENGINES },
  { label: "Self Help", value: Category.SELF_HELP },
  { label: "Shopping", value: Category.SHOPPING },
  { label: "Social Media", value: Category.SOCIAL_MEDIA },
  { label: "Software", value: Category.SOFTWARE },
  { label: "Sports", value: Category.SPORTS },
  { label: "Technology", value: Category.TECHNOLOGY },
  { label: "Television", value: Category.TELEVISION },
  { label: "Theater", value: Category.THEATER },
  { label: "Travel", value: Category.TRAVEL },
  { label: "Tourism", value: Category.TOURISM },
  { label: "Uncategorized", value: Category.UNCATEGORIZED },
  { label: "Video", value: Category.VIDEO },
  { label: "Video Production", value: Category.VIDEO_PRODUCTION },
  { label: "Video Sharing", value: Category.VIDEO_SHARING },
  { label: "Virtual Reality", value: Category.VIRTUAL_REALITY },
  { label: "Vlogs", value: Category.VLOGS },
  { label: "Weather", value: Category.WEATHER },
  { label: "Web Design", value: Category.WEB_DESIGN },
  { label: "Web Development", value: Category.WEB_DEVELOPMENT },
  { label: "Web Hosting", value: Category.WEB_HOSTING },
  { label: "Weddings", value: Category.WEDDINGS },
  { label: "Wellness", value: Category.WELLNESS },
  { label: "Writing", value: Category.WRITING }
];

const SlickArrow: FC<TSlide> = ({children, ...props }) => (
  <button {...props}>{children}</button>
);
// const dateOptions = ["Newest", "Oldest"];
const typesOptions = ["None", "Web", "App", "Extension", "Tool", "Chatbot", "AI", "Game"];
const categoryOptions = ["Trending", "Newest"];
const creatorOptions = ["Verified only", "All", "Most liked"];

const navLinks = ["Suggestion", "Trending", "Newest"];



const Discover: FC<TProducts> = ({products}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [type, setType] = useState(typesOptions[0]);
  const [tags, setTags] = useState<SelectOption1[]>([]);

  //const [creator, setCreator] = useState(creatorOptions[0]);
  //const [date, setDate] = useState(dateOptions[0]);

  //const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState<TProduct[]>(products);


  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);    
    
  }

  const [values, setValues] = useState([5]);

  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>(products);

  const [loading, setLoading] = useState (false);


  useEffect(() => {
    setLoading(!loading)
    if (searchInput !== '') {
      const filteredData = products.filter((item) => {
        return Object.values(item.title).join('').toLowerCase().includes(searchInput.toLowerCase())
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(products);
    }
    setLoading(!loading)
  }, [searchInput]);

  useEffect(() => {
    setLoading(!loading)
    setFilteredProducts(filteredResults);
    console.log(filteredProducts);
    //Filter Types
    if (type !== "None") {
      setFilteredProducts(products.filter((product) => product.type.map((type) => type.toString().toLowerCase()).includes(type.toLowerCase())));
    }
    //Filter Tags
    tags.forEach((e) => setFilteredProducts(filteredProducts.filter((product) => product.categories.includes(e.value))))

    // setFilteredProducts(filterProducts)
    setLoading(!loading)
  }, [type, tags, filteredResults]);

  useEffect(() => {
    setLoading(!loading)
    //Sort
    if (activeIndex === 0) {
      setFilteredProducts(randomizeArray(filteredProducts))
    } else if (activeIndex === 1) {
      setFilteredProducts(randomizeArray(filteredProducts))
    } else {
      setFilteredProducts(filteredProducts.sort((e1,e2) => compareDate(e2.updatedAt, e1.updatedAt)))
      // filterProducts = randomizeArray(filterProducts)
    }

    setFilteredProducts(filteredProducts.filter(value => filteredResults.includes(value)));

    // setFilteredProducts(filterProducts)
    setLoading(!loading)
  }, [activeIndex]);

  const handleSubmit = (e:any) => {
    alert();
  };

  const STEP = 1;
  const MIN = 0;
  const MAX = 10000;

  return (
    <div className={cn("section-pt80", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={styles.title}>Type your keywords</div>
          <form
            className={styles.search}
            action=""
            onSubmit={() => console.log()}
          >
            <input
              className={styles.input}
              type="text"
              value={searchInput}
              onChange={(e) => searchItems(e.target.value)}
              name="search"
              placeholder="Search ..."
              required
            />
            <button className={styles.result} onClick={() => searchItems(searchInput)}>
              <Icon name="search" size="16" />
            </button>
          </form>
        </div>
        <div className={styles.sorting}>
          <div className={styles.dropdown}>
            {/* <Dropdown
              className={styles.dropdown}
              value={date}
              setValue={setDate}
              options={dateOptions}
            /> */}
          </div>
          <div className={styles.nav}>
            {navLinks.map((x, index) => (
              <button
                className={cn(styles.link, {
                  [styles.active]: index === activeIndex,
                })}
                onClick={() => setActiveIndex(index)}
                key={index}
              >
                {x}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.filters}>
            <div className={styles.range}>
              <div className={styles.label}>Vote range</div>
              <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      ...props.style,
                      height: "36px",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <div
                      ref={props.ref}
                      style={{
                        height: "8px",
                        width: "100%",
                        borderRadius: "4px",
                        background: getTrackBackground({
                          values,
                          colors: ["#3772FF", "#E6E8EC"],
                          min: MIN,
                          max: MAX,
                        }),
                        alignSelf: "center",
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props, isDragged }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "24px",
                      width: "24px",
                      borderRadius: "50%",
                      backgroundColor: "#3772FF",
                      border: "4px solid #FCFCFD",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-33px",
                        color: "#fff",
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "18px",
                        fontFamily: "Poppins",
                        padding: "4px 8px",
                        borderRadius: "8px",
                        backgroundColor: "#141416",
                      }}
                    >
                      {values[0].toFixed(1)}
                    </div>
                  </div>
                )}
              />
              <div className={styles.scale}>
                <div className={styles.number}>0 </div>
                <div className={styles.number}>100</div>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.item}>
                <div className={styles.label}>Types</div>
                <Dropdown
                  className={styles.dropdown}
                  value={type}
                  setValue={setType}
                  options={typesOptions}
                />
              </div>
              <div className={styles.item}>
                <div className={styles.label}>Categories</div>
                {/* <Dropdown
                  className={styles.dropdown}
                  value={creator}
                  setValue={setCreator}
                  options={creatorOptions}
                /> */}
              <Select
                multiple
                options={options}
                value={tags}
                onChange={o => { 
                  setTags(o)
                }}
              />
                
              </div>
            </div>
            <div className={styles.reset}>
              <button onClick={() => {setType(typesOptions[0]); setTags([])}}>
              <Icon name="close-circle-fill" size="24" />
              <span>Reset filter</span>
              </button>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.list}>
              {filteredProducts.map((product, index) => (
                <Card className={styles.card} product={product} key={index} />
              ))}
            </div>
            <div className={styles.btns}>
              <button className={cn("button-stroke", styles.button)}>
                <span>Load more</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Discover;