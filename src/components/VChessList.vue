<template>
  <div class="flex">
    <div class="pieceList">
      <div class="common">Common $1 (45)</div>
      <div v-for="piece in pieces1" :key="piece.name">
        <v-chess :name="piece.name" :className="piece.class" :species="piece.species"/>
      </div>
    </div>
    <div class="pieceList">
      <div class="uncommon">Uncommon $2 (30)</div>
      <div v-for="piece in pieces2" :key="piece.name">
        <v-chess :name="piece.name" :className="piece.class" :species="piece.species"/>
      </div>
    </div>
    <div class="pieceList">
      <div class="rare">Rare $3 (25)</div>
      <div v-for="piece in pieces3" :key="piece.name">
        <v-chess :name="piece.name" :className="piece.class" :species="piece.species"/>
      </div>
    </div>
    <div class="pieceList">
      <div class="mythic">Mystic $4 (15)</div>
      <div v-for="piece in pieces4" :key="piece.name">
        <v-chess :name="piece.name" :className="piece.class" :species="piece.species"/>
      </div>
    </div>
    <div class="pieceList">
      <div class="legendary">Legendary $5 (10)</div>
      <div v-for="piece in pieces5" :key="piece.name">
        <v-chess :name="piece.name" :className="piece.class" :species="piece.species"/>
      </div>
    </div>
  </div>
</template>

<script>
import VChess from '@/components/VChess';
import pieceData from '@/data/piece/data';

export default {
  components: {
    VChess,
  },
  data() {
    return {
      pieces1: pieceData.data.filter(data => data.cost === 1),
      pieces2: pieceData.data.filter(data => data.cost === 2),
      pieces3: pieceData.data.filter(data => data.cost === 3),
      pieces4: pieceData.data.filter(data => data.cost === 4),
      pieces5: pieceData.data.filter(data => data.cost === 5),
    };
  },
};
</script>

<style>
.flex {
  display: flex;
}
.pieceList {
  vertical-align: top;
  display: inline-block;
  margin: 0 20px;
}
.pieceList .common {
  color: #B2B2B2;
}
.pieceList .uncommon {
  color: #6799E2;
}
.pieceList .rare {
  color: #546BFF;
}
.pieceList .mythic {
  color: #CB2CEA;
}
.pieceList .legendary {
  color: #F67C00;
}
</style>
