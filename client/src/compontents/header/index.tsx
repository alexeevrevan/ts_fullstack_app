import styles from './index.module.css';
import {Layout, Space, Typography} from 'antd';
import {TeamOutlined, UserOutlined, LoginOutlined} from '@ant-design/icons';
import { CustomButton } from '../custom-button';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';


export const Header = () => {
    return (
        <Layout.Header className={styles.header}>
            <Space>
                <TeamOutlined className={styles.teamIcon}/>
                <Link to={Paths.home}>
                    <CustomButton type='ghost'>
                        <Typography.Title level={1} style={{marginBottom: '10px'}}>Сотрудник</Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
            <Space>
                <Link to={Paths.register}>
                    <CustomButton type='ghost' icon={ <UserOutlined/>}>Зарегистрироваться</CustomButton>
                </Link>
                <Link to={Paths.login}>
                    <CustomButton type='ghost' icon={ <LoginOutlined/>}>Войти</CustomButton>
                </Link>
            </Space>
        </Layout.Header>
    )
}