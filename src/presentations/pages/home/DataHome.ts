import images from "../../../assets/images";

const imageList = [images.banner, images.banner, images.banner];

const sidebarList = [
  {
    src: images.traiCayTuoi,
    text: "Trái cây",
  },
  {
    src: images.raucu,
    text: "Rau củ",
  },
  {
    src: images.thitvaca,
    text: "Thịt và Cá",
  },
  {
    src: images.banh,
    text: "Tiệm bánh và Đồ ăn nhẹ",
  },
  {
    src: images.sua,
    text: "Sữa và Trứng",
  },
  {
    src: images.douong,
    text: "Đồ uống",
  },
  {
    src: images.giavi,
    text: "Gia vị",
  },
];

const suggestProducts = [
  {
    heading: "Hàng mới về",
    productList: [
      {
        productSrc: images.trung,
        productName: "Trứng gà",
        originalPrice: "30.000 đ",
        salePrice: "",
        feedBack: ["*", "*", "*"],
        sold: "63",
      },
      {
        productSrc: images.rauSach,
        productName: "Rau sạch",
        originalPrice: "150.000 đ",
        salePrice: "126.955 đ",
        feedBack: ["*", "*", "*", "*", "*"],
        sold: "13",
      },
      {
        productSrc: images.cangu,
        productName: "Cá ngừ",
        originalPrice: "45.000 đ",
        salePrice: "32.000 đ",
        feedBack: ["*", "*", "*", "*"],
        sold: "20",
      },
      
    ],
  },
  {
    heading: "Sản phẩm bán chạy",
    productList: [
      {
        productSrc: images.rauSach,
        productName: "Rau sạch",
        originalPrice: "150.000 đ",
        salePrice: "126.955 đ",
        feedBack: ["*", "*", "*", "*", "*"],
        sold: "120",
      },
      {
        productSrc: images.cason,
        productName: "Cá sơn",
        originalPrice: "35.000 đ",
        salePrice: "",
        feedBack: ["*", "*", "*", "*"],
        sold: "50",
      },
      {
        productSrc: images.thitsuon,
        productName: "Thịt sườn",
        originalPrice: "93.000 đ",
        salePrice: "",
        feedBack: ["*", "*", "*", "*", "*"],
        sold: "110",
      },
    ],
  },
  {
    heading: "Sản phẩm giảm giá",
    productList: [
      {
        productSrc: images.pseudo,
        productName: "Cá hồi",
        originalPrice: "250.000 đ",
        salePrice: "226.955 đ",
        feedBack: ["*", "*", "*", "*", "*"],
        sold: "333",
      },
      {
        productSrc: images.chuoiHuong,
        productName: "Chuối hương",
        originalPrice: "35.000 đ",
        salePrice: "",
        feedBack: ["*", "*", "*", "*"],
        sold: "63",
      },
      {
        productSrc: images.trung,
        productName: "Trứng vịt",
        originalPrice: "32.000 đ",
        salePrice: "",
        feedBack: ["*", "*", "*", "*", "*"],
        sold: "663",
      },
    ],
  },
];

const productList = [
  {
    productSrc: images.rauSach,
    productName: "Rau sạch",
    originalPrice: "150.000 đ",
    salePrice: "126.955 đ",
    feedBack: ["*", "*", "*", "*", "*"],
    sold: "120",
  },
  {
    productSrc: images.chuoiHuong,
    productName: "Chuối hương",
    originalPrice: "59.000đ",
    salePrice: "35.000đ",
    feedBack: ["*", "*", "*", "*", "*"],
    sold: "93",
  },
  {
    productSrc: images.trung,
    productName: "Trứng gà",
    originalPrice: "30.000đ",
    salePrice: "",
    feedBack: ["*", "*", "*"],
    sold: "63",
  },
  {
    productSrc: images.pseudo,
    productName: "Cá hồi",
    originalPrice: "259.000đ",
    salePrice: "235.000đ",
    feedBack: ["*", "*", "*", "*", "*"],
    sold: "120",
  },
  {
    productSrc: images.cangu,
    productName: "Cá ngừ",
    originalPrice: "49.000đ",
    salePrice: "35.000đ",
    feedBack: ["*", "*", "*", "*", "*"],
    sold: "23",
  },
  {
    productSrc: images.cason,
    productName: "Cá sơn",
    originalPrice: "39.000đ",
    salePrice: "25.000đ",
    feedBack: ["*", "*", "*", "*", "*"],
    sold: "13",
  },
  {
    productSrc: images.thitsuon,
    productName: "Thịt sườn",
    originalPrice: "99.000đ",
    salePrice: "85.000đ",
    feedBack: ["*", "*", "*", "*", "*"],
    sold: "163",
  },
];

export { imageList, sidebarList, suggestProducts, productList };
