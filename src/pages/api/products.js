export default function handler(req, res){
    const products =[
        {
            id:1,
            name:"Small Burger",
            price:25,
            image:"/pj1.jpg",
        },

        {
            id:2,
            name:"LBurger ",
            price:30,
            image:"/pj2.avif",
        },

        {
            id:3,
            name:"XL Burger ",
            price:35,
            image:"/pj.3.jpeg",
        },

        {
            id:4,
            name:"Small Burger",
            price:20,
            image:"/pj4.webp",
        },

        {
            id:5,
            name:"Large Burger",
            price:35,
            image:"/pj5.jpg",
        },

        {
            id:6,
            name:"XL BUrger",
            price:45,
            image:"/pj6.jpg",
        },
    ]
    res.status(200).json(products);
}