import { useState } from 'react';
import type { FC } from 'react';
import { t, changeLanguage } from 'i18next';
import { z } from 'zod';
import anime from 'animejs';
import { useEffect, useRef } from 'react';
import call from '@/assets/icons/call.svg';
import email from '@/assets/icons/email.svg';
import location from '@/assets/icons/pin.svg';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  lastName: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'El teléfono debe tener al menos 10 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactForm = z.infer<typeof contactSchema>;

export const Contact: FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  changeLanguage('es');

  const text = {
    title: t('contact.text.title'),
    span: t('contact.text.span'),
    title2: t('contact.text.title-2'),
    subtitle: t('contact.text.subtitle'),
    description: t('contact.text.description'),
    name: t('contact.form.name'),
    lastName: t('contact.form.lastName'),
    email: t('contact.form.email'),
    phone: t('contact.form.phone'),
    message: t('contact.form.message'),
    send: t('contact.button.send'),
    locationText: t('contact.location.title'),
    locationDescription: t('contact.location.description'),
    emailText: t('contact.email.title'),
    emailDescription: t('contact.email.description'),
    phoneText: t('contact.phone.title'),
    phoneDescription: t('contact.phone.description'),
  };

  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: titleRef.current,
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 2500,
            easing: 'easeOutExpo',
          });
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      setFormData({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
      setErrors({});
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
    <div
      ref={containerRef}
      className="max-w-[1400px] min-h-[70vh] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 lg:py-16"
    >
      <div
        ref={titleRef}
        className="flex flex-col items-left text-left opacity-0 mb-8 sm:mb-12 lg:mb-16"
      >
        <span className="text-lg sm:text-xl md:text-2xl text-primary-500 mb-2 sm:mb-4">
          {text.subtitle}
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
          {text.title} <span className="text-secondary-500">{text.span}</span>{' '}
          {text.title2}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
          {text.description}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <img src={location.src} alt="Ubicación" className="w-8 h-8" />
            <h3 className="text-lg sm:text-xl font-bold">
              {text.locationText}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {text.locationDescription}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <img src={email.src} alt="Email" className="w-8 h-8" />
            <h3 className="text-lg sm:text-xl font-bold">{text.emailText}</h3>
            <p className="text-sm sm:text-base text-gray-600">
              {text.emailDescription}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <img src={call.src} alt="Teléfono" className="w-8 h-8" />
            <h3 className="text-lg sm:text-xl font-bold">{text.phoneText}</h3>
            <p className="text-sm sm:text-base text-gray-600">
              {text.phoneDescription}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-2/3">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {text.name} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={text.name}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {text.lastName} *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={text.lastName}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
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
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50"
            >
              {text.send}
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden mt-8 sm:mt-12 lg:mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.153810829641!2d-99.01649832478631!3d19.40575918186784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fcccd6785e7f%3A0x3a021142afc0d326!2sC.%20Monedita%20de%20Oro%20105%2C%20Benito%20Ju%C3%A1rez%2C%2057709%20Cdad.%20Nezahualc%C3%B3yotl%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1738631302720!5m2!1ses!2smx"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Contact;
