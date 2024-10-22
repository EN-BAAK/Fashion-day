import React from 'react'
import { Alert } from "react-bootstrap"

const Error = (): React.ReactNode => {
  return (
    <div className="flex-center">
      <div className="mx-2">
        <Alert
          variant="danger"
          className="fs-1 fw-bold font-special"
        >
          Sorry no products match your filter search ...clear the filter and try again😊
        </Alert>
      </div>
    </div>
  )
}

export default Error
