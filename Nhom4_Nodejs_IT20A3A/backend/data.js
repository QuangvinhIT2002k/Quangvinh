import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: "bisu",
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('admin'),
            isAdmin: true
        },
        {
            name: "toan",
            email: 'toanwebcode@gmail.com',
            password: bcrypt.hashSync('ricpe'),
            isAdmin: false
        },
    ],

    sliderItems: [
        {
            image: "/images/slider/1.jpg"
        },
        {
            image: "/images/slider/2.jpg"
        },
        {
            image: "/images/slider/3.jpg"
        },
    ],

    category: [
        {
            //_id: 1,
            title: "javascript",
            image: "/images/category/javascript.jpg"
        }, 
        {
            //_id: 2,
            title: "reactjs",
            image: "/images/category/reactjs.jpg"
        },
        {
            //_id: 3,
            title: "mongodb",
            image: "/images/category/mongodb.jpg"
        }
    ],

    products: [
        {
            //_id: 1,
            title: "JavaScript Basic",
            slug: 'product1',
            desc: "Description for JavaScript 1 ",
            category: "javascript",
            image: "/images/products/9.jpeg",
            image1: "/images/products/10.jpeg",
            image2: "/images/products/11.jpeg",
            image3: "/images/products/12.jpeg",
            countInStock: 0,
            price: "80.00",
        },
        {
            //_id: 2,
            title: "JavaScript 2",
            slug: 'product2',
            desc: "Description for Product 2",
            category: "javascript",
            image: "/images/products/1.jpeg",
            image1: "/images/products/2.jpeg",
            image2: "/images/products/3.jpeg",
            image3: "/images/products/4.jpeg",
            countInStock: 5,
            price: "65.00",
        },
        {
            //_id: 3,
            title: "JavaScript 3",
            slug: 'product3',
            desc: "Description for Product 3",
            category: "javascript",
            image: "/images/products/5.jpeg",
            image1: "/images/products/6.jpeg",
            image2: "/images/products/7.jpeg",
            image3: "/images/products/8.jpeg",
            countInStock: 10,
            price: "72.99",
        },
        {
            //_id: 4,
            title: "javascript 4",
            slug: 'product4',
            desc: "Description for Product 4",
            category: "javascript",
            image: "/images/products/33.jpeg",
            image1: "/images/products/34.jpeg",
            image2: "/images/products/35.jpeg",
            image3: "/images/products/36.jpeg",
            countInStock: 4,
            price: "92.00",
        },
        {
            //_id: 5,
            title: "reactjs 5",
            slug: 'product5',
            desc: "Description for reactjs 4",
            category: "reactjs",
            image: "/images/products/17.jpeg",
            image1: "/images/products/18.jpeg",
            image2: "/images/products/19.jpeg",
            image3: "/images/products/20.jpeg",
            countInStock: 11,
            price: "87.00",
        },
        {
            //_id: 6,
            title: "reactjs 6",
            slug: 'product6',
            desc: "Description for reactjs 4",
            category: "reactjs",
            image: "/images/products/13.jpeg",
            image1: "/images/products/14.jpeg",
            image2: "/images/products/15.jpeg",
            image3: "/images/products/16.jpeg",
            countInStock: 12,
            price: "62.00",
        },
        {
            //_id: 7,
            title: "reactjs 7",
            slug: 'product7',
            desc: "Description for reactjs 4",
            category: "reactjs",
            image: "/images/products/21.jpeg",
            image1: "/images/products/22.jpeg",
            image2: "/images/products/23.jpeg",
            image3: "/images/products/24.jpeg",
            countInStock: 15,
            price: "76.00",
        },
        {
            //_id: 8, default in db
            title: "reactjs 8",
            slug: 'product8',
            desc: "Description for reactjs 4",
            category: "reactjs",
            image: "/images/products/25.jpeg",
            image1: "/images/products/26.jpeg",
            image2: "/images/products/27.jpeg",
            image3: "/images/products/28.jpeg",
            countInStock: 13,
            price: "45.00",
        },
    ]
}

export default data;