import styles from "@/components/sections/Desc1/Desc1.module.css"
import SimpleSection from "@/components/atoms/SimpleSection/SimpleSection"

const Desc1 = () => {
    return (
        <div>
            <SimpleSection className={styles.section} text="aaa" imageUrl="/images/banda/9.jpg"/>
        </div>
    )
}

export default Desc1