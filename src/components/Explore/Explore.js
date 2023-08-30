import styles from "./Explore.module.css";

import { FiSettings, FiSearch } from "react-icons/fi"

export default function Explore() {
   return (
      <div className={styles.explore}>
         <div className={styles.explore__header}>
            <div className={styles.explore__header__search}>
               <div className={styles.search__icon}>
                  <FiSearch />
               </div>
               <input
                  type="text"
                  className={styles.search__input}
                  placeholder="Search"
               />
            </div>
            <div className={styles.explore__header__icon}><FiSettings /></div>
         </div>
      </div>
   );
}
