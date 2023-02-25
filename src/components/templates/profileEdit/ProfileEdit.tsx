/* eslint-disable @next/next/no-img-element */
import React, { FC , useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import styles from "./ProfileEdit.module.sass";
import {Control} from "../../modules/control";
import {TextInput} from "../../modules/textInput";
import {TextArea} from "../../modules/textArea";
import {Icon} from "../../modules/icon";
import { IProfileEdit } from "./types";
import { Button } from "../../modules/button";
import axios from "axios";
import { toast } from 'react-hot-toast';

const ProfileEdit: FC<IProfileEdit> = ({ user }) => {
  const [name, setName] = useState<string>(user.name);
  const [bio, setBio] = useState<string>(user.bio);
  const [facebook, setFacebook] = useState<string>(user.facebook);
  const [twitter, setTwitter] = useState<string>(user.twitter);
  const [instagram, setInstagram] = useState<string>(user.instagram);
  const [editLoading, setEditLoading] = useState<boolean>(false);
  const [editSuccess, setEditSuccess] = useState<boolean>(false);
  const [avatarUrl, setAvatarUrl] = useState<string>(user.image);
  const [image, setImage] = useState<any>();

  const sizeLimit = 10 * 1024 * 1024 // 10MB

  const router = useRouter();
  const { id } = router.query;

  const breadcrumbs = [
    {
      title: "Profile",
      url: `/profile/${id}`,
    },
    {
      title: "Edit Profile",
    },
  ];

  const handleAvatarUpload = async (image: any) => {
    if (!image) return;

    let toastId;
    try {
      toastId = toast.loading('Uploading...');
      const { data } = await axios.post('/api/image-upload', { image });
      console.log(data);
      setAvatarUrl(data?.url);
      toast.success('Successfully uploaded', { id: toastId });
    } catch (e) {
      toast.error('Unable to upload', { id: toastId });
      setAvatarUrl('');
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

  const handleUpdateProfile = async () => {
    setEditLoading(true);
    console.log("ava", avatarUrl);
    try {
      const data = {
        name,
        bio,
        facebook,
        twitter,
        instagram,
        image: avatarUrl
      }
  
      const res = await axios.put(`/api/profile-edit/${id}`, data);
      console.log('update profile res', res);
      setEditLoading(false);
      setEditSuccess(true);
      router.push(`/profile/${id}`);
    } catch (err) {
      console.log(err);
      setEditLoading(false);
      setEditSuccess(false);
    }
  }

  return (
    <div className={styles.page}>
      <Control className={styles.control} item={breadcrumbs} />
      <div className={cn("section-pt80", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.top}>
            <h1 className={cn("h2", styles.title)}>Edit profile</h1>
            <div className={styles.info}>
              You can set preferred display name, create{" "}
              <strong>your profile URL</strong> and manage other personal
              settings.
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.user}>
                <div className={styles.avatar}>
                  <img src={image?.src ? image?.src : (avatarUrl ? avatarUrl: "/images/content/avatar-1.jpg")} alt="Avatar" />
                </div>
                <div className={styles.details}>
                  <div className={styles.stage}>Profile photo</div>
                  <div className={styles.text}>
                    We recommend an image of at least 400x400. Gifs work too{" "}
                    <span role="img" aria-label="hooray">
                      🙌
                    </span>
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
            <div className={styles.col}>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.category}>Account info</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label="display name"
                      name="Name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your display name"
                      required
                    />
                    
                    <TextArea
                      className={styles.field}
                      label="Bio"
                      name="Bio"
                      type="text"
                      placeholder="About yourselt in a few words"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.category}>Social</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label="Facebook"
                      name="Facebook"
                      type="text"
                      placeholder="Enter Facebook profile"
                      value={facebook}
                      onChange={(e) => setFacebook(e.target.value)}
                      required={false}
                    />
                    <TextInput
                      className={styles.field}
                      label="twitter"
                      name="Twitter"
                      type="text"
                      placeholder="Enter Twitter profile"
                      value={twitter}
                      onChange={(e) => setTwitter(e.target.value)}
                      required={false}
                    /> 
                    <TextInput
                      className={styles.field}
                      label="Instagram"
                      name="Instagram"
                      type="text"
                      placeholder="Enter Instagram profile"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      required={false}
                    /> 
                    
                  </div>
                  
                </div>
              </div>
              
              <div className={styles.btns}>
                <Button
                  loading={editLoading}
                  success={editSuccess}
                  disabled={false}
                  name="Update Profile"
                  onClick={async () => {
                    await handleUpdateProfile();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
