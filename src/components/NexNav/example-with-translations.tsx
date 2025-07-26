import React, { useState } from 'react';
import NexNav from './NexNav';
import type { NavTranslations } from './NexNav.types';

// Example translation sets
const englishTranslations: NavTranslations = {
  navigation: 'Navigation',
  profile: 'Profile',
  settings: 'Settings',
  language: 'Language',
  signUp: 'Sign Up',
  signIn: 'Sign In',
  logOut: 'Log Out',
  alreadyHaveAccount: 'Already have an account? Sign in',
  viewProfile: 'View Profile',
  endorsements: 'Endorsements',
  subscription: 'Subscription',
  activityLog: 'Activity Log',
  security: 'Security',
  integrations: 'Integrations',
  adminPanel: 'Admin Panel',
  pro: 'Pro',
  free: 'Free',
  searchLanguages: 'Search languages...',
  noLanguagesFound: 'No languages found',
  userMenu: 'User menu',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  mainNavigation: 'Main navigation'
};

const spanishTranslations: NavTranslations = {
  navigation: 'Navegación',
  profile: 'Perfil',
  settings: 'Configuración',
  language: 'Idioma',
  signUp: 'Registrarse',
  signIn: 'Iniciar Sesión',
  logOut: 'Cerrar Sesión',
  alreadyHaveAccount: '¿Ya tienes una cuenta? Inicia sesión',
  viewProfile: 'Ver Perfil',
  endorsements: 'Endosos',
  subscription: 'Suscripción',
  activityLog: 'Registro de Actividad',
  security: 'Seguridad',
  integrations: 'Integraciones',
  adminPanel: 'Panel de Administración',
  pro: 'Pro',
  free: 'Gratis',
  searchLanguages: 'Buscar idiomas...',
  noLanguagesFound: 'No se encontraron idiomas',
  userMenu: 'Menú de usuario',
  openMenu: 'Abrir menú',
  closeMenu: 'Cerrar menú',
  mainNavigation: 'Navegación principal'
};

const frenchTranslations: NavTranslations = {
  navigation: 'Navigation',
  profile: 'Profil',
  settings: 'Paramètres',
  language: 'Langue',
  signUp: "S'inscrire",
  signIn: 'Se connecter',
  logOut: 'Se déconnecter',
  alreadyHaveAccount: 'Vous avez déjà un compte ? Connectez-vous',
  viewProfile: 'Voir le profil',
  endorsements: 'Recommandations',
  subscription: 'Abonnement',
  activityLog: 'Journal d\'activité',
  security: 'Sécurité',
  integrations: 'Intégrations',
  adminPanel: 'Panneau d\'administration',
  pro: 'Pro',
  free: 'Gratuit',
  searchLanguages: 'Rechercher des langues...',
  noLanguagesFound: 'Aucune langue trouvée',
  userMenu: 'Menu utilisateur',
  openMenu: 'Ouvrir le menu',
  closeMenu: 'Fermer le menu',
  mainNavigation: 'Navigation principale'
};

// Example navigation items for different languages
const englishNavItems = [
  { label: 'Dashboard', onClick: () => console.log('Dashboard clicked') },
  { label: 'Products', onClick: () => console.log('Products clicked') },
  { label: 'Settings', onClick: () => console.log('Settings clicked') }
];

const spanishNavItems = [
  { label: 'Panel', onClick: () => console.log('Panel clicked') },
  { label: 'Productos', onClick: () => console.log('Productos clicked') },
  { label: 'Configuración', onClick: () => console.log('Configuración clicked') }
];

const frenchNavItems = [
  { label: 'Tableau de bord', onClick: () => console.log('Tableau de bord clicked') },
  { label: 'Produits', onClick: () => console.log('Produits clicked') },
  { label: 'Paramètres', onClick: () => console.log('Paramètres clicked') }
];

// Example language options
const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' }
];

// Example user data
const user = {
  name: 'John Doe',
  avatarUrl: 'https://i.pravatar.cc/40?img=1',
  role: 'Pro' as const
};

// Example subscription data
const subscription = {
  tier: 'pro',
  renewalDate: '2025-12-01'
};

const NexNavTranslationExample: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'es' | 'fr'>('en');

  // Get translations and nav items based on current language
  const getTranslations = (): NavTranslations => {
    switch (currentLanguage) {
      case 'es':
        return spanishTranslations;
      case 'fr':
        return frenchTranslations;
      default:
        return englishTranslations;
    }
  };

  const getNavItems = () => {
    switch (currentLanguage) {
      case 'es':
        return spanishNavItems;
      case 'fr':
        return frenchNavItems;
      default:
        return englishNavItems;
    }
  };

  const handleLocaleChange = (code: string) => {
    if (code === 'en' || code === 'es' || code === 'fr') {
      setCurrentLanguage(code);
    }
    console.log('Language changed to:', code);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <NexNav
        logoSrc="/logo.svg"
        displayName="MyApp"
        homeButtonHandler={() => console.log('Home clicked')}
        navItems={getNavItems()}
        isAuthenticated={true}
        user={user}
        onLogin={() => console.log('Login clicked')}
        onLogout={() => console.log('Logout clicked')}
        onProfile={() => console.log('Profile clicked')}
        currentLocale={currentLanguage}
        languageOptions={languageOptions}
        onLocaleChange={handleLocaleChange}
        endorsementCount={12}
        subscription={subscription}
        onEndorsementsClick={() => console.log('Endorsements clicked')}
        onSubscriptionClick={() => console.log('Subscription clicked')}
        onActivityLogClick={() => console.log('Activity log clicked')}
        onSecurityClick={() => console.log('Security clicked')}
        onIntegrationsClick={() => console.log('Integrations clicked')}
        onAdminPanelClick={() => console.log('Admin panel clicked')}
        theme="auto"
        translations={getTranslations()}
      />
      
      {/* Demo content */}
      <div style={{ padding: '2rem', textAlign: 'center', color: 'white' }}>
        <h1>Navigation Translation Demo</h1>
        <p>Current language: {currentLanguage.toUpperCase()}</p>
        <p>Try switching languages using the language switcher in the navigation!</p>
        
        <div style={{ marginTop: '2rem' }}>
          <h3>Features demonstrated:</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>✅ All navigation text is translatable</li>
            <li>✅ Mobile navigation supports translations</li>
            <li>✅ User menu supports translations</li>
            <li>✅ Language switcher supports translations</li>
            <li>✅ Accessibility labels are translatable</li>
            <li>✅ Fallback to English for missing translations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NexNavTranslationExample; 