import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CreateNoteRequest } from '../clientApi'

type NoteDraftStore = {
  draft: CreateNoteRequest
  setDraft: (newNoteDraft: CreateNoteRequest) => void
  clearDraft: () => void
}

export const useNoteDraft = create<NoteDraftStore>()(
  persist(
    (set) => {
      return {
        // favorites: [{ id: 'asd' }, { id: 'asda' }],
        // favorites:['asd',asd],
        // setToFav: (newFav) => set(prev=>{ favorites :;[...prev, newFav]}),
        // removeFrom:(id:string)=>set((prev)=>{favorites:prev.favorites.filter(el!==id)}),
        // removeFrom: (id: string) =>
        //   set((prev) => {
        //     favorites: prev.favorites.filter((el) => el.id !== id)
        //   }),
        draft: {
          title: '',
          content: '',
          categoryId: '',
        },
        setDraft: (newNoteDraft: CreateNoteRequest) => {
          return set({
            draft: newNoteDraft,
          })
        },
        clearDraft: () => {
          return set({
            draft: {
              title: '',
              content: '',
              categoryId: '',
            },
          })
        },
      }
    },
    {
      name: 'draft',
      // partialize: (store) =>  store.draft,
      partialize: (store) => {
        return { draft: store.draft }
      },
    }
  )
)
// export const useNoteDraft = create<NoteDraftStore>()((set) => {
//   return {
//     draft: {
//       title: '',
//       content: '',
//       categoryId: '',
//     },
//     setDraft: (newNoteDraft: CreateNoteRequest) => {
//       return set({
//         draft: newNoteDraft,
//       })
//     },
//     clearDraft: () => {
//       return set({
//         draft: {
//           title: '',
//           content: '',
//           categoryId: '',
//         },
//       })
//     },
//   }
// })
