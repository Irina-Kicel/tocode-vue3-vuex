import { createStore } from 'vuex'
import storage from '@/utils/storage.js'
export const store = createStore({

  state: {
    notes: [
      {
        id: 1,
        title: 'Learn Vue 3',
        tags: ['work']
      },
      {
        id: 2,
        title: 'Start course',
        tags: ['work', 'home']
      }
    ]
  },
  mutations: {
    addNotes(state, note){
      state.notes.push(note);
      storage.set('notes', state.notes)

    },

    remove(state, i){
		  state.notes.splice(i, 1);
      storage.set('notes', state.notes)
		},
    setLocalStorage(state, notes){
      storage.set('notes', notes)
    }
  },
  actions: {
    addNotes({commit}, {title, tags}){

      let setNote = {
        id: Math.round(Math.random()*10),
        title: title,
        tags:  tags
      }
      commit('addNotes', setNote);
    },
  setLocalStorage(context, notes) {
      context.commit('setLocalStorage', notes)
  },
    remove(store, i){
			store.commit('remove', i);
		}

  },
  getters: {
    getAllNotes(state){
      return state.notes
    }
  }
})
