import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.additionalColors.header};
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding-bottom: 80px;
`

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.additionalColors.shape.main};
  font-family: ${({ theme }) => theme.fonts.secondary[600]};

  margin-top: 40px;
`

export const Message = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.additionalColors.shape.main};
  font-family: ${({ theme }) => theme.fonts.primary[400]};
  text-align: center;

  margin-top: 16px;
  line-height: ${RFValue(24)}px;
`

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  margin: 80px 0;
`
