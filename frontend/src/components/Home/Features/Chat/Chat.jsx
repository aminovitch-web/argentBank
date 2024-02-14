import React from 'react'
import iconChat from './icon-chat.png';

export default function Chat() {
  return (
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
  )
}
