import React from 'react'
import iconMoney from './icon-money.png'
export default function Money() {
  return (
    <div class="feature-item">
    <img
      src={iconMoney}
      alt="Chat Icon"
      class="feature-icon"
    />
    <h3 class="feature-item-title">More savings means higher rates</h3>
    <p>
      The more you save with us, the higher your interest rate will be!
    </p>
  </div>
  )
}
