# Navigation Translation Guide

The NexNav component now supports full internationalization (i18n) through a flexible translation system. This allows you to translate all navigation text while maintaining the component's functionality.

## Quick Start

### Basic Usage with Default English

```tsx
import { NexNav } from '@nexcomponent/lib';

function App() {
  return (
    <NexNav
      navItems={[
        { label: "Dashboard", onClick: () => navigate('/dashboard') },
        { label: "Products", onClick: () => navigate('/products') }
      ]}
      // ... other props
    />
  );
}
```

### Using Custom Translations

```tsx
import { NexNav } from '@nexcomponent/lib';

function App() {
  const spanishTranslations = {
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

  return (
    <NexNav
      navItems={[
        { label: "Panel", onClick: () => navigate('/dashboard') },
        { label: "Productos", onClick: () => navigate('/products') }
      ]}
      translations={spanishTranslations}
      // ... other props
    />
  );
}
```

## Translation Interface

The `NavTranslations` interface includes all translatable text:

```typescript
interface NavTranslations {
  // Navigation sections
  navigation?: string;        // "Navigation"
  profile?: string;          // "Profile"
  settings?: string;         // "Settings"
  language?: string;         // "Language"
  
  // User actions
  signUp?: string;           // "Sign Up"
  signIn?: string;           // "Sign In"
  logOut?: string;           // "Log Out"
  alreadyHaveAccount?: string; // "Already have an account? Sign in"
  
  // Profile section
  viewProfile?: string;      // "View Profile"
  endorsements?: string;     // "Endorsements"
  subscription?: string;     // "Subscription"
  
  // Settings section
  activityLog?: string;      // "Activity Log"
  security?: string;         // "Security"
  integrations?: string;     // "Integrations"
  adminPanel?: string;       // "Admin Panel"
  
  // Subscription tiers
  pro?: string;              // "Pro"
  free?: string;             // "Free"
  
  // Language switcher
  searchLanguages?: string;  // "Search languages..."
  noLanguagesFound?: string; // "No languages found"
  
  // Accessibility
  userMenu?: string;         // "User menu"
  openMenu?: string;         // "Open menu"
  closeMenu?: string;        // "Close menu"
  mainNavigation?: string;   // "Main navigation"
}
```

## Integration with i18n Libraries

### React-i18next Integration

```tsx
import { useTranslation } from 'react-i18next';
import { NexNav } from '@nexcomponent/lib';

function App() {
  const { t } = useTranslation();

  const navTranslations = {
    navigation: t('nav.navigation'),
    profile: t('nav.profile'),
    settings: t('nav.settings'),
    language: t('nav.language'),
    signUp: t('nav.signUp'),
    signIn: t('nav.signIn'),
    logOut: t('nav.logOut'),
    alreadyHaveAccount: t('nav.alreadyHaveAccount'),
    viewProfile: t('nav.viewProfile'),
    endorsements: t('nav.endorsements'),
    subscription: t('nav.subscription'),
    activityLog: t('nav.activityLog'),
    security: t('nav.security'),
    integrations: t('nav.integrations'),
    adminPanel: t('nav.adminPanel'),
    pro: t('nav.pro'),
    free: t('nav.free'),
    searchLanguages: t('nav.searchLanguages'),
    noLanguagesFound: t('nav.noLanguagesFound'),
    userMenu: t('nav.userMenu'),
    openMenu: t('nav.openMenu'),
    closeMenu: t('nav.closeMenu'),
    mainNavigation: t('nav.mainNavigation')
  };

  return (
    <NexNav
      navItems={[
        { label: t('nav.dashboard'), onClick: () => navigate('/dashboard') },
        { label: t('nav.products'), onClick: () => navigate('/products') }
      ]}
      translations={navTranslations}
      // ... other props
    />
  );
}
```

### Next.js with next-intl

```tsx
import { useTranslations } from 'next-intl';
import { NexNav } from '@nexcomponent/lib';

function App() {
  const t = useTranslations('Navigation');

  const navTranslations = {
    navigation: t('navigation'),
    profile: t('profile'),
    settings: t('settings'),
    language: t('language'),
    signUp: t('signUp'),
    signIn: t('signIn'),
    logOut: t('logOut'),
    alreadyHaveAccount: t('alreadyHaveAccount'),
    viewProfile: t('viewProfile'),
    endorsements: t('endorsements'),
    subscription: t('subscription'),
    activityLog: t('activityLog'),
    security: t('security'),
    integrations: t('integrations'),
    adminPanel: t('adminPanel'),
    pro: t('pro'),
    free: t('free'),
    searchLanguages: t('searchLanguages'),
    noLanguagesFound: t('noLanguagesFound'),
    userMenu: t('userMenu'),
    openMenu: t('openMenu'),
    closeMenu: t('closeMenu'),
    mainNavigation: t('mainNavigation')
  };

  return (
    <NexNav
      navItems={[
        { label: t('dashboard'), onClick: () => navigate('/dashboard') },
        { label: t('products'), onClick: () => navigate('/products') }
      ]}
      translations={navTranslations}
      // ... other props
    />
  );
}
```

## Translation Files

### English (en.json)
```json
{
  "nav": {
    "navigation": "Navigation",
    "profile": "Profile",
    "settings": "Settings",
    "language": "Language",
    "signUp": "Sign Up",
    "signIn": "Sign In",
    "logOut": "Log Out",
    "alreadyHaveAccount": "Already have an account? Sign in",
    "viewProfile": "View Profile",
    "endorsements": "Endorsements",
    "subscription": "Subscription",
    "activityLog": "Activity Log",
    "security": "Security",
    "integrations": "Integrations",
    "adminPanel": "Admin Panel",
    "pro": "Pro",
    "free": "Free",
    "searchLanguages": "Search languages...",
    "noLanguagesFound": "No languages found",
    "userMenu": "User menu",
    "openMenu": "Open menu",
    "closeMenu": "Close menu",
    "mainNavigation": "Main navigation",
    "dashboard": "Dashboard",
    "products": "Products"
  }
}
```

### Spanish (es.json)
```json
{
  "nav": {
    "navigation": "Navegación",
    "profile": "Perfil",
    "settings": "Configuración",
    "language": "Idioma",
    "signUp": "Registrarse",
    "signIn": "Iniciar Sesión",
    "logOut": "Cerrar Sesión",
    "alreadyHaveAccount": "¿Ya tienes una cuenta? Inicia sesión",
    "viewProfile": "Ver Perfil",
    "endorsements": "Endosos",
    "subscription": "Suscripción",
    "activityLog": "Registro de Actividad",
    "security": "Seguridad",
    "integrations": "Integraciones",
    "adminPanel": "Panel de Administración",
    "pro": "Pro",
    "free": "Gratis",
    "searchLanguages": "Buscar idiomas...",
    "noLanguagesFound": "No se encontraron idiomas",
    "userMenu": "Menú de usuario",
    "openMenu": "Abrir menú",
    "closeMenu": "Cerrar menú",
    "mainNavigation": "Navegación principal",
    "dashboard": "Panel",
    "products": "Productos"
  }
}
```

### French (fr.json)
```json
{
  "nav": {
    "navigation": "Navigation",
    "profile": "Profil",
    "settings": "Paramètres",
    "language": "Langue",
    "signUp": "S'inscrire",
    "signIn": "Se connecter",
    "logOut": "Se déconnecter",
    "alreadyHaveAccount": "Vous avez déjà un compte ? Connectez-vous",
    "viewProfile": "Voir le profil",
    "endorsements": "Recommandations",
    "subscription": "Abonnement",
    "activityLog": "Journal d'activité",
    "security": "Sécurité",
    "integrations": "Intégrations",
    "adminPanel": "Panneau d'administration",
    "pro": "Pro",
    "free": "Gratuit",
    "searchLanguages": "Rechercher des langues...",
    "noLanguagesFound": "Aucune langue trouvée",
    "userMenu": "Menu utilisateur",
    "openMenu": "Ouvrir le menu",
    "closeMenu": "Fermer le menu",
    "mainNavigation": "Navigation principale",
    "dashboard": "Tableau de bord",
    "products": "Produits"
  }
}
```

## Best Practices

1. **Partial Translations**: You can provide only the translations you need. Missing translations will fall back to English defaults.

2. **Consistent Naming**: Use consistent translation keys across your application.

3. **Accessibility**: Always provide translations for accessibility labels (`userMenu`, `openMenu`, `closeMenu`, `mainNavigation`).

4. **Dynamic Content**: For dynamic content like user names or counts, pass them as props rather than including them in translations.

5. **RTL Support**: The component automatically supports RTL layouts when the page direction is set to RTL.

## Migration from Previous Versions

If you're upgrading from a previous version, no changes are required. The component will continue to work with English text by default. To add translations, simply pass the `translations` prop with your translated text.

## TypeScript Support

The translation system is fully typed. TypeScript will provide autocomplete and type checking for all translation keys:

```tsx
const translations: NavTranslations = {
  navigation: 'Navigation', // ✅ TypeScript will autocomplete this
  // ... other translations
};
``` 