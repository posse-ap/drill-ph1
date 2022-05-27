"use strict";

{
  const a = () => {
    const d = 'おはよう'
    console.log(d);
    b();
  }

  const b = () => {
    const e = 'こんにちは'
    console.log(e);
    c();
  }

  const c = () => {
    const f = 'こんばんは'
    console.log(f);
  }
}

a()