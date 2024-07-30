import { Layout } from "../../compontents/layout";
import { Row, Card, Form, Space, Typography } from 'antd';
import { CustomInput } from "../../compontents/custom-input";
import { PasswordInput } from "../../compontents/password-input";
import { CustomButton } from "../../compontents/custom-button";
import { Link, useNavigate } from "react-router-dom"
import { Paths } from "../../paths";
import { useLoginMutation, UserData } from "../../app/services/auth";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import {useState} from 'react';
import { ErrorMessage } from "../../compontents/error-message";

export const Login = () => {

  const navigate = useNavigate();
  
  const[loginUser, loginUserResult]= useLoginMutation();
  
  const [error, setError] = useState('')
  
  
  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();

      navigate("/")

    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError("Неизвестная ошибка");
      }
    }
  };


  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title='Войдите' style={{width: "30rem"}}>
          <Form onFinish={login}>
            <CustomInput type="email" name="email" placeholder="Email"/>
            <PasswordInput name="password" placeholder="Пароль"/>
            <CustomButton type="primary" htmlType="submit">
              Войти
            </CustomButton>  
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Нет аккаунта? <Link to={Paths.register}>Зарегистрируйтесь</Link>
            </Typography.Text>
            <ErrorMessage message={ error }/>
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}

export default Login