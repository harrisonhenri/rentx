import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 120px;

  background-color: ${({ theme }) =>
    theme.colors.additionalColors.background.secondary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  margin-bottom: 16px;
`

export const Details = styled.View``

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
  color: ${({ theme }) => theme.fonts.colors.detail};
  font-size: ${RFValue(8)}px;

  text-transform: uppercase;
`

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
  color: ${({ theme }) => theme.fonts.colors.detail};
  font-size: ${RFValue(16)}px;
`

export const About = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 16px;
`

export const Rent = styled.View`
  margin-right: 24px;
`

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
  color: ${({ theme }) => theme.fonts.colors.detail};
  font-size: ${RFValue(8)}px;

  text-transform: uppercase;
`

export const Price = styled.View`
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${RFValue(16)}px;
`

export const CarImage = styled.Image`
  width: 160px;
  height: 80px;
`

export const Type = styled.View``
