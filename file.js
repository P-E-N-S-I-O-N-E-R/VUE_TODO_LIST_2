const app = Vue.createApp({});

app.component('todo', {
  data() {
    return {
      title: 'Список заметок ',
      myplaceholder: 'Введите заметку...',
      inputValue: '',
      notes: [],
      show: !true
    }
  },
  methods: {
    inputChange(event) {
      this.inputValue = event.target.value
    },
    addnew() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue),
        this.inputValue = ''
      }
    },
    removenote(index) {
this.notes.splice(index, 1)
    }
  },
  template: `
    <div class="open">
      <button class="trans" v-on:click="show = !show">
      <a v-if="show">Скрыть список</a>
      <a v-if="!show">Открыть список</a>
      </button>
    </div>
    <transition name="fade">
      <div class="card" v-if="show">  
        <div class="form-control">
          <h1> {{title}} </h1>
          <input type="text"
          :placeholder="myplaceholder"
          :value="inputValue"
          @input="inputChange"
          @keypress.enter="addnew">
        </div>
          <button class="btn_add" @click="addnew">Add</button>
          <hr>
          <ol class="list" v-if="notes.length !== 0">
            <li class="list-item" v-for="(note, index) in notes">
              {{index + 1}}.  {{note}}
              <button class="btn_delete" @click="removenote(index)">delete</button>
            </li>
          </ol>
        <div class="null" v-if="notes.length === 0">Список заметок пока пуст.</div>
      </div>
  </transition>`
})

app.mount('#container')