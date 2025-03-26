import styles from './Tabs.module.scss';
interface TabsProps {
  text: string;
}
const Tabs: React.FC<React.ComponentProps<'button'> & TabsProps> = ({ text, ...props }) => {
  return (
    <button
      className={styles.tabs}
      {...props}
    >{text}</button>
  )
}

export default Tabs;