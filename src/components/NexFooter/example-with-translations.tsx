import React, { useState } from 'react';
import NexFooter from './NexFooter';

// Example translation sets
const englishTranslations = {
  allRightsReserved: 'All rights reserved.',
  followUsOn: 'Follow us on',
  getInTouch: 'Get in Touch',
  messageSentSuccessfully: 'Message sent successfully!',
  yourEmailAddress: 'Your email address',
  tellUsAboutProject: 'Tell us about your project or inquiry...',
  sendMessage: 'Send Message',
  successfullySubscribed: 'Successfully subscribed!',
  stayUpdated: 'Stay updated',
  subscribe: 'Subscribe',
  madeByInkblotStudio: 'Made with ❤️ by Inkblot Studio'
};

const spanishTranslations = {
  allRightsReserved: 'Todos los derechos reservados.',
  followUsOn: 'Síguenos en',
  getInTouch: 'Contáctanos',
  messageSentSuccessfully: '¡Mensaje enviado exitosamente!',
  yourEmailAddress: 'Tu dirección de correo electrónico',
  tellUsAboutProject: 'Cuéntanos sobre tu proyecto o consulta...',
  sendMessage: 'Enviar Mensaje',
  successfullySubscribed: '¡Suscrito exitosamente!',
  stayUpdated: 'Mantente actualizado',
  subscribe: 'Suscribirse',
  madeByInkblotStudio: 'Hecho con ❤️ por Inkblot Studio'
};

const frenchTranslations = {
  allRightsReserved: 'Tous droits réservés.',
  followUsOn: 'Suivez-nous sur',
  getInTouch: 'Contactez-nous',
  messageSentSuccessfully: 'Message envoyé avec succès !',
  yourEmailAddress: 'Votre adresse e-mail',
  tellUsAboutProject: 'Parlez-nous de votre projet ou demande...',
  sendMessage: 'Envoyer le Message',
  successfullySubscribed: 'Inscription réussie !',
  stayUpdated: 'Restez informé',
  subscribe: 'S\'abonner',
  madeByInkblotStudio: 'Fait avec ❤️ par Inkblot Studio'
};

const FooterWithTranslations: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'english' | 'spanish' | 'french'>('english');

  const getTranslations = () => {
    switch (currentLanguage) {
      case 'spanish':
        return spanishTranslations;
      case 'french':
        return frenchTranslations;
      default:
        return englishTranslations;
    }
  };

  const getDisplayName = () => {
    switch (currentLanguage) {
      case 'spanish':
        return 'MiAplicación';
      case 'french':
        return 'MonApplication';
      default:
        return 'MyApp';
    }
  };

  const getTagline = () => {
    switch (currentLanguage) {
      case 'spanish':
        return 'Construyendo experiencias increíbles';
      case 'french':
        return 'Créer des expériences incroyables';
      default:
        return 'Building amazing experiences';
    }
  };

  return (
    <div>
      {/* Language Switcher */}
      <div style={{ 
        padding: '1rem', 
        textAlign: 'center', 
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <h3>Footer Translation Demo</h3>
        <div style={{ marginBottom: '1rem' }}>
          <button 
            onClick={() => setCurrentLanguage('english')}
            style={{ 
              margin: '0 0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: currentLanguage === 'english' ? '#007bff' : '#e9ecef',
              color: currentLanguage === 'english' ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            English
          </button>
          <button 
            onClick={() => setCurrentLanguage('spanish')}
            style={{ 
              margin: '0 0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: currentLanguage === 'spanish' ? '#007bff' : '#e9ecef',
              color: currentLanguage === 'spanish' ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Español
          </button>
          <button 
            onClick={() => setCurrentLanguage('french')}
            style={{ 
              margin: '0 0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: currentLanguage === 'french' ? '#007bff' : '#e9ecef',
              color: currentLanguage === 'french' ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Français
          </button>
        </div>
        <p>Current Language: <strong>{currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1)}</strong></p>
      </div>

      {/* Footer with Translations */}
      <NexFooter
        displayName={getDisplayName()}
        tagline={getTagline()}
        sections={[
          {
            title: currentLanguage === 'spanish' ? 'Producto' : 
                   currentLanguage === 'french' ? 'Produit' : 'Product',
            links: [
                             { 
                 label: currentLanguage === 'spanish' ? 'Características' : 
                        currentLanguage === 'french' ? 'Fonctionnalités' : 'Features', 
                 url: '/features' 
               },
               { 
                 label: currentLanguage === 'spanish' ? 'Precios' : 
                        currentLanguage === 'french' ? 'Tarifs' : 'Pricing', 
                 url: '/pricing' 
               }
            ]
          },
          {
            title: currentLanguage === 'spanish' ? 'Empresa' : 
                   currentLanguage === 'french' ? 'Entreprise' : 'Company',
            links: [
                             { 
                 label: currentLanguage === 'spanish' ? 'Acerca de' : 
                        currentLanguage === 'french' ? 'À propos' : 'About', 
                 url: '/about' 
               },
               { 
                 label: currentLanguage === 'spanish' ? 'Contacto' : 
                        currentLanguage === 'french' ? 'Contact' : 'Contact', 
                 url: '/contact' 
               }
            ]
          }
        ]}
        newsletter={{
          enabled: true,
          onSubmit: async (email) => {
            console.log('Newsletter subscription:', email);
            return Promise.resolve();
          }
        }}
        contact={{
          enabled: true,
          title: currentLanguage === 'spanish' ? 'Contáctanos' : 
                 currentLanguage === 'french' ? 'Contactez-nous' : 'Get in Touch',
          description: currentLanguage === 'spanish' ? '¿Tienes una pregunta? Nos encantaría escuchar de ti.' : 
                      currentLanguage === 'french' ? 'Vous avez une question ? Nous aimerions avoir de vos nouvelles.' : 
                      'Have a question? We\'d love to hear from you.',
          onSubmit: async (data) => {
            console.log('Contact form submission:', data);
            return Promise.resolve();
          }
        }}
        socials={[
          { type: 'twitter', url: 'https://twitter.com/myapp' },
          { type: 'linkedin', url: 'https://linkedin.com/company/myapp' },
          { type: 'github', url: 'https://github.com/myapp' }
        ]}
        theme="black-glass"
        translations={getTranslations()}
        agencyAttribution={{
          websiteUrl: 'https://inkblotstudio.com',
          openInNewTab: true
        }}
      />
    </div>
  );
};

export default FooterWithTranslations; 