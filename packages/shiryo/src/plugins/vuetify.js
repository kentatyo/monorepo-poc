import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import '../styles/global.css';
import { createVuetify } from 'vuetify';

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
    options: { customProperties: true },
  },
});
