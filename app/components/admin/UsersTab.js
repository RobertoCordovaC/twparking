/* @flow */
import React from 'react';
import { View } from 'react-native';
import TWButton from '../_common/TWFormControls/TWButton';

const AdminUsers = () => (
  <View>
    <TWButton
      i18n="title"
      onPress={() => { console.warn('yay'); }}
    />
  </View>
);

export default AdminUsers;
