import React from 'react'
import AsyncBoundary from '../components/AsyncBoundary/AsyncBoundary'
import Error from '../components/Error'
import ItemInfo from '../components/ItemInfo'
import Loading from '../components/Loading'

const ItemInfoPage = () => {
  return (
    <>
      <AsyncBoundary
				ErrorFallback={(arg) => <Error error={arg.error} />}
				SuspenseFallback={<Loading />}
			>
				<ItemInfo />
			</AsyncBoundary>
    </>
  )
}

export default ItemInfoPage