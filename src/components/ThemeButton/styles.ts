import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  padding: 12px 0;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.text};
`;
