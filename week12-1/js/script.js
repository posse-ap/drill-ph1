"use strict";

const slideOptions = {
  type: 'loop',
  gap: gap, // 1. 40px に設定
  width: '1096px',
  perPage: 3,
  padding: {
    // 2. 左右に padding 28px を追加
  },
  pagination: false,
  breakpoints: {
    768: {
      pagination: true,
      perPage: 1,
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // 3. Splide を初期化し、スライドを表示
});