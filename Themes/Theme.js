import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();

const lightTheme = {
  background: '#F5F5F5',
  text: '#000',
  card: '#fff',
  border: '#EEE',
  primary: '#1E90FF',
  secondaryText: '#666',
};

const darkTheme = {
  background: '#121212',
  text: '#FFF',
  card: '#1E1E1E',
  border: '#333',
  primary: '#1E90FF',
  secondaryText: '#999',
};

const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

export default theme;