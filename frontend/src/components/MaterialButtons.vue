<script>
export default {
  data() {
    return {
      mat: 3,
      thickn: 50,
      options1: [
        { text: 'neutralB', value: 30 },
        { text: '1.03B', value: 28 },
        { text: '1.31', value: 28 }
      ],
      options2: [
        { text: 'neutralC', value: 40 },
        { text: '1.03C', value: 38 },
        { text: '1.41', value: 42 }
      ],
      options3: [
        { text: 'neutral', value: 50 },
        { text: '2.30', value: 55 },
        { text: '2.51', value: 56 },
        { text: '2.70', value: 58 },
        { text: '2.90', value: 60 }
      ]
    }
  },
  methods: {
    switchActive(n) {
      this.mat = n
      if (n === 1) {
        this.thickn = 30
        this.$emit('thicknChanged', this.thickn)
      } else if (n === 2) {
        this.thickn = 40
        this.$emit('thicknChanged', this.thickn)
      } else {
        this.thickn = 50
        this.$emit('thicknChanged', this.thickn)
      }
    },
    changeThickn() {
      this.$emit('thicknChanged', this.thickn)
    }
  }
}
</script>

<template>
  <div class="material">
    <h3>Material</h3>
    <div class="craft">
      <button class="btn-primary" :class="{ active: mat === 1 }" @click="switchActive(1)">B</button>
      <button class="btn-primary" :class="{ active: mat === 2 }" @click="switchActive(2)">C</button>
      <button class="btn-primary" :class="{ active: mat === 3 }" @click="switchActive(3)">
        BC
      </button>
    </div>
    <div class="quality">
      <label for="quality">Quality: </label>
      <select v-if="mat === 1" v-model="thickn" @change="changeThickn">
        <option v-for="option1 in options1" :value="option1.value" :key="option1.id">
          {{ option1.text }}
        </option>
      </select>
      <select v-else-if="mat === 2" v-model="thickn" @change="changeThickn">
        <option v-for="option2 in options2" :value="option2.value" :key="option2.id">
          {{ option2.text }}
        </option>
      </select>
      <select v-else v-model="thickn" @change="changeThickn">
        <option v-for="option3 in options3" :value="option3.value" :key="option3.id">
          {{ option3.text }}
        </option>
      </select>
    </div>
    <p><b>thickness:</b> {{ thickn }}</p>
  </div>
</template>

<style scoped>
.material {
  margin: 50px;
  padding: 50px;
  border: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  /* display: inline-block; */
  margin: 10px 0;
  padding: 0.5em 1em;
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
.quality {
  margin: 30px 0px;
}
</style>
