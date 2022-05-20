import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '../Generic';
import { Container, Formm, InputPassword, Inputt, Wrapper, Title, Checkboxx, Section, Forgot } from './style'
import { notification } from 'antd';


export const SignIn = () => {

    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      const login = (type) => {
        navigate('/')
        notification[type]({
            message: '',
            description:
              'You have successfully logged in.',
        });
      }
  return (
    <Container>
        <Wrapper>
            <Formm
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Title>Sign in</Title>
                <Inputt width='100%' placeholder='User name' />
                <InputPassword placeholder='Password' />
                <Section>
                    <Checkboxx>Remember me</Checkboxx>
                    <Forgot>Forgot</Forgot>
                </Section>
                <Button onClick={() => login('success')} type={'primary'} mt={15} htmlType="submit">SignIn</Button>
                <div onClick={() => navigate('/register')} className="subtitle center" style={{marginTop: '20px', cursor: 'pointer'}}>Did you Register?</div>
            </Formm>
        </Wrapper>
    </Container>
  )
}

export default SignIn