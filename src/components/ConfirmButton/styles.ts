import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(RectButton)`
  width: 80px;
  height: 56px;

  background-color: ${({ theme }) => theme.colors.additionalColors.shape.dark};
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary[500]};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.additionalColors.shape.main};
`
