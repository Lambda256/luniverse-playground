import React from 'react'
import AsyncBoundary from '../components/AsyncBoundary/AsyncBoundary'
import Error from '../components/Error'
import Loading from '../components/Loading'
import MyItems from '../components/MyItems'

const MyPage = () => {
  return (
    <>
      <AsyncBoundary
				ErrorFallback={(arg) => <Error error={arg.error} />}
				SuspenseFallback={<Loading />}
			>
				<MyItems />
			</AsyncBoundary>
    </>
  )
}

export default MyPage