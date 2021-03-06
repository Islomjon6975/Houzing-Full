import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../Generic';
import { Container, Formm, Wrapper, Title, Checkboxx, Section, Forgot } from './style'
import { useMutation } from 'react-query';

const {REACT_APP_BASE_URL:url} = process.env


export const SignIn = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onFinish = (values) => {
      // console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      // console.log('Failed:', errorInfo);
    };

    // useQuery('', ()=>{})
    const {mutate} = useMutation(
      () => {
        return fetch(`${url}/public/auth/login`, 
          {method: 'POST', 
          body: JSON.stringify({email, password}), 
          headers: {
            'Content-type':'application/json'
          }
        }).then((res) => res.json())
      },
      
    )

    const onSubmit = () => {
      mutate({}, {
        onSuccess: (res) => {
          localStorage.setItem('token', res?.authenticationToken)
          if(res?.authenticationToken){
            navigate('/myproperties')
          }
          console.log(res, 'resssssssssssssssssssssssssss')
        },
        onError: (res) => {
          
        }
      });
      
      // notification[]({
      //     message: '',
      //     description:
      //       'You have successfully logged in.',
      // });
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
                <Input onChange={({target}) => setEmail(target?.value)} value={email} mb={20} width='100%' placeholder='User name' />
                <Input type='password' onChange={({target}) => setPassword(target?.value)} value={password} placeholder='Password' />
                <Section>
                    <Checkboxx>Remember me</Checkboxx>
                    <Forgot>Forgot</Forgot>
                </Section>
                <Button onClick={onSubmit} type={'primary'} mt={15} htmlType="submit">SignIn</Button>
                <div onClick={() => navigate('/register')} className="subtitle center" style={{marginTop: '20px', cursor: 'pointer'}}>Did you Register?</div>
            </Formm>
        </Wrapper>
    </Container>
  )
}

export default SignIn