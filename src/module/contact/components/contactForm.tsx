// components/ContactForm.tsx

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { object, string } from "yup";
// import route from "../../../app/api/mail";
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
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    setIsSubmitting(true);
    // Simulate async form submission
    setTimeout(async () => {
      console.log(values);

      const response = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (response.status == 200) {
        toast({
          title: "Success",
          description: "Message Sent successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        resetForm();
        setIsSubmitting(false);
      } else {
        toast({
          title: "Error.",
          description: "Unable to send mail",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
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
            mt={8}
            id="message"
            isInvalid={!!(errors.message && touched.message)}
          >
            <FormLabel color={"#8893BD"}>Message</FormLabel>
            <Field color="white" name="message" as={Textarea} h="250px" />
            <FormErrorMessage>{errors.message}</FormErrorMessage>
          </FormControl>{" "}
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
