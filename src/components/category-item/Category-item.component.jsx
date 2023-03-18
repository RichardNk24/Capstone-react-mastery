import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
    const { id, title, imageUrl } = category;
    return (
        <div className="category_container" key={id}>
            <div 
                className="background_image" 
                style={{ 
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="category_body_container">
                <h2>{title}</h2>
                <h5>Shop Now</h5>
            </div>
        </div>
    )
}

export default CategoryItem;