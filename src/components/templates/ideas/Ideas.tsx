import React, { useState, FC, useEffect } from "react";
import cn from "classnames";
import styles from "./Ideas.module.sass";
import { Icon } from "../../modules/icon";
import { IdeaCard } from "../../modules/ideaCard";
import { TIdeas } from "./types";
import { TIdea } from "../../../../types/idea"
import { CustomLink } from "../../modules/customLink"
import {Dropdown} from "../../modules/dropdown"
import { TSlide } from "./types";
import { Range, getTrackBackground } from "react-range";
import { prisma } from "lib/prismadb";
import { Type, Category} from "@prisma/client"

const SlickArrow: FC<TSlide> = ({children, ...props }) => (
  <button {...props}>{children}</button>
);

const TypeOptions = ["Web", "App", "Extension", "Tool", "Chatbot", "AI", "Game"];

const dateOptions = ["Newest", "Oldest"];


const Idea: FC<TIdeas> = ({ ideas }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [date, setDate] = useState(dateOptions[0]);
  const [values, setValues] = useState([5]);
  const [types, setTypes] = useState(TypeOptions[0]);
  const handleSubmit = (e:any) => {
    alert();
  };

  const STEP = 1;
  const MIN = 0;
  const MAX = 100;

  const [search, setSearch] = useState("");
  const [filteredIdeas, setFilteredIdeas] = useState<TIdea[]>([]);

  useEffect(() => {
    const filterIdeas = ideas.filter((idea) => idea.type.map((type) => type.toString()).includes(search.toLowerCase()));
    setFilteredIdeas(filterIdeas);
  });
  

  //const href: string = "/";

  return (
    <div className={cn("section-pt80", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={styles.title}>Ideas</div>
          <form
            className={styles.search}
            action=""
            onSubmit={() => console.log('a')}
          >
            <input
              className={styles.input}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              placeholder="Search ..."
              required
            />
            <button className={styles.result}>
              <Icon name="search" size="16" />
            </button>
          </form>
        </div>
        {/* Changes */}
        
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
                <div className={styles.label}>Type</div>
                <Dropdown
                  className={styles.dropdown}
                  value={types}
                  setValue={setTypes}
                  options={TypeOptions}
                />
              </div>
              <div className={styles.sorting}>
                <div className={styles.dropdown}>
                  <Dropdown
                    className={styles.dropdown}
                    value={date}
                    setValue={setDate}
                    options={dateOptions}
                  />
                </div>
              </div>
            </div>
            <div className={styles.reset}>
              <Icon name="close-circle-fill" size="24" />
              <span>Reset filter</span>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.list}>
              {ideas.map((idea, index) => (
                <IdeaCard key={index} idea={idea} />
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

export default Idea;
