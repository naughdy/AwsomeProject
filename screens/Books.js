import React from 'react';
import { View, Text, Button, ScrollView,FlatList } from 'react-native';
import BookDetails from '../components/BookDetails'
let images = [
{location:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105'} ,
{location:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1594616847'} ,
{location:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/kindle-book-cover-template-815bc0110c83ab604379f7ae87faf17e.jpg?ts=1561547093'},
{location:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/time-traveller-man-black-and-white-book-cover-design-template-4aaefba30315c0e1e671140927aa33ab_screen.jpg?ts=1589706546'},
{location:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fantasy-fiction-book-cover-design-template-6cde0f76e3bcb214fe1eedfead18fef4_screen.jpg?ts=1594616847'},
{location:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medieval-novel-knight-book-cover-design-template-c55c35125969106e70512fc9263602d8_screen.jpg?ts=1586725671'},
{location:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/novel-kindle-book-cover-design-template-41e90a87c1e53b5e6cd5f01db359b7f0_screen.jpg?ts=1561444054'},
{location:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/night-drawing-black-book-cover-design-template-ea74bc762820a4c4a426e4df9f3897ef.jpg?ts=1591610852'},
{location:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/kindle-design-template-926227944b265e21efd2b118cae89206_screen.jpg?ts=1603953977'}]
const Books = (props) => {
    return (
      <View>
        <Text>Book Screen</Text>
        <FlatList
        data = {images}
        renderItem={({item})=>{
          return <BookDetails imagetoshow={item.location}></BookDetails>
        }}
        keyExtractor={(item,index)=>'key'+index}
        numColumns={2}
        style={{alignSelf:'center'}}
        ></FlatList>
      </View>
    );

}

export default Books;
