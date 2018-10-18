/* @flow */
import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { scale } from 'react-native-size-matters';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import { colors } from '../styles/colors';
import TWHeader from './_common/TWHeader/TWHeader';
import navigationHeader from '../navigation/NavigationStylesHelper';
import Profile from './Profile';
import Payments from './Payments';
import History from './History';
import More from './More';
import fonts from '../styles/fonts';
import deviceHelper from '../util/deviceHelper';

type Props = {
  navigation: Object
}

type State = {
  selectedTab: string,
};

const iconColor = colors.primary400;
const selectedIconColor = colors.secondary500;

const getIcon = iconName => (
  <FontAwesome5Pro
    light
    color={iconColor}
    size={30}
    name={iconName}
  />
);

const getSelectedIcon = iconName => (
  <FontAwesome5Pro
    solid
    color={selectedIconColor}
    size={30}
    name={iconName}
  />
);

const getMenuItem = (name, iconName, menu) => ({
  key: name,
  title: name,
  icon: getIcon(iconName),
  selectedIcon: getSelectedIcon(iconName),
  menu,
});

const menuItems = [
  getMenuItem('Profile', 'user-ninja', <Profile />),
  getMenuItem('Payments', 'money-bill-wave', <Payments />),
  getMenuItem('History', 'file-invoice', <History />),
  getMenuItem('More', 'ellipsis-h', <More />),
];

class HomeScreen extends Component<Props, State> {
  static navigationOptions = navigationHeader.noHeader;

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: menuItems[0].key,
    };
  }

  getTitle() {
    const { selectedTab } = this.state;
    return selectedTab;
  }

  changeTab(selectedTab) {
    this.setState({ selectedTab });
  }

  render() {
    const { selectedTab } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary100 }}>
        {deviceHelper.isiPhoneX() ? (
          <View style={{
            backgroundColor: colors.primary900,
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            height: 80,
            zIndex: -1000,
          }}
          />
        ) : null}
        <TWHeader title={this.getTitle()} onPress={null} />
        <TabNavigator tabBarStyle={{ height: scale(65), backgroundColor: colors.primary900 }}>
          {menuItems.map(menuItem => (
            <TabNavigator.Item
              key={menuItem.key}
              titleStyle={{
                fontFamily: fonts.vt323.regular,
                fontSize: scale(15),
                color: iconColor,
              }}
              tabStyle={[{ borderBottomColor: colors.primary300 }]}
              selectedTitleStyle={{
                fontSize: scale(15),
                color: selectedIconColor,
              }}
              selected={selectedTab === menuItem.key}
              title={menuItem.title}
              renderIcon={() => menuItem.icon}
              renderSelectedIcon={() => menuItem.selectedIcon}
              onPress={() => this.changeTab(menuItem.key)}
            >
              {menuItem.menu}
            </TabNavigator.Item>
          ))}
        </TabNavigator>
        {deviceHelper.isiPhoneX() ? (
          <View style={{
            backgroundColor: colors.primary900,
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            height: 80,
            zIndex: -1000,
          }}
          />
        ) : null}
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
