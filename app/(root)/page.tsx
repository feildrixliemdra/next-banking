import React from 'react'
import HeaderBox from '../../components/HeaderBox'
import TotalBalanceBox from '../../components/TotalBalanceBox'

const Home = () => {
  const user = { firstName: 'Babaev' }
  return (
    <section id='home' className='home'>
      <div className='home-content'>
        <HeaderBox
          type='greeting'
          title='Welcome'
          subtext='Manage your bank account and transaction effeciently'
          user={user?.firstName || 'Guest'}
        />
        <TotalBalanceBox
          accounts={[]}
          totalBanks={2}
          totalCurrentBalance={33232.24}
        />
      </div>
    </section>
  )
}

export default Home
