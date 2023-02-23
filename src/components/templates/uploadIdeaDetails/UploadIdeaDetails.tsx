import React, { useState, FC } from "react";
import cn from "classnames";
import styles from "./UploadIdeaDetails.module.sass";
import {TextInput} from "../../modules/textInput";
import {TextArea} from "../../modules/textArea";
import {Select} from "../../modules/select";
import { SelectOption } from "./types";
import {useRouter} from 'next/router';
import { Button } from "../../modules/button";
import axios from 'axios';

const options = [
  { label: "Music", value: 1 },
  { label: "Movie", value: 2 },
  { label: "University", value: 3 },
  { label: "Education", value: 4 },
  { label: "NLP", value: 5 },
  { label: "Medical", value: 6},
  { label: "Tourism", value: 7},
  { label: "Traffic", value: 8},
  { label: "Restaurant", value: 9},
  { label: "Criminal", value: 10},
  { label: "Art", value: 11},
  { label: "NFT", value: 12},
  { label: "Blockchain", value: 13},
  { label: "Stock", value: 14},
  { label: "Business", value: 15},
  { label: "Economy", value: 16},
  { label: "Hollywood", value: 17},
  { label: "Food", value: 18},
  { label: "Car Industry", value: 19},
  { label: "Consumption", value: 20},
  { label: "Gym", value: 21},
  { label: "Fashion", value: 22},
  { label: "Animal", value: 23},
  { label: "Forest", value: 24 },
  { label: "Record", value: 25 },
  { label: "Technology", value: 26 },
  { label: "Big Tech", value: 27 },
  { label: "Marketing", value: 28 },
  { label: "Plants", value: 29 },
  { label: "Inflation", value: 30 },
  { label: "Recession", value: 31 },
  { label: "Employment", value: 32 },
  { label: "Labor", value: 33 },
  { label: "Population", value: 34 },
  { label: "World Cup", value: 35 },
  { label: "Agriculture", value: 36 },
]

const UploadIdeaDetails:FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [feature, setFeature] = useState<string>("");
  const [tags, setTags] = useState<SelectOption[]>([]);

  const router = useRouter();
  const [visiblePreview, setVisiblePreview] = useState(false);

  const [uploadingLoading, setUploadLoading] = useState<boolean>(false);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);

  
  const submitData = async (e: React.SyntheticEvent) => {
    setUploadLoading(true);
    e.preventDefault()
    try {
      const data = {
        title, 
        description, 
        feature, 
        tags
      } 
      console.log(data);
      const res = await axios.post('/api/ideas', data)
      console.log("upload successfully", res);
      setUploadLoading(false);
      setUploadSuccess(true);
      router.push('/ideas')
    } catch (err) {
      console.log("errr",err);
      setUploadLoading(false);
      setUploadSuccess(false);
    }
  }

  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.wrapper}>
            <div className={styles.head}>
              <div className={cn("h2", styles.title)}>
                Create idea
              </div>
            </div>
            <form className={styles.form}>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.category}>Idea Details</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label="Idea name"
                      name="Item"
                      type="text"
                      placeholder='e. g. Redeemable Bitcoin Card with logo"'
                      required
                      value={title}
                      onChange={(e: any) => setTitle(e.target.value)}
                    />
                    <TextArea
                      className={styles.field}
                      label="Description"
                      name="Description"
                      type="text"
                      placeholder="e. g. “After purchasing you will able to recived the logo...”"
                      required
                      value={description}
                      onChange={(e: any) => setDescription(e.target.value)}
                    />
                    <TextArea
                      className={styles.field}
                      label="Feature"
                      name="Feature"
                      type="text"
                      placeholder="e. g. “abc”"
                      required
                      value={feature}
                      onChange={(e: any) => setFeature(e.target.value)}
                    />
                    <div className={styles.field}>
                      <div className={styles.label}>Tags</div>
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
                </div>
              </div>
              <div className={styles.foot}>
                <button
                  className={cn("button-stroke tablet-show", styles.button)}
                  onClick={() => setVisiblePreview(true)}
                  type="button"
                >
                  Preview
                </button>
                <Button
                  loading={uploadingLoading}
                  success={uploadSuccess}
                  disabled={false}
                  name="Create Idea"
                  onClick={async (e) => { await submitData(e)}}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadIdeaDetails;
