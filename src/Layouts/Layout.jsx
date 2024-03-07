import styles from '../Layouts/Layout.module.css'
import { IoHeart } from "react-icons/io5";
const Layout = ({children}) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>Jamal Shamsi <span>| React.js</span></p> 
      </header>
      {children}
      <footer className={styles.footer}>Develpoed by Jamal Shamsi <IoHeart /></footer>
    </>
  )
}

export default Layout
