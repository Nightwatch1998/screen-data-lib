<template>
    <div class="home">
      <svg width="0" height="0">
        <defs>
          <symbol id="more" viewBox="0 0 100 100">
            <circle r="5" cx="20" cy="25" fill="currentColor"></circle>
            <circle r="5" cx="20" cy="50" fill="currentColor"></circle>
            <circle r="5" cx="20" cy="75" fill="currentColor"></circle>
            <line x1="40" y1="25" x2="90" y2="25" stroke-width="8" stroke="currentColor"></line>
            <line x1="40" y1="50" x2="80" y2="50" stroke-width="8" stroke="currentColor"></line>
            <line x1="40" y1="75" x2="90" y2="75" stroke-width="8" stroke="currentColor"></line>
          </symbol>
          <symbol id="filledArrowRight" viewBox="0 0 100 100">
            <polyline points="20 10,80 50,20 90" fill="currentColor"></polyline>
          </symbol>
          <symbol id="ArrowRight" viewBox="0 0 100 100">
            <polyline points="20 10,80 50,20 90" fill="transparent" stroke="currentColor" stroke-width="3"></polyline>
          </symbol>
        </defs>
      </svg>
    </div>
  </template>
  <script>
    export default {
      name:"TestComponent"
    }
  </script>