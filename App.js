import React from 'react';

import {
  Button,
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [items, setItems] = React.useState([
    {key: '1', item: 'item 1'},
    {key: '2', item: 'item 2'},
    {key: '3', item: 'item 3'},
    {key: '4', item: 'item 4'},
    {key: '5', item: 'item 5'},
    {key: '6', item: 'item 5'},
    {key: '7', item: 'item 5'},
    {key: '8', item: 'item 5'},
    {key: '9', item: 'item 5'},
    {key: '10', item: 'item 5'},
    {key: '11', item: 'item 5'},
    {key: '12', item: 'item 5'},
  ]);

  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ];

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...items, {key: Math.random(), item: 'POTANGINA MO'}]);
    setRefreshing(false);
  };

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
      renderSectionHeader={({section}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    />
    // <FlatList
    //   data={items}
    //   renderItem={({item}) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.item}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       colors={['red']}
    //     />
    //   }
    // />

    // <ScrollView
    //   horizontal={false}
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       colors={['red']}
    //     />
    //   }>
    //   {items.map(item => (
    //     <View style={styles.item}>
    //       <Text style={styles.text} key={item.key}>
    //         {item.item}
    //       </Text>
    //     </View>
    //   ))}
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
