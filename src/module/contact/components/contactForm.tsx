// components/ContactForm.tsx

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { object, string } from "yup";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

const validationSchema = object().shape({
  name: string().required("Name is required"),
  email: string().email("Invalid email address").required("Email is required"),
  message: string().required("Message is required"),
});

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    setIsSubmitting(true);
    // Simulate async form submission
    setTimeout(() => {
      console.log(values);
      resetForm();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Grid
            mt={2}
            color={"white"}
            gridTemplateColumns={{ md: "1fr 1fr", base: "1fr" }}
            gap={8}
          >
            <FormControl
              id="name"
              mr={4}
              isInvalid={!!(errors.name && touched.name)}
            >
              <FormLabel color={"#8893BD"}>Name</FormLabel>
              <Field name="name" as={Input} />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl
              //   mt={4}
              id="email"
              isInvalid={!!(errors.email && touched.email)}
            >
              <FormLabel color={"#8893BD"}>Email</FormLabel>
              <Field name="email" type="email" as={Input} />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
          </Grid>
          <FormControl
            id="message"
            isInvalid={!!(errors.message && touched.message)}
          >
            <FormLabel color={"#8893BD"}>Message</FormLabel>
            <Field color="white" name="message" as={Textarea} h="250px" />
            <FormErrorMessage>{errors.message}</FormErrorMessage>
          </FormControl>{" "}
          {/* <Box p={4}>
            <Flex justify="flex-end">
              <button className="border border-white text-white px-8 py-2 rounded-full hover:bg-blue-500">
                Submit
              </button>
            </Flex>
          </Box> */}
          <Button
            mt={4}
            w={"100%"}
            type="submit"
            isLoading={isSubmitting}
            mb={16}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
