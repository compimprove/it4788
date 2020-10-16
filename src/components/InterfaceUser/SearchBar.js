import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar style={{
            borderRadius:30,
            height:40,
            marginTop:10,
            marginLeft:10,
            width:'80%'
        }}
      placeholder="Tìm kiếm"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;