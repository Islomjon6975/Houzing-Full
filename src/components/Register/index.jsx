    import React from 'react'
    import { useNavigate } from 'react-router-dom';
    import { Button } from '../Generic';
    import { Container, Formm, InputPassword, Inputt, Wrapper, Title } from './style'
    import { notification } from 'antd';


    export const Register = () => {
        const navigate = useNavigate();

        const onFinish = (values) => {
            console.log('Success:', values);
        };
        
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };

        

        const register = (type) => {
            navigate('/signin')
            notification[type]({
                message: '',
                description:
                  'You have successfully registered.',
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
                    <Title>Registration</Title>
                    <Inputt width='100%' placeholder='Surname' />
                    <Inputt width='100%' placeholder='First name' />
                    <Inputt width='100%' placeholder='Last name' />
                    <Inputt width='100%' placeholder='Email' />
                    <Inputt width='100%' placeholder='User role' />
                    <InputPassword placeholder='Password' />
                    <InputPassword placeholder='Re-enter password' />
                    <Button onClick={() => register('success')} type={'primary'} mt={15} htmlType="submit">Register</Button>
                    <div onClick={() => navigate('/signin')} className="subtitle center" style={{marginTop: '20px', cursor: 'pointer'}}>Have you already registered?</div>
                    
                </Formm>
            </Wrapper>
        </Container>
    )
    }

    export default Register