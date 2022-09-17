import {Dimensions, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import Home from 'src/screens/App/Home';
import COLORS from 'values/colors';
import {images} from 'src/assets/images';
import Svg from 'atoms/Svg';
import Clubs from 'src/screens/App/Clubs';

const Tabs = AnimatedTabBarNavigator();

const BottomNav = () => {
  return (
    <ImageBackground source={images.home.background} style={styles.container}>
      <Tabs.Navigator
        appearance={{
          tabBarBackground: COLORS.secondery,
          activeTabBackgrounds: COLORS.secondery,
          floating: true,
        }}
        tabBarOptions={{
          activeTintColor: COLORS.white,
          inactiveTintColor: '#a1b5c8',
          tabBarBackground: COLORS.secondery,
          tabStyle: {borderRadius: 15},
        }}>
        <Tabs.Screen
          options={{
            tabBarIcon: ({focused, color, size}: any) => (
              <Svg
                name="home"
                bgColor={color}
                size={focused ? size : size - 2}
              />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({focused, color, size}: any) => (
              <Svg
                name="event"
                bgColor={color}
                size={focused ? size : size - 2}
              />
            ),
          }}
          name="Events"
          component={Clubs}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({focused, color, size}: any) => (
              <Svg
                name="clubs"
                bgColor={color}
                size={focused ? size + 10 : size + 5}
              />
            ),
          }}
          name="Clubs"
          component={Clubs}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({focused, color, size}: any) => (
              <Svg
                name="notifications"
                bgColor={color}
                size={focused ? size - 2 : size - 4}
              />
            ),
          }}
          name="Notifications"
          component={Clubs}
        />
      </Tabs.Navigator>
    </ImageBackground>
  );
};

export default BottomNav;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
});
