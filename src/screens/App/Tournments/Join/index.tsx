import {Dimensions, FlatList, ImageBackground, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {images} from 'src/assets/images';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import TournmentHeader from '../components/Header';
import FilterComponent from './components/FilterItem';
import TournmentCard from './components/TournmentCard';
import {useAppDispatch} from 'redux/store';
import Tournment, {selectTournments} from 'redux/tournment';
import {useSelector} from 'react-redux';
import SkeletonItem from './components/TournmentCard/SkeletonItem';
import {useLoadingSelector} from 'redux/selectors';
import useFilterModal from './components/FilterModal';
import {filter_keys} from './data';
import {selectLevels, selectLocations} from 'redux/constants';

const JoinTournment = () => {
  const dispatch = useAppDispatch();
  const tournments = useSelector(selectTournments);
  const isLoading = useLoadingSelector(Tournment.thunks.doGetTournments);
  const [type, setType] = useState('Level');
  const locations = useSelector(selectLocations) || [];
  const levels = useSelector(selectLevels);
  const [filteringObject, setFilteringObject] = useState({
    locations: [],
    levels: [],
  });
  const {Modal, openModal} = useFilterModal(
    type === 'Level' ? levels : locations,
    type,
    setFilteringObject,
  );
  useEffect(() => {
    dispatch(Tournment.thunks.doGetTournments(filteringObject));
  }, [filteringObject, setFilteringObject]);

  return (
    <ImageBackground source={images.home.background} style={styles.container}>
      <SafeAreaView style={{height: Dimensions.get('window').height}}>
        <TournmentHeader title="Join Tournament" />
        <View style={styles.topRowWrapper}>
          {filter_keys.map((item, index) => (
            <FilterComponent
              title={item}
              onPress={() => {
                setType(item);
                openModal();
              }}
              key={index}
            />
          ))}
        </View>
        {isLoading ? (
          <FlatList
            data={[...Array(20).keys()]}
            renderItem={() => <SkeletonItem />}
            keyExtractor={(_, index) => index.toString()}
          />
        ) : (
          <FlatList
            data={tournments}
            renderItem={({item}) => (
              <TournmentCard
                item={item}
              />
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        )}
        {Modal}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default JoinTournment;
