import Ember from 'ember';

export default Ember.Controller.extend({

  newNoteTitle: null,

  actions: {
    createNote() {
      this.store.createRecord('note', {
        id: this.get('newNoteTitle') + '.md'
      }).save();
    },

    deleteNote() {
      console.log('deleting note');
    }
  }

});
