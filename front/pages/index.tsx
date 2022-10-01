import React, { useState, useEffect } from 'react'
import NaverAddAdminContainer from '../components/container/NaverAddAdminContainer'
import TodosContainer from '../components/container/TodosContainer'
// NaverAddAdminContainer

type Props = {}

function front_test({ }: Props) {

  return (
      <div style={{ width: "100%", height: "100%", border: "1px solid blue" }}>
        <NaverAddAdminContainer />
      </div>
  )
}

export default front_test