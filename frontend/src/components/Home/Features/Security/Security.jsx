import React from 'react'
import iconSecurity from './icon-security.png'
export default function Security() {
  return (
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
  )
}
