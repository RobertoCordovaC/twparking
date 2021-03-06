/* @flow */
import React, { Component } from 'react';
import navigationHeader from '../../navigation/NavigationStylesHelper';
import ProfileTab from './ProfileTab/ProfileTab';
import PaymentsTab from './PaymentsTab/PaymentsTab';
import SpotTab from './SpotTab';
import MoreTab from './MoreTab';
import CarTab from './CarTab/CarTab';
import HomeScreen from '../_common/HomeScreen/HomeScreen';

type Props = {
  navigation: Object
}

class UserHomeScreen extends Component<Props, {}> {
  static navigationOptions = navigationHeader.noHeader;

  render() {
    const { navigation } = this.props;
    const menuConfig = [
      { key: 'Profile', icon: 'user-ninja', content: <ProfileTab navigation={navigation} /> },
      { key: 'Car', icon: 'car-bump', content: <CarTab /> },
      { key: 'Payments', icon: 'money-bill-wave', content: <PaymentsTab navigation={navigation}/> },
      { key: 'Spot', icon: 'parking', content: <SpotTab /> },
      { key: 'More', icon: 'unicorn', content: <MoreTab /> },
    ];
    return <HomeScreen type="user" menuConfig={menuConfig} />;
  }
}

export default UserHomeScreen;
