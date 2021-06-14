//import liraries
import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import RestaurantDetails from '../components/RestaurantDetails';
import yelp from '../api/yelp';
// create a component
const MyComponent = (props) => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);
  const searchApi = async () => {
    let response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: term,
        location: 'san jose',
      },
    });
    console.log(response);
    setResult(response.data.businesses);
  };

  const filterByPrice = (price) => {
    return result.filter((item) => item.price == price);
  };

  useEffect(() => {
    setTerm('Pasta');
    searchApi();
  }, []);

  return (
    <View>
      <SearchBar
        value={term}
        onChange={(newTerm) => setTerm(newTerm)}
        onEndTerm={() => searchApi()}
      />
      <RestaurantDetails title="Cost Effective" data={filterByPrice('$')} />
      <RestaurantDetails title="Bit Pricer" data={filterByPrice('$$')} />
      <RestaurantDetails title="Big Spender" data={filterByPrice('$$$')} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default MyComponent;
