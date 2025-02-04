import type { FC } from 'react';
import anime from 'animejs';
import { useEffect, useRef } from 'react';

interface PlanProps {
  name: string;
  price: string;
  benefits: (string | JSX.Element)[];
}

export const Packages: FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const enterpriseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate title
    anime({
      targets: titleRef.current,
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 2800,
      easing: 'easeOutExpo',
    });

    // Animate cards
    cardsRef.current.forEach((card, index) => {
      anime({
        targets: card,
        opacity: [0, 1],
        duration: 2000,
        delay: 6000 + index * 100,
        easing: 'easeInOutQuad',
      });
    });

    // Animate enterprise section
    anime({
      targets: enterpriseRef.current,
      opacity: [0, 1],
      duration: 2800,
      delay: 2500,
      easing: 'easeInOutQuad',
    });
  }, []);

  const plans: PlanProps[] = [
    {
      name: 'Plan Básico',
      price: 'Pago inicial de $2,000 MXN',
      benefits: [
        'Desarrollo de landing page (one-page)',
        'Hosting',
        'SEO basico onsite',
        'Cambios básicos ilimitados (información, imágenes, etc)',
      ],
    },
    {
      name: 'Plan Pymes',
      price: 'Pago inicial de $5,000 MXN',
      benefits: [
        <span className="font-bold text-primary-500">
          Todo lo del Plan Básico, más...
        </span>,
        'Pagina de dos a tres vistas internas',
        'SEO Avanzado onsite',
        'Control de clientes',
        'Cambios avanzados (dos máximos al mes, cambio de funcionamiento o agregar secciones)',
      ],
    },
    {
      name: 'Plan Personalizado',
      price: 'Pago inicial de $10,000 MXN',
      benefits: [
        <span className="font-bold text-primary-500">
          Todo lo del Plan Pymes, más...
        </span>,
        'Pagina web + tienda',
        'Control de clientes',
        'Administración de productos',
        'Integración de pasarelas de pago',
        'Integración de API de terceros (envío de correos, etc)',
      ],
    },
    {
      name: 'Enterprise Plan',
      price: '¡Contáctanos para discutir un presupuesto!',
      benefits: ['Consultoría personalizada'],
    },
  ];

  return (
    <div className="max-w-[1400px] min-h-[70vh] mx-auto px-8 py-16 flex flex-col gap-16">
      <div
        ref={titleRef}
        className="flex flex-col items-start text-left opacity-0"
      >
        <span className="text-2xl text-primary-500 mb-4">Nuestros planes</span>
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          ¿Qué <span className="text-secondary-500">ofrecemos</span>?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.slice(0, 3).map((plan, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="flex flex-col gap-y-4 p-8 bg-white rounded-lg shadow-lg opacity-0"
          >
            <h3 className="text-2xl font-normal mb-4">{plan.name}</h3>
            <div className="border-b border-black max-w-[100px] h-[1px] mb-2" />
            <span className="text-3xl font-bold text-black mb-6 max-w-[300px]">
              {plan.price}
            </span>
            <ul className="flex flex-col gap-3 mb-8">
              {plan.benefits.map((benefit, i) => (
                <li key={i} className="text-gray-600">
                  {typeof benefit === 'string' ? (
                    `• ${benefit}`
                  ) : (
                    <>{benefit}</>
                  )}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-auto text-center py-2 px-4 border border-primary-500 text-primary-500 rounded hover:bg-primary-500 hover:text-white transition-colors"
            >
              Get Started
            </a>
          </div>
        ))}
      </div>

      <div ref={enterpriseRef} className="w-full opacity-0">
        <div className="flex flex-col p-8 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-nomral mb-4">{plans[3].name}</h3>
          <span className="text-3xl font-bold text-black mb-6">
            {plans[3].price}
          </span>
          <ul className="flex flex-col gap-3 mb-8">
            {plans[3].benefits.map((benefit, i) => (
              <li key={i} className="text-gray-600">
                • {typeof benefit === 'string' ? benefit : <>{benefit}</>}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="w-full text-center py-2 px-4 border border-primary-500 text-primary-500 rounded hover:bg-primary-500 hover:text-white transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
