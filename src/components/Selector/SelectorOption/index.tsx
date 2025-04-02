// import styles from './SelectorOption.module.css'

interface SelectorOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
    value: string,
    label: string
}

const SelectorOption = ({ value, label, ...rest }: SelectorOptionProps) => {
    return (
        <option value={value} {...rest}>{label}</option>
    )
}

export default SelectorOption