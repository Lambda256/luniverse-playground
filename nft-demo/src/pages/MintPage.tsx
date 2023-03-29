import React from 'react'
import AsyncBoundary from '../components/AsyncBoundary/AsyncBoundary'
import Error from '../components/Error'
import Loading from '../components/Loading'
import MintForm from '../components/MintForm'

const MintPage = () => {
  return (
    <>
      <AsyncBoundary
				ErrorFallback={(arg) => <Error error={arg.error} />}
				SuspenseFallback={<Loading />}
			>
				<MintForm />
			</AsyncBoundary>
    </>
  )
}

export default MintPage