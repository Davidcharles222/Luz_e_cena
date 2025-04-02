import styles from './MenuList.module.css'

export const MenuList = ({ children }: React.HTMLAttributes<HTMLUListElement>) => {
    return (
        <nav>
            <ul className={styles.navegacao}>{children}</ul>
        </nav>
    )
}
export default MenuList
