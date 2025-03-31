import { useForm, SubmitHandler } from 'react-hook-form';

// Define the type for our form data
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  newsletter: boolean;
}

const useContactForm = () => {
  // Initialize React Hook Form with default values
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      newsletter: false,
    },
  });

  // Form submission handler
  const onSubmit: SubmitHandler<ContactFormData> = () => {
    // In a real application, you would send the form data to a server here
    alert("Message sent! We'll get back to you soon.");
    reset(); // Reset the form using React Hook Form's reset method
  };

  return {
    register,
    errors,
    isSubmitting,
    handleSubmit: handleSubmit(onSubmit),
  };
};

export default useContactForm;
