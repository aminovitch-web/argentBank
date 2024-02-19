import React from 'react'
import iconChat from './icon-chat.png';
import iconMoney from './icon-money.png'
import iconSecurity from './icon-security.png'

export default function Features() {
  return (
    <>
    <div class="feature-item">
    <img
      src={iconChat}
      alt="Chat Icon"
      class="feature-icon"
    />
    <h3 class="feature-item-title">More savings means higher rates</h3>
    <p>
      The more you save with us, the higher your interest rate will be!
    </p>
  </div>
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
    <div class="feature-item">
          <img
            src={iconSecurity}
            alt="Chat Icon"
            class="feature-icon"
          />
          <h3 class="feature-item-title">Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>

    </>
  )
}
