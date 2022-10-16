import React, {useState} from 'react';
import Modal, {ModalProps} from 'react-native-modal';
import COLORS from 'values/colors';

const useModalHandler = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const openCustomModal = () => {
    setModalVisible(true);
  };
  const closeCustomModal = () => {
    setModalVisible(false);
  };
  const CustomModal = ({...props}: ModalProps) => (
    <Modal
      {...props}
      avoidKeyboard
      isVisible={isModalVisible}
      onDismiss={closeCustomModal}
      backdropColor={COLORS.black}
      backdropOpacity={0.7}
      swipeDirection="down"
      onBackdropPress={closeCustomModal}
      animationIn="fadeInUp"
      animationOut={'fadeInDown'}
      animationInTiming={600}
      animationOutTiming={600}
      style={{margin: 5, justifyContent: 'flex-end'}}></Modal>
  );
  return {openCustomModal, closeCustomModal, CustomModal};
};

export default useModalHandler;
