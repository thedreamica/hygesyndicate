import styles from "./heading.module.css";

const Underline = ({...props}) => {
    return <svg width="327" height="12" viewBox="0 0 327 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M327 11.5L-9.61651e-07 11.5L0 0.5L327 0.500029L327 11.5Z" fill="#FDC221" fill-opacity="0.41"/>
    </svg> 
}

const Heading = ({ text }: { text: string }) => {
  return <div className={styles.wrapper}>
    <p className={styles.heading}>{text}</p>
    <Underline className={styles.underline}/>
  </div>;
};

export default Heading;
