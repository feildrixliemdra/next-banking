import React from 'react'
import HeaderBox from '../../components/HeaderBox'
import TotalBalanceBox from '../../components/TotalBalanceBox'
import RightSidebar from '../../components/RightSidebar'
import { getLoggedInUser } from '../../lib/actions/user.actions'

const Home = async () => {
  const user = await getLoggedInUser()
  return (
    <section id='home' className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            subtext='Manage your bank account and transaction effeciently'
            user={user?.name || 'Guest'}
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={33232.24}
          />
        </header>
        Recent Transaction Table
      </div>
      <RightSidebar
        user={user}
        banks={[
          { currentBalance: 123.5, mask: '1123' },
          { currentBalance: 500.5, mask: '3453' },
        ]}
      />
    </section>
  )
}

export default Home
