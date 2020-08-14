import React from 'react'
import { RecoilRoot, atom, useRecoilState } from 'recoil'

const countState = atom({
  key: 'countState',
  default: 0,
})

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  )
}

function Counter() {
  const [count, setCount] = useRecoilState(countState)

  function addCount() {
    setCount(count + 1)
  }

  function subCount() {
    setCount(count - 1)
  }

  return (
    <div>
      <button onClick={addCount}>up</button>
      <button onClick={subCount}>down</button>
      <p>{count}</p>
    </div>
  )
}

export default App
