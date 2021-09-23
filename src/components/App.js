import React from 'react';
import Profile from './social-profile/Social-profile.js';
import user from './social-profile/user.json';
import Statistic from './statistics/statistic.js';
import statisticalData from './statistics/statistical-data.json';
import FriendList from './friends/FriendList.js';
import FriendListItem from './friends/friends.json';
import TransactionsArr from './transactions/Transactions';
import transactions from './transactions/transactions.json'





const App = () => (
    <>
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}/>
        
            
     
      <Statistic
            title={'Upload stats'}
            stats={statisticalData} />
        
        <FriendList
            
            friends={FriendListItem} />
        <TransactionsArr
            items={transactions}
        />
        
        
</>


)
export default App





