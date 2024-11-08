'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'; // Adjust according to your actual imports
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+1) 708-224-8846',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'devohn99@outlook.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Chicago, IL, USA',
  },
];

const Contact = () => {
  // Initialize form data state
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '', // Ensure this matches the default state needed for your select component
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  // Special handle change for Select component if needed
  const handleSelectChange = (value) => {
    // Update the service directly based on selection
    setFormData((prevState) => ({ ...prevState, service: value }));
  };

  // Form validation
  const validateForm = () => {
    let errors = {};
    if (!formData.firstname.trim()) errors.firstname = 'Firstname is required';
    if (!formData.lastname.trim()) errors.lastname = 'Lastname is required';
    if (!formData.email.trim()) errors.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = 'Email address is invalid';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.service.trim())
      errors.service = 'Service selection is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const validateField = (name, value) => {
    if (value.trim() === '')
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value))
      return 'Email address is invalid';
    return '';
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
          setSuccessMessage(result.message);
          // Reset the form
          setFormData({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            service: '',
            message: '',
          });
        } else {
          console.error('Server error:', result.message);
        }
      } catch (error) {
        console.error('Submission error:', error.message);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.log('Validation errors', errors);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Fill out the form and describe your project needs. I'll get back
                to you within 24 hours.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="firstname"
                    type="text"
                    placeholder="Firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                  {formErrors.firstname && (
                    <p className="error-message">{formErrors.firstname}</p>
                  )}
                </div>
                <div>
                  <Input
                    name="lastname"
                    type="text"
                    placeholder="Lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  {formErrors.lastname && (
                    <p className="error-message">{formErrors.lastname}</p>
                  )}
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <p className="error-message">{formErrors.email}</p>
                  )}
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {formErrors.phone && (
                    <p className="error-message">{formErrors.phone}</p>
                  )}
                </div>
              </div>
              <Select
                value={formData.service}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Software Development">
                      Software Development
                    </SelectItem>
                    <SelectItem value="Product Development">
                      Product Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
              />
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
