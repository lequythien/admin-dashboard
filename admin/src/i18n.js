import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navbar translations
      profile: "Profile",
      myWallet: "My Wallet",
      settings: "Settings",
      lockScreen: "Lock Screen",
      logout: "Logout",
      messages: "Messages",
      notifications: "Notifications",
      searchPlaceholder: "Search…",
      yourOrderIsPlaced: "Your order is placed",
      yourItemIsShipped: "Your item is shipped",
      viewAll: "View All",
      // Sidebar translations
      menu: "MENU",
      dashboard: "Dashboard",
      apps: "APPS",
      chat: "Chat",
      components: "COMPONENTS",
      tables: "Tables",
      dataTables: "Data Tables",
    },
  },
  es: {
    translation: {
      // Navbar translations
      profile: "Perfil",
      myWallet: "Mi billetera",
      settings: "Configuraciones",
      lockScreen: "Pantalla de bloqueo",
      logout: "Cerrar sesión",
      messages: "Mensajes",
      notifications: "Notificaciones",
      searchPlaceholder: "Buscar…",
      yourOrderIsPlaced: "Tu pedido ha sido realizado",
      yourItemIsShipped: "Tu artículo ha sido enviado",
      viewAll: "Ver todo",
      // Sidebar translations
      menu: "MENÚ",
      dashboard: "Tablero",
      apps: "APLICACIONES",
      chat: "Chat",
      components: "COMPONENTES",
      tables: "Tablas",
      dataTables: "Tablas de datos",
    },
  },
  de: {
    translation: {
      // Navbar translations
      profile: "Profil",
      myWallet: "Mein Portemonnaie",
      settings: "Einstellungen",
      lockScreen: "Bildschirmsperre",
      logout: "Abmelden",
      messages: "Nachrichten",
      notifications: "Benachrichtigungen",
      searchPlaceholder: "Suchen…",
      yourOrderIsPlaced: "Ihre Bestellung wurde aufgegeben",
      yourItemIsShipped: "Ihr Artikel wurde versandt",
      viewAll: "Alle anzeigen",
      // Sidebar translations
      menu: "MENÜ",
      dashboard: "Dashboard",
      apps: "APPS",
      chat: "Chat",
      components: "KOMPONENTEN",
      tables: "Tabellen",
      dataTables: "Datentabellen",
    },
  },
  it: {
    translation: {
      // Navbar translations
      profile: "Profilo",
      myWallet: "Il mio portafoglio",
      settings: "Impostazioni",
      lockScreen: "Schermo di blocco",
      logout: "Esci",
      messages: "Messaggi",
      notifications: "Notifiche",
      searchPlaceholder: "Cerca…",
      yourOrderIsPlaced: "Il tuo ordine è stato effettuato",
      yourItemIsShipped: "Il tuo articolo è stato spedito",
      viewAll: "Vedi tutto",
      // Sidebar translations
      menu: "MENU",
      dashboard: "Dashboard",
      apps: "APPS",
      chat: "Chat",
      components: "COMPONENTI",
      tables: "Tabelle",
      dataTables: "Tabelle dati",
    },
  },
  ru: {
    translation: {
      // Navbar translations
      profile: "Профиль",
      myWallet: "Мой кошелек",
      settings: "Настройки",
      lockScreen: "Экран блокировки",
      logout: "Выйти",
      messages: "Сообщения",
      notifications: "Уведомления",
      searchPlaceholder: "Поиск…",
      yourOrderIsPlaced: "Ваш заказ размещен",
      yourItemIsShipped: "Ваш товар отправлен",
      viewAll: "Посмотреть все",
      // Sidebar translations
      menu: "МЕНЮ",
      dashboard: "Панель управления",
      apps: "ПРИЛОЖЕНИЯ",
      chat: "Чат",
      components: "КОМПОНЕНТЫ",
      tables: "Таблицы",
      dataTables: "Таблицы данных",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Ngôn ngữ mặc định
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;