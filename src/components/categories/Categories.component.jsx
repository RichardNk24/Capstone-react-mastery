import './categories.styles.scss'
import { categories } from '../../data/categories'
import CategoryItem from '../category-item/Category-item.component'

const Directory = () => {
    return (
        <>
            {categories.map((category) => (
            <CategoryItem
            key={category.id}
            category={category}
            />
        ))}
        </>
    )
}

export default Directory