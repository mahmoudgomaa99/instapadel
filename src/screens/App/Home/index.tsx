import {Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg from 'atoms/Svg';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {selectCurrentUser} from 'redux/user';
import Header from './Header';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.tournmentContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('tournment', {screen: 'JoinTournment'})
          }
          style={styles.joinTournment}>
          <Svg name="join_tournment" size={50} />
          <Text style={styles.join_tournment_text}>Join Tournament</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('tournment', {screen: 'CreateTournment'})
          }
          style={styles.createTournment}>
          <Svg name="create_tournment" size={50} />
          <Text style={styles.create_tournment_text}>Create Tournament</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
