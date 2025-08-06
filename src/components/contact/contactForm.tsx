import { z } from 'zod';
import { useState } from 'react';
import { useTranslations } from '@/libs/i18n/utils';
import { toast } from 'sonner';

const contactSchema = z.object({
  first_name: z.string({
    required_error: 'El nombre es obligatorio',
  }),
  last_name: z.string({
    required_error: 'El apellido es obligatorio',
  }),
  email: z
    .string({
      required_error: 'El correo electrónico es obligatorio',
    })
    .email({
      message: 'El correo electrónico debe ser válido',
    }),
  phone: z.string().refine(
    (value) => {
      return value === '' || /^\+?[1-9]\d{1,14}$/.test(value);
    },
    {
      message: 'El número de teléfono debe ser válido',
    }
  ),
  message: z
    .string({
      required_error: 'El mensaje es obligatorio',
    })
    .min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactForm = z.infer<typeof contactSchema>;

export const ContactForm: React.FC<{ lang: string }> = ({ lang }) => {
  const t = useTranslations(lang);
  const [formData, setFormData] = useState<ContactForm>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
  });

  const text = {
    name: t('contact.contact.form.name'),
    lastName: t('contact.contact.form.lastname'),
    email: t('contact.contact.form.email'),
    phone: t('contact.contact.form.phone'),
    message: t('contact.contact.form.message'),
    send: t('contact.contact.form.button'),
  };

  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);

      const response = await fetch(
        'https://mail.axolotlcode.tech/mail-hub/email/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer 30c23594b19cd717d82763206346e98f`,
          },
          body: JSON.stringify(validatedData),
        }
      );

      if (!response.ok) {
        toast.error(t('contact.contact.error'));
        throw new Error('Error al enviar el formulario');
      }

      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
      });
      setErrors({});

      toast.success(t('contact.contact.success'));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.formErrors.fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="first_name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {t('contact.contact.form.name')} *
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder={text.name}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          />
          {errors.first_name && (
            <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="last_name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {text.lastName} *
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder={text.lastName}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          />
          {errors.last_name && (
            <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {text.email} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={text.email}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {text.phone} *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={text.phone}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {text.message} *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder={text.message}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-fit px-6 py-2 rounded-[5px] font-bold border border-primary-500 bg-primary-500 text-primary-50 disabled:opacity-50 transition-all duration-500 ease-in-out hover:scale-105 hover:bg-white hover:text-primary-500"
      >
        {text.send}
      </button>
    </form>
  );
};
