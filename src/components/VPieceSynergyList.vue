<template>
  <div class="synergyList">
    <div class="type">{{type}}</div>
    <div v-for="synergy in synergiesByType" :key="synergy.name">
      <v-piece-synergy
        :titleName="synergy.name"
        :type="type"
        :combos="synergy.combos"
        :backColor="color[synergy.name]"
        :isHide="isHide"
      />
    </div>
  </div>
</template>

<script>
import VPieceSynergy from '@/components/VPieceSynergy';
import synergyData from '@/data/synergy/data';
import color from '@/data/types/color';

export default {
  components: {
    VPieceSynergy,
  },
  props: {
    type: {
      type: String,
      required: true,
      default: 'Species',
    },
    isHide: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  data() {
    return {
      synergiesByType: synergyData.data.filter(data => data.type === this.type),
      color,
    };
  },
};
</script>

<style>
.synergyList {
  display: inline-block;
  vertical-align: top;
}
.synergyList .type {
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 10px;
}
</style>

