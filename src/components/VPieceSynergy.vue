<template>
  <div v-if="current > 0 || !isHide" class="synergy">
    <table>
      <tbody>
        <tr>
          <td class="title" :style="colorStyle">{{ titleName }}</td>
          <td :style="currentStyle" class="current">{{current}}</td>
          <td v-if="combo !== 0">→</td>
          <td v-if="combo !== 0" class="combo">{{combo}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PieceSynergy',
  props: {
    titleName: {
      default: 'TITLE',
      types: String,
      required: true,
    },
    combos: {
      default: [],
      types: Array,
      required: true,
    },
    backColor: {
      default: '#000',
      types: String,
      required: true,
    },
    type: {
      default: '',
      types: String,
      requried: true,
    },
    isHide: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      colorStyle: {
        backgroundColor: this.backColor,
        color: '#000',
      },
    };
  },
  computed: {
    currentStyle() {
      if (this.current === 0) {
        return {};
      }

      let result = {
        backgroundColor: '#CCC',
      };

      for (let i = 0; i < this.combos.length; i += 1) {
        if (this.current === this.combos[i]) {
          result = {
            backgroundColor: '#66FF99',
          };
          break;
        }

        if (this.current === this.combos[i] - 1) {
          result = {
            backgroundColor: '#FFE300',
          };
          break;
        }
      }

      return result;
    },
    current() {
      const type = this.type === 'Species' ? 'species' : 'classes';
      return this.$store.getters['piece/quantityByType'](type)[this.titleName];
    },
    combo() {
      const current = this.current;
      let result = 0;
      for (let i = 0; i < this.combos.length; i += 1) {
        if (current < this.combos[i]) {
          result = this.combos[i];
          break;
        }
      }
      return result;
    },
  },
};
</script>

<style scoped>
td.title {
  font-weight: bold;
  width: 120px;
  height: 30px;
}
td.current {
  border: 1px solid black;
  width: 15px;
}
td.combo {
  border: 1px solid black;
  width: 15px;
  background-color: aqua;
}
</style>

