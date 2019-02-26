<template>
  <div class="chess">
    <div class="flex name">
      <div class="color" :style="leftBackgroundColor"/>
      <div class="text" :style="nameStyle">{{ name }}</div>
      <div class="color" :style="rightBackgroundColor"/>
    </div>
    <div class="star-list">
      <div
        class="button"
        @click.left="addPiece(1)"
        @click.right="removePiece(1)"
        :style="quantity1Style">
        <div>★</div>
        <div>{{ quantity1 }}</div>
      </div>
      <div class="button" @click.left="addPiece(2)" @click.right="removePiece(2)">
        <div>★★</div>
        <div>{{ quantity2 }}</div>
      </div>
      <div class="button" @click.left="addPiece(3)" @click.right="removePiece(3)">
        <div>★★★</div>
        <div>{{ quantity3 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import color from '@/data/types/color';
import synergyData from '@/data/synergy/data';

export default {
  name: 'Chess',
  props: {
    name: {
      default: 'PIECE',
      type: String,
      required: true,
    },
    className: {
      default: 'NONE',
      type: String,
      required: true,
    },
    species: {
      default: () => [],
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      leftBackgroundColor: {
        backgroundColor: color[this.species[0]],
      },
      rightBackgroundColor: {
        backgroundColor: color[this.className],
      },
    };
  },

  computed: {
    quantity1Style() {
      let result = {};
      if (this.quantity1 === 1) {
        result = {
          backgroundColor: '#DDD',
        };
      } else if (this.quantity1 === 2) {
        result = {
          backgroundColor: '#FBC541',
        };
      } else if (this.quantity1 === 3) {
        result = {
          backgroundColor: '#5BB734',
        };
      }
      return result;
    },
    quantity2Style() {
      let result = {};
      if (this.quantity2 === 1) {
        result = {
          backgroundColor: '#DDD',
        };
      } else if (this.quantity2 === 2) {
        result = {
          backgroundColor: '#FBC541',
        };
      } else if (this.quantity2 === 3) {
        result = {
          backgroundColor: '#5BB734',
        };
      }
      return result;
    },
    nameStyle() {
      if (this.quantity1 === 0 && this.quantity2 === 0 && this.quantity3 === 0) {
        let combine = false;

        const comboClass = synergyData.data.filter(data => data.name === this.className)[0].combos;
        const quantityClass = this.$store.getters['piece/quantityByType']('classes')[this.className];

        let result = {};

        for (let i = 0; i < comboClass.length; i += 1) {
          if (quantityClass !== 0 && quantityClass === comboClass[i] - 2) {
            result = {
              backgroundColor: '#CCC',
            };
          }
          if (quantityClass !== 0 && quantityClass === comboClass[i] - 1) {
            result = {
              backgroundColor: '#FD7B3C',
            };
            combine = true;
            break;
          }
        }

        for (let j = 0; j < this.species.length; j += 1) {
          const speciesClass = synergyData.data
            .filter(data => data.name === this.species[j])[0].combos;
          const quantitySpecies = this.$store.getters['piece/quantityByType']('species')[this.species[j]];

          for (let i = 0; i < speciesClass.length; i += 1) {
            if (quantitySpecies !== 0 && quantitySpecies === speciesClass[i] - 2) {
              if (!combine) {
                result = {
                  backgroundColor: '#CCC',
                };
              }
            }
            if (quantitySpecies !== 0 && quantitySpecies === speciesClass[i] - 1) {
              if (combine) {
                result = {
                  backgroundColor: '#0078D7',
                };
              } else {
                result = {
                  backgroundColor: '#00B900',
                };
              }
              break;
            }
          }
        }

        return result;
      }
      return {};
    },
    quantity1() {
      return this.$store.getters['piece/quantityByName'][this.name][0];
    },
    quantity2() {
      return this.$store.getters['piece/quantityByName'][this.name][1];
    },
    quantity3() {
      return this.$store.getters['piece/quantityByName'][this.name][2];
    },
  },

  methods: {
    addPiece(index) {
      this.$store.dispatch(`piece/addPiece${index}`, {
        name: this.name,
        className: this.className,
        species: this.species,
      });
    },
    removePiece(index) {
      this.$store.dispatch(`piece/removePiece${index}`, {
        name: this.name,
        className: this.className,
        species: this.species,
      });
    },
    onMouseClick(e, index) {
      if (e.button === 0) {
        this.addPiece(index);
      } else if (e.button === 2) {
        this.removePiece(index);
      }
    },
  },
};
</script>

<style>
.chess {
  display: flex;
  flex-direction: column;
}

.chess .color {
  width: 10px;
}

.chess div.text {
  flex-grow: 1;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  padding: 0 5px;
}

.chess .star-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.button {
  background-color: #fff;
  cursor: pointer;
  padding: 0 5px;
  user-select: none;
}

.button:hover {
  background-color: #ccc;
}
</style>
