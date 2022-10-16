import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Details from './Details';
import Players from './Players';
import {TabView, SceneMap} from 'react-native-tab-view';
import COLORS from 'values/colors';

const TabViewNav = ({tournment, checked, setChecked}: any) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(
    tournment?.privacy === 1
      ? [
          {key: 'details', title: 'Details'},
          {key: 'players', title: 'Players'},
        ]
      : [{key: 'details', title: 'Details'}],
  );
  const renderScene = SceneMap({
    details: () => (
      <Details
        tournment={tournment}
        checked={checked}
        setChecked={setChecked}
      />
    ),
    players: () => <Players />,
  });
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: Dimensions.get('window').width}}
      renderTabBar={props => {
        return (
          <View style={{flexDirection: 'row'}}>
            {props.navigationState.routes.map((route, i) => {
              return (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    padding: 16,
                    backgroundColor:
                      index === i
                        ? COLORS.secButtonBG
                        : COLORS.cameraBackGround,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                  }}
                  onPress={() => setIndex(i)}>
                  <Text
                    style={{
                      color:
                        index === i ? COLORS.cameraBackGround : COLORS.white,
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    {route.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }}
    />
  );
};

export default TabViewNav;

const styles = StyleSheet.create({});
