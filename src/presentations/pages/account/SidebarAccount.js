import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
export const sidebarList = [
    {
        title: "Tài khoản của tôi",
        path: "/tai-khoan/trang-ca-nhan",
        icon: <PersonOutlineOutlinedIcon />
    },
    {
        title: "Đơn mua",
        path: "/tai-khoan/don-mua",
        icon: <SellOutlinedIcon />
    },
    {
        title: "Cửa hàng",
        path: "/tai-khoan/cua-hang",
        icon: <AddBusinessOutlinedIcon />
    },
    {
        title: "Kho",
        path: "/tai-khoan/kho",
        icon: <WarehouseOutlinedIcon />
    },
]