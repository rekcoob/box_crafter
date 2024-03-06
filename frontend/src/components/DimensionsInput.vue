<script>
export default {
  data() {
    return {
      inputs: {
        length: null,
        width: null,
        height: null
      },
      // If true 1. btn=active, 2.=!active. If false 1.=not active, 2=active
      inner: true
    }
  },
  methods: {
    emitInputs() {
      console.log()
      //  emit object | 1. argument = method name, 2. = payload
      this.$emit('inputsChanged', this.inputs)
    }
  }
}
</script>

<template>
  <div class="">
    <h3>Dimensions</h3>
    <form>
      <div class="form-group">
        <!-- <button class="btn-primary btn-inner">Inner</button> -->
        <button class="btn-primary" :class="{ active: inner }" @click.prevent="inner = true">
          Inner
        </button>
        <input
          v-model="inputs.length"
          @input="emitInputs"
          :disabled="!inner"
          type="text"
          placeholder="Length"
        />
        <input
          v-model="inputs.width"
          @input="emitInputs"
          :disabled="!inner"
          type="text"
          placeholder="Width"
        />
        <input
          v-model="inputs.height"
          @input="emitInputs"
          :disabled="!inner"
          type="text"
          placeholder="Height"
        />
      </div>
      <div class="form-group">
        <!-- <button class="btn-primary">Outer</button> -->
        <button class="btn-primary" :class="{ active: !inner }" @click.prevent="inner = false">
          Outer
        </button>
        <input type="text" placeholder="Length" :disabled="inner" />
        <input type="text" placeholder="Width" :disabled="inner" />
        <input type="text" placeholder="Height" :disabled="inner" />
      </div>
    </form>
  </div>
</template>

<style scoped>
/* https://blog.logrocket.com/style-forms-css/ */
form {
  margin: 50px;
  padding: 50px;
  border: solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
}

input[type='text'] {
  background-color: #181a1b;
  color: #e8e6e3;
  width: 100%;
  padding: 12px 20px;
  margin: 6px 0;
  box-sizing: border-box;
  border: 1px solid #0062cc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 0.25rem;
  /* outline: none; */
}
input[type='text']:focus {
  border: 1px solid #0062cc;
  box-shadow: 0 0 20px #0062cc;
}
input[type='text']:disabled {
  border: 1px solid grey;
  opacity: 0.5;

  cursor: not-allowed;
}

button {
  display: inline-block;
  margin: 10px 0;
  padding: 0.75em 1.25em;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 0.25em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.btn-primary {
  background-color: #181a1b;
  color: #1e84ff;
  border: 1px solid #007bff;
}
.btn-primary:hover {
  border-color: #0056b3;
  box-shadow: 0 0 10px #0062cc;
}

.active {
  background-color: #0056b3;
  color: #fff;
}
</style>
