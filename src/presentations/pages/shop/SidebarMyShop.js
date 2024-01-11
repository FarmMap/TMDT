
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import GridViewIcon from "@mui/icons-material/GridView";
export const sidebarList = [
    {
        title: "Thông tin cửa hàng",
        path: "/cua-hang/cua-hang-cua-toi",
        icon: <StoreOutlinedIcon />
    },
    {
        title: "Danh sách đơn hàng",
        path: "/cua-hang/danh-sach-don-hang",
        icon: <ReceiptLongOutlinedIcon />
    },
    {
        title: "Danh sách sản phẩm",
        path: "/cua-hang/danh-sach-san-pham",
        icon: <ProductionQuantityLimitsOutlinedIcon />
    },
    {
        title: "Dánh sách danh mục",
        path: "/cua-hang/danh-sach-danh-muc",
        icon: <GridViewIcon />
    },
]