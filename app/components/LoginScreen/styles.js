import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	
  container: {
		flex: 1,
    backgroundColor: "white",
	},

  logoWrapper: {
    	flex: 0.5,
  },
	
	inputWrapper: {
		flex: 0.6,
    padding: 20,
  },

	statusWrapper: {
		flex: 0.1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
	},

  buttonWrapper: {
		flex: 0.1,
    padding: 20,
  },

  iconWrap: {
    	paddingHorizontal: 5,
    	alignItems: 'center',
    	justifyContent: 'center',
  },

  inputLineWrap: {
      flex: 1,
    	flexDirection: 'row',
    	borderBottomColor: '#CCCC',
  },

  logo: {
	    flex: 1,
    	width: null,
    	height: null,
  },

  icon: {
    	height: 20,
    	width: 20,
  },

  input: {
    	flex: 1,
    	paddingHorizontal: 10,
  },

});