import React from 'react';
import { Switch, Text, View } from 'react-native';
import SearchInput from '../../../ui/SearchInput';
import styles from './styles';

type HeaderListProps = {
  showFavorite: boolean
  setShowFavorite: (value: boolean) => void
  searchValue: string
  setSearchValue: (value: string) => void
}

const HeaderList = ({
  showFavorite,
  setShowFavorite,
  searchValue,
  setSearchValue,
}: HeaderListProps) => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.favoriteBox}>
        <Text>Ver Favoritos</Text>
        <Switch
          onValueChange={(value) => setShowFavorite(value)}
          value={showFavorite}
          aria-label="Ver Favoritos"
        />
      </View>
      <SearchInput
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder="Buscar por nombre o símbolo"
      />
    </View>
  );
};

export default HeaderList;
