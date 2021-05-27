import { useFormik } from 'formik';
import { Container } from 'components/Layout';
import { useHistory } from 'react-router-dom';
import { Form, Box, StyledTextField, SubmitButton, StyledTypography } from '../LoginForm/styles';

const Register: React.FC = () => {
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            password2: '',
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
            history.push('/dashboard');
        }
    });
    
    return (
        <Container center fullScreen>
            <Form onSubmit={formik.handleSubmit}>
                <Box>
                    <StyledTypography>Login:</StyledTypography>
                    <StyledTextField
                        variant="outlined"
                        name="username"      
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    />
                </Box>
                <Box>
                    <StyledTypography>Hasło:</StyledTypography>
                    <StyledTextField
                        variant="outlined"
                        name="password" 
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        type="password"
                    />
                </Box>
                <Box>
                    <StyledTypography>Potwierdź hasło:</StyledTypography>
                    <StyledTextField
                        variant="outlined"
                        name="password2"      
                        onChange={formik.handleChange}
                        value={formik.values.password2}
                        type="password"
                    />
                </Box>
                <SubmitButton type="submit">register</SubmitButton>
            </Form>
        </Container>
    );
};

export default Register;
