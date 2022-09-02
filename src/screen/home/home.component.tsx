import React, {FunctionComponent, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './home.styles';

const Home: FunctionComponent = () => {
  const [items, setItems] = useState<any[]>([]);
  const getUserData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    })
      .then(data => data.json())
      .then(data => setItems(data));
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <View style={[styles.container]}>
      <Text> USER DETAILS </Text>
      {items &&
        items.map((item, index) => {
          return (
            <View style={styles.userContainer} key={index}>
              <Text>{`Name: ${item.name}`}</Text>
              <Text>{`Username: ${item.username}`}</Text>
              <Text>{`email: ${item.email}`}</Text>
            </View>
          );
        })}
    </View>
  );
};

export default Home;
