const TYPESHOP = [
    {
        value: "INDIVIDUAL",
        name: "Cá nhân",
    },
    {
        value: "ENTERPRISE",
        name: "Doanh nghiệp",
    },
];

const STATUSPRODUCT = [
    {
        value: "true",
        name: "Đang bán"
    },
    {
        value: "fasle",
        name: "Ngừng bán"
    },
]

const STATUSORDER = [
    {
        value:"PENDING",
        name:"Chờ xác nhận"
    },
    {
        value:"CONFIRMED",
        name:"Đã phê duyệt"
    },
    {
        value:"DELIVERING",
        name:"Đang vận chuyển"
    },
    {
        value:"DELIVERED",
        name:"Đã nhận hàng"
    },
    {
        value:"CANCELED",
        name:"Đã hủy"
    },
]

export { TYPESHOP, STATUSPRODUCT,STATUSORDER }