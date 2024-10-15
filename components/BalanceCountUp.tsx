'use client'
import React from 'react'
import CountUp from 'react-countup'

const BalanceCountUp = ({
  balance,
  prefix,
}: {
  balance: number
  prefix: string
}) => {
  return <CountUp duration={2} prefix={prefix} end={balance} decimals={2} />
}

export default BalanceCountUp
