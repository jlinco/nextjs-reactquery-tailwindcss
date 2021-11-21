import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { useIsFetching } from "react-query"

const AppLoader = () => {
  const fetching = useIsFetching()

  return (
    <div className={`fixed top-2 left-4 ${fetching === 0 && 'hidden'}`}>
      <FontAwesomeIcon icon={faCircleNotch} spin size="2x" color="#8C32FF" />
    </div>
  )
}

export default AppLoader