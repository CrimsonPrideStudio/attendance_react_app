import styled from 'styled-components';

const Body = styled.body`
    margin: 0;
    padding: 0;
    font-family: 'DM Sans', sans-serif;
    background: linear-gradient(120deg, #e63946, #f1faee, #a8dadc);
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Center = styled.div`
    width: 400px;
    background: white;
    border-radius: 10px;
`;

const Title = styled.h1`
    text-align: center;
    padding: 0 0 20px 0;
    border-bottom: 1px solid silver;
`;

const Form = styled.form`
    padding: 0 40px;
    box-sizing: border-box;
`;

const TxtField = styled.div`
    position: relative;
    border-bottom: 2px solid #adadad;
    margin: 30px 0;
`;

const Input = styled.input`
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    background: none;
    outline: none;
`;

const Span = styled.span`
    &::before {
        content: '';
        position: absolute;
        top: 40px;
        left: 0;
        width: 0;
        height: 3px;
        background: #457b9d;
        transition: 0.5s;
    }

    ${Input}:focus ~ &::before {
        width: 100%;
    }
`;

const Pass = styled.div`
    margin: -5px 0 20px 5px;
    color: #a6a6a6;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const SubmitButton = styled.input`
    width: 100%;
    height: 50px;
    border: 1px solid;
    background: #457b9d;
    border-radius: 25px;
    font-size: 18px;
    color: white;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    margin-bottom: 5px;
`;

function Login() {
    return (
        <Body>
            <Center>
                <Title>Login</Title>
                <Form method="post">
                    <TxtField>
                        <Input type="text" required placeholder="Username" />
                        <Span />
                    </TxtField>
                    <TxtField>
                        <Input type="password" required placeholder="Password" />
                        <Span />
                    </TxtField>
                    <Pass>Forgot Password?</Pass>
                    <SubmitButton type="submit" value="Login" />
                </Form>
            </Center>
        </Body>
    );
}

export default Login;