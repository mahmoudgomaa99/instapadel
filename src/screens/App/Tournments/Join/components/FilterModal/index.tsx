import {ScrollView, Text, View} from 'react-native';
import React, {useMemo, useRef, useState} from 'react';
import {Modalize} from 'react-native-modalize';
import COLORS from 'values/colors';
import {CheckBox} from 'react-native-elements';
import {styles} from './styles';
import Button from 'components/molecules/Button';

const useFilterModal = (data: any, type: any, setFilteringObject: any) => {
  const ModalRef = useRef<Modalize>(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const openModal = () => {
    ModalRef.current?.open();
    setSelectedItems([]);
  };
  const closeModal = () => ModalRef.current?.close();
  const onSubmit = () => {
    setFilteringObject((prev: any) => {
      return type === 'Level'
        ? {...prev, levels: selectedItems}
        : {...prev, locations: selectedItems};
    });
    closeModal();
  };
  const Modal = useMemo(
    () => (
      <Modalize
        modalHeight={520}
        avoidKeyboardLikeIOS
        ref={ModalRef}
        closeOnOverlayTap
        overlayStyle={{backgroundColor: '#000'}}
        modalStyle={{backgroundColor: COLORS.black}}
        withHandle={false}
        HeaderComponent={null}>
        <View style={{...styles.modalInnerWrapper, height: 400}}>
          <Text style={styles.greenText}>{`Choose ${type}`}</Text>
          <ScrollView>
            {data.map((item: any, index: any) => (
              <View style={styles.itemWrapper} key={index}>
                <Text
                  style={{color: COLORS.white, fontSize: 18, marginLeft: 5}}>
                  {item.name}
                </Text>
                <CheckBox
                  disabled={false}
                  checked={selectedItems.includes(item.id)}
                  onPress={() => {
                    if (selectedItems.includes(item.id)) {
                      setSelectedItems((prev: any) =>
                        prev.filter((item2: any) => item.id === item2.id),
                      );
                    } else {
                      setSelectedItems((prev: any) => [...prev, item.id]);
                    }
                  }}
                />
              </View>
            ))}
          </ScrollView>
        </View>
        <Button type="secondry" label="FILTER TOURNAMENTS" onPress={onSubmit} />
      </Modalize>
    ),
    [data, toggleCheckBox, type, selectedItems],
  );
  return {
    Modal,
    openModal,
    closeModal,
  };
};

export default useFilterModal;
