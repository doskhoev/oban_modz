import React from 'react'
import { AppStore } from '../../App.store'
import styled from 'styled-components'
import { observer } from 'mobx-react'

const Wrapper = styled.div`
  padding: 10px;
`
const ItemWrapper = styled.div`
  width: 150px;
  margin: 3px;
  padding: 10px;
  border: 1px solid gray;
  text-align: center;
`
const ItemTitle = styled.div`
  font-size: 20px;
`
const ItemDescription = styled.div`
  font-size: 14px;
`
const ItemSize = styled.div`
  font-size: 12px;
`

interface IHomeProps {
  store: AppStore
}

@observer
export class Home extends React.Component<IHomeProps> {
  render() {
    const { items } = this.props.store
    return (
      <Wrapper>
        {items.map(item => {
          return (
            <ItemWrapper key={item.id}>
              {item.imageUrl && <img src={item.imageUrl} alt={item.imageUrl} />}
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
              <ItemSize>Size: {item.size}</ItemSize>
            </ItemWrapper>
          )
        })}
      </Wrapper>
    )
  }
}
