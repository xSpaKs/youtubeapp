import {Dimensions} from 'react-native';

export const accueilStyles = {
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  videoContainer: {
    flex: 1,
    width: Dimensions.get('window').width - 15,
    margin: 5,
  },
};
