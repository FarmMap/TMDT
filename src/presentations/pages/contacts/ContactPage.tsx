import React from 'react'
import DefaultLayOut from '../../components/defaultLayOut/DefaultLayOut';
import { Grid } from '@mui/material';

// Styles
import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { Button, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';


const cx = classNames.bind(styles);
const ContactPage = () => {
    return (
        <DefaultLayOut>
            <Grid className={cx("wapper")}>
                <Grid className={cx("heading")}>
                    <h1>Liên hệ</h1>
                    <h3>CLB Đầu Tư Và Khởi Nghiệp Tỉnh Long An</h3>
                </Grid>
                <Grid className={cx("section")}>
                    <Grid className={cx("profile")}>
                        <h3>Thông tin liên hệ</h3>
                        <p>Trụ sở: Tỉnh Đoàn Đồng Nai 33 Đ. Võ Thị Sáu, Quyết Thắng, Thành phố Biên Hòa, Đồng Nai</p>
                        <p>Điện thoại: 0902.67.1111 - 0898.798.368</p>
                        <p>Email: dntdongnai@gmail.com</p>
                    </Grid>
                    <Grid className={cx("form-contact")}>
                        <h3>Form liên hệ</h3>
                        <Input placeholder='Họ và tên' />
                        <Input placeholder='Số điện thoại' />
                        <TextArea className={cx("text")} rows={4} placeholder="Nội dung" />
                        <Grid className={cx("btn-send")}>
                            <Button>Gửi liên hệ</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid style={{display:"flex", justifyContent:"center"}}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2720818624816!2d106.70849617405355!3d10.790461089359118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b29af3c117%3A0xd41d6a60e0a9fc5e!2zNzlhIFBo4bqhbSBWaeG6v3QgQ2jDoW5oLCBQaMaw4budbmcgMTksIELDrG5oIFRo4bqhbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1705653912711!5m2!1svi!2s"
                        width="1400"
                        height="400"
                        style={{ border: '0' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Grid>
            </Grid>
        </DefaultLayOut>
    )
}

export default ContactPage
