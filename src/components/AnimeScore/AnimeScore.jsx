import { Text } from 'react-native';
import { animeScoreStyles } from './styles';

export default function AnimeScore({ score }) {
return (
    <Text style={animeScoreStyles.seriesMetaData}>
            <Text style={animeScoreStyles.star}>★</Text> {score}
          </Text>
)
}