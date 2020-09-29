import React from 'react';
import { View, Text, FlatList } from 'react-native';

import users from '../data/users';

const UserForm = () => {

  function getUserItem({ item : user }){
    return <Text>{ user.email}</Text>
  } 

  return (
    <View>
      <FlatList
      data={users}
      keyExtractor={user => user.id}
      renderItem={getUserItem}
      />
    </View>
  );
}

export default UserForm;