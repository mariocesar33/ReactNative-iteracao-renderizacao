import React from 'react';
import { View, Text, FlatList } from 'react-native';

import users from '../data/users';

const UserList = () => {

  function getUserItem({ item }){
    return <Text>{item.name}</Text>
  }

  return(
    <View>
      <FlatList
        data={users}
        keyExtractor={user => user.id.toString()}
        renderItem={getUserItem}
      />
    </View>
  );
};

export default UserList;