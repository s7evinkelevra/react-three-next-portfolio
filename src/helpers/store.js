import create from 'zustand'
import shallow from 'zustand/shallow'
import React from 'react'

const useStoreImpl = create(() => {
  return {
    router: null,
    dom: null,
    overlay: React.createRef(),
    caption: React.createRef(),
    scroll: React.createRef(0)
  }
})

const useStore = (sel) => useStoreImpl(sel, shallow)
Object.assign(useStore, useStoreImpl)

const { getState, setState } = useStoreImpl

export { getState, setState }
export default useStore
