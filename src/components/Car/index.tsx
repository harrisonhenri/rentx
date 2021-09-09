import React from 'react'

import GasolineSvg from '../../assets/gasoline.svg'
import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  CarImage,
  Type,
} from './styles'

interface Props {
  data: {
    brand: string
    name: string
    rent: {
      period: string
      price: number
    }
    thumbnail: string
  }
}

const Car: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>
      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  )
}

export { Car }
