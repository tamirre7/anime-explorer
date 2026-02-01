import { Text } from 'react-native';
import { animeCardStyles } from '../AnimeCard/styles';

export default function AnimeScore({ score }) {
return (
    <Text style={animeCardStyles.seriesMetaData}>
            <Text style={animeCardStyles.star}>★</Text> {score}
          </Text>
)
}