import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();

const lightTheme = {
  background: '#FFFFFF',
  text: '#000',
  card: '#fff',
  border: '#EEE',
  primary: '#1E90FF',
  secondaryText: '#666',
  button: '#2EC8FE',
  buttonText: '#FFFFFF',
  iconCard: '#EAF9FF',
};

const darkTheme = {
  background: '#292D2E',
  text: '#FFF',
  card: '#1D1D1D',
  border: '#333',
  primary: '#1E90FF',
  secondaryText: '#999',
  button: '#2EC8FE',
  buttonText: '#292D2E',
  iconCard: '#1F2E33',
};

const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

export default theme;