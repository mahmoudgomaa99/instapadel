import {Dimensions, Image, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from 'src/assets/images';
import {styles} from './styles';
import TournmentDetailsHeader from './components/Header';
import {useRoute} from '@react-navigation/native';
import TopScreenDetails from './components/TopScreenDetails';
import TabViewNav from './TabNavScreens';
import Button from 'components/molecules/Button';
import CodeModal from './components/JoinModal/CodeModal';
import TeammateModal from './components/JoinModal/TeammateModal';
import useModalHandler from 'hooks/useModalHandler';

const TournmentDetails = () => {
  const {tournment}: any = useRoute().params;
  const [checked, setChecked] = useState(false);
  const {CustomModal, openCustomModal, closeCustomModal} = useModalHandler();
  const {
    CustomModal: CustomModal_TM,
    openCustomModal: openCustomModal_TM,
    closeCustomModal: closeCustomModal_TM,
  } = useModalHandler();
  return (
    <ImageBackground source={images.home.background} style={styles.container}>
      <SafeAreaView style={{height: Dimensions.get('window').height}}>
        <TournmentDetailsHeader
          name={tournment?.name}
          privacy={tournment?.privacy}
        />
        <TopScreenDetails
          level={tournment?.level}
          no_of_players={tournment?.no_of_players}
        />
        <Image
          source={images.home.displayTournment.test}
          style={{
            width: Dimensions.get('window').width,
            height: '30%',
            marginTop: 30,
          }}
        />
        <TabViewNav
          checked={checked}
          setChecked={setChecked}
          tournment={tournment}
        />
        <Button
          type="secondry"
          label={tournment?.privacy === 0 ? 'SEND REQUEST' : 'JOIN TOURNAMENT'}
          disabled={!checked}
          onPress={() =>
            tournment.privacy === 1 ? openCustomModal_TM() : openCustomModal()
          }
        />
        <CodeModal
          CustomModal={CustomModal}
          closeCustomModal={closeCustomModal}
          selectedTournment={tournment}
          openCustomModal_TM={openCustomModal_TM}
        />
        <TeammateModal
          CustomModal={CustomModal_TM}
          selectedTournment={tournment}
          closeCustomModal={closeCustomModal_TM}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default TournmentDetails;
