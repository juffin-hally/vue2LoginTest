<template>
  <div class="about">
    <Formular v-bind="{ 'choosedData': choosedData }" @sendDataToParent="getData" @sendNewDataToParent="getNewData" />
    <ul class="card__list">
      <li class="card" v-for="(item, index) in formArr">

        <h3 class="card__title">{{ item['title'] }} <button v-on:click="editData(item, index)">Edit</button></h3>
        <div class="card__content">
          {{ item['text'] }}
        </div>
        <p class="card__date">{{ item['date'] }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Formular from '../components/Formular.vue'
export default {
  name: "FormularView",
  data() {
    return {
      formArr: [],
      choosedData: {},

    }
  },
  components: {
    Formular
  },
  methods: {
    getData: function (formData: { text: string, title: string, date: string }) {
      let obj = { text: '', title: '', date: '' }
      obj.text = formData.text;
      obj.title = formData.title;
      obj.date = formData.date;

      this.formArr.push(obj);
    },
    getNewData: function (data: { text: string, title: string, date: string, index: number }) {
      let obj = { text: '', title: '', date: '' }
      obj.text = data.text;
      obj.title = data.title;
      obj.date = data.date;
      this.formArr[data.index] = obj;
    },
    editData: function (data: {}, index: number) {
      this.choosedData = data;
      this.choosedData.index = index;
    }
  }
}
</script>