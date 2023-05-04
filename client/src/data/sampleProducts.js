import PropTypes from 'prop-types';

function createProduct( name, category, size, color, price, quantity, description, onSale, discount, featured ) {
    return { name, category, size, color, price, quantity, description, onSale, discount, featured }
}

createProduct.propTypes = {
    name: PropTypes.string, 
    category: PropTypes.string, 
    size: PropTypes.string, 
    color: PropTypes.string, 
    price: PropTypes.number,
    quantity: PropTypes.number,
    description: PropTypes.string, 
    onSale: PropTypes.bool,
    discount: PropTypes.number,
    featured: PropTypes.bool
}

const sampleProducts = [
    createProduct("Name", "Category", "Size", "Color", 24.99, 10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", false, 0, false),
    createProduct("Name", "Category", "Size", "Color", 24.99, 10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", false, 0, false),
    createProduct("Name", "Category", "Size", "Color", 24.99, 10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", false, 0, false),
    createProduct("Name", "Category", "Size", "Color", 24.99, 10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", false, 0, false),
    createProduct("Name", "Category", "Size", "Color", 24.99, 10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", false, 0, false),
    createProduct("Name", "Category", "Size", "Color", 24.99, 10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", false, 0, false),
    createProduct("Name", "Category", "Size", "Color", 24.99, 10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", false, 0, false),
    createProduct("Name", "Category", "Size", "Color", 24.99, 10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", false, 0, false),
    createProduct("Name", "Category", "Size", "Color", 24.99, 10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", false, 0, false),
    createProduct("Name", "Category", "Size", "Color", 24.99, 10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", false, 0, false),
]

export default sampleProducts;