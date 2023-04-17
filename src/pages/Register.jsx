import { useFormik } from 'formik';
import { Box, Button, FormLabel, Input, VStack } from '@chakra-ui/react';
import { register } from '../redux/auth/auth-operation';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(register(values));
    },
  });
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <VStack>
          <FormLabel fontSize="24px" htmlFor="email">
            Your name
          </FormLabel>
          <Input
            fontSize="24px"
            w="400px"
            h="50px"
            id="name"
            name="name"
            type="text"
            variant="filled"
            onChange={formik.handleChange}
            value={formik.values.name}
          />

          <FormLabel fontSize="24px" htmlFor="email">
            Email Address
          </FormLabel>
          <Input
            fontSize="24px"
            w="400px"
            h="50px"
            id="email"
            name="email"
            type="email"
            variant="filled"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <FormLabel fontSize="24px" htmlFor="password">
            Password
          </FormLabel>
          <Input
            fontSize="24px"
            w="400px"
            h="50px"
            id="password"
            name="password"
            type="password"
            variant="filled"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <Button
            fontSize="24px"
            type="submit"
            colorScheme="red"
            width="300px"
            h="50px"
          >
            Sign Up
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
