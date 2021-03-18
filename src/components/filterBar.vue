<template>
  <div class="filterBar">
    <h3 class="filterbar-heading_h3">Filter</h3>
    <div class="filter-category">
      <h4 class="filterbar-heading_h4">Globala mål</h4>
      <span v-if="this.isActiveGlobalBoal"
        class="toggle"
        v-on:click="this.isActiveGlobalBoal = !this.isActiveGlobalBoal"
        >-</span
      >
      <span v-else
        class="toggle"
        v-on:click="this.isActiveGlobalBoal = !this.isActiveGlobalBoal"
        >+</span
      >
      <div v-if="this.isActiveGlobalBoal">
        <div
          class="filter"
          v-for="globalGoal in filterGlobalGoal"
          :key="globalGoal"
        >
          <p class="filterbar-checkbox__heading">{{ globalGoal }}</p>
          <input
            type="checkbox"
            :value="globalGoal"
            id="globalGoal"
            @change="check($event)"
          />
        </div>
      </div>
    </div>
    <hr />

    <div class="filter-category">
      <h4 class="filterbar-heading_h4">KF Målområde</h4>
      <span v-if = "this.isActivekFTargetArea"
        class="toggle"
        v-on:click="this.isActivekFTargetArea = !this.isActivekFTargetArea"
        >-</span
      >
      <span v-else
        class="toggle"
        v-on:click="this.isActivekFTargetArea = !this.isActivekFTargetArea"
        >+</span
      >
      <div v-if="this.isActivekFTargetArea">
        <div
          class="filter"
          v-for="kFTargetArea in filterKFTargetArea"
          :key="kFTargetArea"
        >
          <p class="filterbar-checkbox__heading">{{ kFTargetArea }}</p>
          <input
            type="checkbox"
            :value="kFTargetArea"
            id="kFTargetArea"
            @change="check($event)"
          />
        </div>
      </div>
    </div>
    <hr />

    <div class="filter-category">
      <h4 class="filterbar-heading_h4">Dokumenttyp</h4>
      <span v-if="this.isActiveDocumenttype"
        class="toggle"
        v-on:click="this.isActiveDocumenttype = !this.isActiveDocumenttype"
        >-</span
      >
      <span v-else
        class="toggle"
        v-on:click="this.isActiveDocumenttype = !this.isActiveDocumenttype"
        >+</span
      >
      <div v-if="this.isActiveDocumenttype">
        <div
          class="filter"
          v-for="documenttype in filterDocumenttype"
          :key="documenttype"
        >
          <p class="filterbar-checkbox__heading">{{ documenttype }}</p>
          <input
            type="checkbox"
            :value="documenttype"
            id="documenttype"
            @change="check($event)"
          />
        </div>
      </div>
    </div>
    <hr />

    <div class="filter-category">

      <h4 class="filterbar-heading_h4">Dokumentsanvarig</h4>
      <span v-if="this.isActiveDepartment"
        class="toggle"
        v-on:click="this.isActiveDepartment = !this.isActiveDepartment"
        >-</span
      >
      <span v-else
        class="toggle"
        v-on:click="this.isActiveDepartment = !this.isActiveDepartment"
        >+</span
      >

      <div v-if="this.isActiveDepartment">
        <div
          class="filter"
          v-for="department in filterDepartment"
          :key="department"
        >
          <p class="filterbar-checkbox__heading">{{ department }}</p>
          <input
            type="checkbox"
            :value="department"
            id="department"
            @change="check($event)"
          />
        </div>
      </div>
    </div>
    <hr />

    <div class="filter-category">
      <h4 class="filterbar-heading_h4">Faställt av</h4>
      <span v-if="this.isActiveOffice"
        class="toggle"
        v-on:click="this.isActiveOffice = !this.isActiveOffice"
        >-</span
      > <span v-else
        class="toggle"
        v-on:click="this.isActiveOffice = !this.isActiveOffice"
        >+</span
      >
      <div v-if="this.isActiveOffice">
        <div class="filter" v-for="office in filterOffice" :key="office">
          <p class="filterbar-checkbox__heading">{{ office }}</p>
          <input
            type="checkbox"
            :value="office"
            id="office"
            @change="check($event)"
          />
        </div>
      </div>
    </div>
    <hr />
   
   
    <div class="filter-category">
      <h4 class="filterbar-heading_h4">Tematiskt område</h4>
      <span v-if="isActiveThematic" class="toggle" v-on:click="isActiveThematic = !isActiveThematic" 
        >-</span
      <h4 class="filterbar-heading_h4">Tematiskt område</h4>
      <span class="toggle" v-on:click="isActiveThematic = !isActiveThematic"
        >+</span
      >
      <div v-if="isActiveThematic">
        <div v-for="thematic in filterThematic" :key="thematic">
          <div class="filter" v-if="this.$route.params.Thematic == thematic">
            <p class="filterbar-checkbox__heading">{{ thematic }}</p>
            <input
              type="checkbox"
              :value="thematic"
              id="thematic"
              @change="check($event)"
              checked="checked"
            />
          </div>
          <div class="filter" v-else>
            <p class="filterbar-checkbox__heading">{{ thematic }}</p>
            <input
              type="checkbox"
              :value="thematic"
              id="thematic"
              @change="check($event)"
            />
          </div>
        </div>
      </div>
    </div>
    <hr />

    <div class="filter-category">
      <h4 class="filterbar-heading_h4">Utgångsdatum</h4>
      <span v-if="this.isActiveValidity"
        class="toggle"
        v-on:click="this.isActiveValidity = !this.isActiveValidity"
        >-</span
      >
      <span v-else
        class="toggle"
        v-on:click="this.isActiveValidity = !this.isActiveValidity"
        >+</span
      >
      <div v-if="this.isActiveValidity">
        <div class="filter" v-for="validity in filterValidity" :key="validity">
          <p class="filterbar-checkbox__heading">{{ validity }}</p>
          <input
            type="checkbox"
            :value="validity"
            id="validity"
            @change="check($event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["Elements"],

  data() {
    return {
      checkedCategories: [],
      isActiveGlobalBoal: false,
      isActivekFTargetArea: false,
      isActiveDocumenttype: false,
      isActiveDepartment: false,
      isActiveOffice: false,
      isActiveThematic: true,
      isActiveValidity: false,
    };
  },

  methods: {
    check: function (e) {
      this.checkedCategories.push(this.$route.params.Thematic);

      if (!this.checkedCategories.includes(e.target.value)) {
        this.checkedCategories.push(e.target.value);
      } else {
        this.checkedCategories = this.checkedCategories.filter((i) => {
          return i !== e.target.value;
        });
      }
      this.$emit("filter", this.checkedCategories);
    },
  },

  computed: {
    filterGlobalGoal() {
      const filterGlobalGoal = new Set();
      this.$store.state.Elements.forEach((item) =>
        filterGlobalGoal.add(item.Documenttype)
      );
      return Array.from(filterGlobalGoal);
    },
    filterKFTargetArea() {
      const filterKFTargetArea = new Set();
      this.$store.state.Elements.forEach((item) =>
        filterKFTargetArea.add(item.Documenttype)
      );
      return Array.from(filterKFTargetArea);
    },
    filterDocumenttype() {
      const filterDocumenttype = new Set();
      this.$store.state.Elements.forEach((item) =>
        filterDocumenttype.add(item.Documenttype)
      );
      return Array.from(filterDocumenttype);
    },
    filterDepartment() {
      const filterDepartment = new Set();
      this.$store.state.Elements.forEach((item) =>
        filterDepartment.add(item.Documenttype)
      );
      return Array.from(filterDepartment);
    },
    filterOffice() {
      const filterOffice = new Set();
      this.$store.state.Elements.forEach((item) =>
        filterOffice.add(item.Documenttype)
      );
      return Array.from(filterOffice);
    },
    filterThematic() {
      const filterThematic = new Set();
      this.$store.state.Elements.forEach((item) =>
        filterThematic.add(item.Thematic)
      );
      return Array.from(filterThematic);
    },
    filterValidity() {
      const filterValidity = new Set();
      this.$store.state.Elements.forEach((item) =>
        filterValidity.add(item.Thematic)
      );
      return Array.from(filterValidity);
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
.filterbar-heading_h3 {
  font-size: 14px;
  font-weight: 200;
}
.filterbar-heading_h4 {
  font-size: 11px;
  font-weight: 200;
}
.filterbar-checkbox__heading {
  font-size: 9px;
  font-weight: 200;
  margin-left: 3px;
}
.filterBar {
  border: solid 1px #000;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  font-family: ‘Montserrat’, sans-serif;
  margin-left: 10%;
  max-width: 230px;
  padding: 21px 12px;
  text-align: left;

  .filter-category {
    cursor: pointer;
    margin-bottom: 20px;
    padding: 0 3px;
    position: relative;
  }

  .toggle {
    position: absolute;
    top: -5px;
    right: 5px;
    font-size: 18px;
  }

  .filter {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 24px;
    justify-content: space-between;
  }

  hr {
    width: 200px;
  }
}
</style>
