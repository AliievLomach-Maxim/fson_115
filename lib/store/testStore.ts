import { create } from 'zustand'

// export const useNoteDraft = create((set) => {
// return {

// }
// //   bears: 0,
// //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
// //   removeAllBears: () => set({ bears: 0 }),
// //   updateBears: (newBears) => set({ bears: newBears }),
// })

export const useGlobalUser = create((set) => {
  return {
    user: null,
    secretId: 'qwerty',
    secretKey: '123',
    setGlobalUser: (newUser: { name: string }) => {
      return set({
        user: newUser,
        secretId: Math.random(),
        secretKey: Math.random(),
      })
    },
    generateSecretKey: () => {
      return set({
        secretKey: Math.random(),
      })
    },
    clearAll: () => {
      return set({ user: null, secretId: '', secretKey: '' })
    },
  }
})
