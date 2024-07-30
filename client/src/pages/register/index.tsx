import { Layout } from "../../compontents/layout";
import { Row, Card, Form, Space, Typography } from 'antd';
import { CustomInput } from "../../compontents/custom-input";
import { PasswordInput } from "../../compontents/password-input";
import { CustomButton } from "../../compontents/custom-button";
import { Link } from "react-router-dom"
import { Paths } from "../../paths";


export const Register = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title='Зарегистрируйтесь' style={{width: "30rem"}}>
          <Form onFinish={() => null}>
            <CustomInput type="name" name="name" placeholder="Имя"/>
            <CustomInput type="email" name="email" placeholder="Email"/>
            <PasswordInput name="password" placeholder="Пароль"/>
            <PasswordInput name="confirmPassword" placeholder="Подвердите пароль"/>
            <CustomButton type="primary" htmlType="submit">
              Зарегистрироваться
            </CustomButton>  
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Уже зарегистрировались? <Link to={Paths.login}>Войти</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}

export default Register