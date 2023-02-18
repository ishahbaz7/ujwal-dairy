export default function handler(req, res) {
  const products = {
    products: [
      {
        link: "shreekhand",
        title: "Shree Khand",
        description:
          "Shrikhand is like happiness in a bowl - it's sweet, creamy and always satisfying.",
        imgSrc: "/assets/images/products/shreekhand.jpg",
      },
      {
        link: "pedha",
        title: "Pedha",
        description: "A bite of Ujwal dairy's mithai is a bite of happiness",
        imgSrc: "/assets/images/products/pedha.jpg",
      },
      {
        link: "paneer",
        title: "Paneer",
        description:
          "Paneer is a good source of high-quality protein, which is essential for building and maintaining muscle mass.",
        imgSrc: "/assets/images/products/paneer.jpg",
      },
      {
        link: "khawa",
        title: "Khawa / Mawa",
        description:
          "Khoa / Khava / Mava refers to the partially dehydrated whole milk product ",
        imgSrc: "/assets/images/products/khawa.jpg",
      },
      {
        link: "kalakand",
        title: "Kalakand",
        description: "Kalakand is a granular type of multi layered burfi.",
        imgSrc: "/assets/images/products/kalakand.jpg",
      },
      {
        link: "buffalo-ghee",
        title: "Buffalo Ghee",
        description:
          "Rich in nutrients: Buffalo ghee is a good source of fat-soluble vitamins, such as vitamin A, D, and E.",
        imgSrc: "/assets/images/products/buffalo_ghee.jpg",
      },
      {
        link: "dahi",
        title: "Curd (Dahi)",
        description: "Relish the creaminess of curd",
        imgSrc: "/assets/images/products/dahi.jpg",
      },

      {
        link: "milk",
        title: "Milk",
        description:
          "Milk is nature's perfect food - it's nourishing, versatile and essential for growth and development.",
        imgSrc: "/assets/images/products/milk.jpg",
      },

      {
        link: "buttor-milk",
        title: "Tak / Chas",
        description:
          "Tak is also called chhas, refers to desi buttermilk. Bitter milk is always a good option for cooling down our body.",
        imgSrc: "/assets/images/products/butter_milk.jpg",
      },
    ],
  };
  res.status(200).json(products);
}
