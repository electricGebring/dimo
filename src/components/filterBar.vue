<template>
  <div>
    <h1></h1>
    <div class="filterBar">
      <div>

        <div class="filter-category">
          <h3>Globala mål</h3>
          <span class="toggle" v-on:click="this.isActiveGlobalBoal = !this.isActiveGlobalBoal"
            >+</span
          >
          <div class="filter" v-if="this.isActiveGlobalBoal">
            <div v-for="globalGoal in filterGlobalGoal" :key="globalGoal">
              <div class="filter">
                <p>{{ globalGoal }}</p>
                <input
                  type="checkbox"
                  :value="globalGoal"
                  id="globalGoal"
                  @change="check($event)"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div class="filter-category">
          <h3>KF Målområde</h3>
          <span class="toggle" v-on:click="this.isActivekFTargetArea = !this.isActivekFTargetArea"
            >+</span
          >
          <div class="filter" v-if="this.isActivekFTargetArea">
            <div v-for="kFTargetArea in filterKFTargetArea" :key="kFTargetArea">
              <div class="filter">
                <p>{{ kFTargetArea }}</p>
                <input
                  type="checkbox"
                  :value="kFTargetArea"
                  id="kFTargetArea"
                  @change="check($event)"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div class="filter-category">
          <h3>Dokumenttyp</h3>
          <span class="toggle" v-on:click="this.isActiveDocumenttype = !this.isActiveDocumenttype"
            >+</span
          >
          <div class="filter" v-if="this.isActiveDocumenttype">
            <div v-for="documenttype in filterDocumenttype" :key="documenttype">
              <div class="filter">
                <p>{{ documenttype }}</p>
                <input
                  type="checkbox"
                  :value="documenttype"
                  id="documenttype"
                  @change="check($event)"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div class="filter-category">
          <h3>Dokumentsanvarig</h3>
          <span class="toggle" v-on:click="this.isActiveDepartment = !this.isActiveDepartment"
            >+</span
          >
          <div class="filter" v-if="this.isActiveDepartment">
            <div v-for="department in filterDepartment" :key="department">
              <div class="filter">
                <p>{{ department }}</p>
                <input
                  type="checkbox"
                  :value="department"
                  id="department"
                  @change="check($event)"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div class="filter-category">
          <h3>Faställt av</h3>
          <span class="toggle" v-on:click="this.isActiveOffice = !this.isActiveOffice"
            >+</span
          >
          <div class="filter" v-if="this.isActiveOffice">
            <div v-for="office in filterOffice" :key="office">
              <div class="filter">
                <p>{{ office }}</p>
                <input
                  type="checkbox"
                  :value="office"
                  id="office"
                  @change="check($event)"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div class="filter-category">
          <h3>Tematiskt område</h3>
          <button class="toggle" v-on:click="isActiveThematic = !isActiveThematic">+</button>
          <div class="filter" v-if="isActiveThematic">
            <div v-for="thematic in filterThematic" :key="thematic">
              <div v-if="this.$route.params.Thematic == thematic">
                <p>{{ thematic }}</p>
                <input
                  type="checkbox"
                  :value="thematic"
                  id="thematic"
                  @change="check($event)"
                  checked="checked"
                />
              </div>
              <div v-else>
                <p>{{thematic}}</p>
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
          <h3>Utgångsdatum</h3>
          <span class="toggle" v-on:click="this.isActiveValidity = !this.isActiveValidity"
            >+</span
          >
          <div class="filter" v-if="this.isActiveValidity">
            <div v-for="validity in filterValidity" :key="validity">
              <div class="filter">
                <p>{{ validity }}</p>
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
      isActiveThematic: false,
      isActiveValidity: false,
    };
  },

  methods: {
    check: function (e) {
      this.checkedCategories.push(this.$route.params.Thematic)
      
      if (!this.checkedCategories.includes(e.target.value)) {
        this.checkedCategories.push(e.target.value);
      } else {
        this.checkedCategories = this.checkedCategories.filter((i) => {
          return i !== e.target.value
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
.filterBar {
  border: solid 1px #000;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 50%;
  padding: 20px;
  text-align: left;
  width: 400px;
}

.filter-category {
  margin-bottom: 20px;
  position: relative;
}

.toggle {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>
