<template>
  <div>
    <div class="flex">
      <v-chess-list/>
      <div>
        <v-piece-synergy-list type="Species" :isHide="isHide" />
        <v-piece-synergy-list type="Class" :isHide="isHide" />
        <input type="checkbox" id="hide" @change="(e) => hide(e)"><label for="hide">미보유 시너지 숨기기</label>
      </div>
    </div>
    <v-warehouse />
  </div>
</template>

<script>
import VChessList from '@/components/VChessList';
import VPieceSynergyList from '@/components/VPieceSynergyList';
import VWarehouse from '@/components/VWarehouse';

export default {
  name: 'HomeIndex',
  components: {
    VChessList,
    VPieceSynergyList,
    VWarehouse,
  },
  data() {
    return {
      isHide: false,
    };
  },
  methods: {
    hide(e) {
      this.isHide = e.target.checked;
    },
  },
};
</script>

