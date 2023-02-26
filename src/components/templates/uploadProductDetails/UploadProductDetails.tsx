import React, { useState, FC } from "react";
import cn from "classnames";
import styles from "./UploadProductDetails.module.sass";
import {TextInput} from "../../modules/textInput";
import {TextArea} from "../../modules/textArea";
import {Select} from "../../modules/select";
import { SelectOption } from "src/components/modules/select/types";
import {useRouter} from 'next/router';
import { Button } from "../../modules/button";
import { Category, Type } from "@prisma/client";
import axios from 'axios';
import Product from "../profile/Product/Product";
import { TProduct } from "types/product";
import {toast} from "react-hot-toast";
import { SelectSingle } from "../../modules/selectSingle";
import { SelectOption1, SelectOption2 } from "../uploadIdeaDetails/types";

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

const typeOfProduct = [
  { label: "Web", value: Type.WEB },
  { label: "App", value: Type.APP },
  { label: "Extension", value: Type.EXTENSION },
  { label: "Tool", value: Type.TOOL },
  { label: "Chatbot", value: Type.CHATBOT },
  { label: "AI", value: Type.AI },
  { label: "Game", value: Type.GAME },
];



const UploadProductDetails:FC = () => {
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<SelectOption2>();
  const [brief, setBrief] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [link, setLink] = useState<string | undefined>();
  const [image, setImage] = useState<any>();
  const [categories, setCategories] = useState<SelectOption1[]>([]);
  const single: boolean = false;

  const sizeLimit = 10 * 1024 * 1024 // 10MB

  const router = useRouter();
  const [visiblePreview, setVisiblePreview] = useState(false);

  const [uploadingLoading, setUploadLoading] = useState<boolean>(false);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);

  const handleAvatarUpload = async (image: any) => {
    if (!image) return;

    let toastId;
    try {
      toastId = toast.loading('Uploading...');
      const { data } = await axios.post('/api/image-upload', { image });
      setImage(data?.url);
      toast.success('Successfully uploaded', { id: toastId });
    } catch (e) {
      toast.error('Unable to upload', { id: toastId });
      setImage(undefined);
    } 
  };
  

  const handleOnChangeAvatar = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    const fileName = file?.name?.split('.')?.[0] ?? 'New file';

    reader.addEventListener(
      'load',
      async function () {
        try {
          setImage({ src: reader.result, alt: fileName });
          await handleAvatarUpload(reader.result);
        } catch (err) {
          toast.error('Unable to update image');
        }
      },
      false
    );

    if (file) {
      if (file.size <= sizeLimit) {
        reader.readAsDataURL(file);
      } 
    }
  };
  
  const submitData = async (e: React.SyntheticEvent) => {
    setUploadLoading(true);
    e.preventDefault();
    try {
      const data = {
        title, 
        type,
        brief,
        description,
        link, 
        image,
        categories
      } 
      console.log(data);
      const res = await axios.post(`/api/products`, data)
      console.log("upload successfully", res);
      setUploadLoading(false);
      setUploadSuccess(true);
      await router.push('/discover')
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
                Post your product
              </div>
            </div>
            <form className={styles.form}>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.category}>Product Details</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label="Product name"
                      name="Title"
                      type="text"
                      placeholder='e. g. Potata"'
                      required
                      value={title}
                      onChange={(e: any) => setTitle(e.target.value)}
                    />
                    <TextInput
                      className={styles.field}
                      label="Brief"
                      name="Brief"
                      type="text"
                      placeholder="e. g. “Grocery shopping app”"
                      required
                      value={brief}
                      onChange={(e: any) => setBrief(e.target.value)}
                    />
                    <TextArea
                      className={styles.field}
                      label="Description"
                      name="Description"
                      type="text"
                      placeholder="e. g. “An online grocery shopping app that ustilize the shortest path algorithm”"
                      required
                      value={description}
                      onChange={(e: any) => setDescription(e.target.value)}
                    />
                    <TextInput
                      className={styles.field}
                      label="Link to product"
                      name="Link"
                      type="text"
                      placeholder="e. g. “https://potata.com”"
                      required
                      value={link ?? ''}
                      onChange={(e: any) => setLink(e.target.value)}
                    />
                    <div className={styles.field}>
                      <div className={styles.label}>Type of product</div>
                      <SelectSingle
                        multiple={single}
                        options={typeOfProduct}
                        value={type}
                        onChange={o => { 
                          setType(o)
                        }}
                      />
                    </div>
                    <div className={styles.field}>
                      <div className={styles.label}>Categories</div>
                      <Select
                        multiple
                        options={options}
                        value={categories}
                        onChange={o => { 
                          setCategories(o)
                        }}
                      />
                    </div>
                    <div className={styles.file}>
                        <button
                        className={cn(
                            "button-stroke button-small",
                            styles.button
                        )}
                        >
                        Upload
                        </button>
                        <input className={styles.load} type="file" onChange={handleOnChangeAvatar} />
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
                  name="Upload product"
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

export default UploadProductDetails;