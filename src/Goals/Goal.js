import React from 'react' 
import { Link } from 'react-router-dom'

export default function Goal() {
 
return (
  <>
  <div>
    
      {/* <Forms /> */}
      <li><Link to="/form/1">Leisure Spending</Link></li>
      <li><Link to="/form/2">Savings Event</Link></li>
      <li><Link to="/form/3">Debt Repayment</Link></li>
      <li><Link to="/form/4">Emergency Funds</Link></li>
    
  </div>
  </>
)
}
