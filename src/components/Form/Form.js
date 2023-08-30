import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { usePosts } from "../store/usePosts";
import { useUsers } from "../store/useUsers";

export default function Form() {
   const [postText, setPostText] = useState("");

   const { users } = useUsers();
   const { push, posts } = usePosts();

   const addNewPost = () => {
      push(2, postText, users[0].name);
      setPostText("");
   };

   useEffect(() => {
      console.log(posts);
   }, posts);

   return (
      <div className={styles.form}>
         <div className={styles.form__information}>
            <img
               src="img/user.png"
               className={styles.form__information__icon}
            />
            <input
               type="text"
               className={styles.form__information__input}
               onChange={(e) => {
                  setPostText(e.target.value);
               }}
               value={postText}
               placeholder="What is happening?!"
            />
         </div>
         <button
            onClick={addNewPost}
            className={
               postText
                  ? styles.form__add__button__active
                  : styles.form__add__button__disabled
            }
            disabled={!postText}
         >
            Tweet
         </button>
      </div>
   );
}
