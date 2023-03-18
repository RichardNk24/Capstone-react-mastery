import './categories.styles.scss'
import { categories } from '../../data/categories'
import CategoryItem from '../category-item/Category-item.component'

const Directory = () => {
    return (
        <div className="categories_container">
            {categories.map((category) => (
            <CategoryItem
            key={category.id}
            category={category}
            />
        ))}
        </div>
    )
}

export default Directory