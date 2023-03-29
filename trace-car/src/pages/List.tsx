import React from 'react'
import AsyncBoundary from '../components/AsyncBoundary/AsyncBoundary'
import Error from '../components/Error'
import Items from '../components/Items'
import Loading from '../components/Loading'

const List = () => {

  return (
    <>
      <AsyncBoundary
				ErrorFallback={(arg) => <Error error={arg.error} />}
				SuspenseFallback={<Loading />}
			>
        <Items />
			</AsyncBoundary>
    </>
  )
}

export default List