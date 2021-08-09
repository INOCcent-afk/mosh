import React from 'react';

import {
  Button,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [items, setItems] = React.useState([
    {key: 1, item: 'item 1'},
    {key: 2, item: 'item 2'},
    {key: 3, item: 'item 3'},
    {key: 4, item: 'item 4'},
    {key: 5, item: 'item 5'},
    {key: 6, item: 'item 5'},
    {key: 7, item: 'item 5'},
    {key: 8, item: 'item 5'},
    {key: 9, item: 'item 5'},
    {key: 10, item: 'item 5'},
    {key: 11, item: 'item 5'},
    {key: 12, item: 'item 5'},
  ]);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...items, {key: 69, item: 'POTANGINA MO'}]);
    setRefreshing(false);
  };

  return (
    <ScrollView
      horizontal={false}
      style={styles.body}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {items.map(item => (
        <View style={styles.item}>
          <Text style={styles.text} key={item.key}>
            {item.item}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 35,
    margin: 10,
  },
});

export default App;
