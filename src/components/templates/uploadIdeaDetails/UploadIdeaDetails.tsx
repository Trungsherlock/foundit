import React, { useState, FC } from "react";
import cn from "classnames";
import styles from "./UploadIdeaDetails.module.sass";
import {TextInput} from "../../modules/textInput";
import {TextArea} from "../../modules/textArea";
import {Select} from "../../modules/select";
import { SelectOption } from "./types";
import {useRouter} from 'next/router';
import { Button } from "../../modules/button";
import { options } from "@/components/mock/category";
import axios from 'axios';

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
