import { useFormik } from 'formik';
import { Typography } from '@material-ui/core';
import { Container } from 'components/Layout';
import { useHistory } from 'react-router-dom';
import { Form, Box, StyledTextField, SubmitButton, RegisterLink } from './styles';

const Login: React.FC = () => {
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (values) => {
            history.push('/dashboard');
        }
    });
    return (
        <Container center>
            <Form onSubmit={formik.handleSubmit}>
                <Box>
                    <Typography>Login:</Typography>
                    <StyledTextField
                        variant="outlined"
                        name="username"      
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    />
                </Box>
                <Box>
                    <Typography>Hasło:</Typography>
                    <StyledTextField
                        variant="outlined"
                        name="password" 
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        type="password"
                    />
                </Box>
                <SubmitButton type="submit">ok</SubmitButton>
                <RegisterLink onClick={() => history.push('/register')}>Register</RegisterLink>
            </Form>
        </Container>
    );
};

export default Login;
