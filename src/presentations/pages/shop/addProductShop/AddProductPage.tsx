import React, { useState } from 'react'
import InfoMyShopLayout from '../InfoMyShopLayout'
import { Grid } from '@mui/material'
import { PlusOutlined, DownOutlined } from '@ant-design/icons';
import type { MenuProps, UploadFile, UploadProps } from 'antd';
import { Input, Upload, Modal, Dropdown, Button, Space, message } from 'antd';
// Styles
import classNames from "classnames/bind";
import styles from "./AddProduct.module.scss";

const cx = classNames.bind(styles);

const AddProductPage = () => {
    //thêm ảnh
    type FileType = UploadFile;

    const getBase64 = (file: FileType): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj as Blob);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
    const [fileList, setFileList] = useState<UploadFile[]>([
        {
            uid: '1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '2',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '3',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '4',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ]);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
        setFileList(newFileList);

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            <PlusOutlined rev={undefined} />
            <div style={{ marginTop: 8 }}>Thêm ảnh</div>
        </button>
    );
    // dropdown danh mục sản phẩm
    const items: MenuProps["items"] = [
        {
            label: "1st menu item",
            key: "1",
        },
        {
            label: "2nd menu item",
            key: "2",
        },
        {
            label: "3rd menu item",
            key: "3",

            danger: true,
        },
        {
            label: "4rd menu item",
            key: "4",
        },
    ];
    const handleMenuClick: MenuProps["onClick"] = (e) => {
        message.info("Click on menu item.");
        // console.log("click", e);
    };
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    return (
        <InfoMyShopLayout>
            <Grid>
                <Grid className={cx("wapper")}>
                    <h2 className={cx("heading")}>Tạo sản phẩm</h2>
                    <Grid className={cx("container")}>
                        <Grid item lg={6.5} className={cx("part-one")}>
                            <h3>Thông tin chung</h3>
                            <Grid>
                                <p>Tên sản phẩm</p>
                                <Input placeholder='Nhập tên sản phẩm' />
                            </Grid>
                            <Grid className={cx("product-code")}>
                                <Grid className={cx("type-input")}>
                                    <p>Mã sản phẩm</p>
                                    <Input />
                                </Grid>
                                <Grid className={cx("type-input")}>
                                    <p>Khối lượng</p>
                                    <Input />
                                </Grid>
                            </Grid>
                            <Grid className={cx("product-code")}>
                                <Grid className={cx("type-input")}>
                                    <p>Mã vạch (nếu có )</p>
                                    <Input />
                                </Grid>
                                <Grid className={cx("type-input")}>
                                    <p>Đơn vị tính</p>
                                    <Input />
                                </Grid>
                            </Grid>
                            <Grid className={cx("price-product")}>
                                <Grid className={cx("details")}>
                                    <p onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}>
                                        Mô tả sản phẩm
                                    </p>
                                    {isDescriptionVisible && <Input placeholder='Nhập mô tả sản phẩm' />}
                                </Grid>
                                <h3>Giá sản phẩm</h3>
                                <Grid className={cx("price-product")}>
                                    <Grid className={cx("type-input")}>
                                        <p>Giá bán lẻ</p>
                                        <Input />
                                    </Grid>
                                    <Grid className={cx("type-input")}>
                                        <p>Giá khuyến mãi</p>
                                        <Input />
                                    </Grid>
                                </Grid>
                                <Grid className={cx("img-product")}>
                                    <h3>Ảnh sản phẩm</h3>
                                    <Upload
                                        className={cx("img-product")}
                                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={handlePreview}
                                        onChange={handleChange}
                                    >
                                        {fileList.length >= 10 ? null : uploadButton}
                                    </Upload>
                                    <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                    </Modal>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={4} className={cx("part-two")}>
                            <Grid className={cx("category-product")}>
                                <h3>Thông tin bổ sung</h3>
                                <Grid className={cx("menu-item")}>
                                    <p>Danh mục sản phẩm</p>
                                    <Dropdown menu={menuProps}>
                                        <Button className={cx("dropdown")}>
                                            <Space>
                                                Chọn danh mục
                                                <DownOutlined rev={undefined} />
                                            </Space>
                                        </Button>
                                    </Dropdown>
                                </Grid>
                                <Grid className={cx("menu-item")}>
                                    <p>Nhãn hiệu</p>
                                    <Dropdown menu={menuProps}>
                                        <Button className={cx("dropdown")}>
                                            <Space>
                                                Chọn nhãn hiệu
                                                <DownOutlined rev={undefined} />
                                            </Space>
                                        </Button>
                                    </Dropdown>
                                </Grid>
                            </Grid>
                            <Grid className={cx("status")}>
                                <p>Trạng thái</p>
                                <a>Chờ xét duyệt</a>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={cx("btn-save")}>
                        <Button>Lưu sản phẩm</Button>
                    </Grid>

                </Grid>
            </Grid>
        </InfoMyShopLayout>
    )
}

export default AddProductPage
