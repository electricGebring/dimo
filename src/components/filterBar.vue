<template>
  <div class="filterBar">
    <h3 class="filterbar-heading_h3">Filter</h3>
    <div class="filter-category">
      <h4 class="filterbar-heading_h4">Globala mål</h4>
      <span
        v-if="this.isActiveGlobalBoal"
        class="toggle"
        v-on:click="this.isActiveGlobalBoal = !this.isActiveGlobalBoal"
        >-</span
      >
      <span v-else class="toggle" v-on:click="this.isActiveGlobalBoal = !this.isActiveGlobalBoal"
        >+</span
      >
      <div v-if="this.isActiveGlobalBoal">
        <div class="filter" v-for="globalGoal in filterGlobalGoal" :key="globalGoal.object.name">
          <p class="filterbar-checkbox__heading">
            <span class="ellipsis"
              >{{ globalGoal.object.name }} ({{ globalGoal.object.amount }})</span
            >
          </p>
          <input
            type="checkbox"
            :value="globalGoal.object.name"
            id="globalGoal"
            @change="check($event)"
            :checked="resetCheck.includes(globalGoal.object.name) || this.$route.params.Elements"
          />
        </div>
      </div>
    </div>
    <hr />

    <div class="filter-category">
      <h4 class="filterbar-heading_h4">KF Målområde</h4>
      <span
        v-if="this.isActivekFTargetArea"
        class="toggle"
        v-on:click="this.isActivekFTargetArea = !this.isActivekFTargetArea"
        >-</span
      >
      <span
        v-else
        class="toggle"
        v-on:click="this.isActivekFTargetArea = !this.isActivekFTargetArea"
        >+</span
      >
      <div v-if="this.isActivekFTargetArea">
        <div
          class="filter"
          v-for="KFTargetArea in filterKFTargetArea"
          :key="KFTargetArea.object.name"
        >
          <p class="filterbar-checkbox__heading">
            <span class="ellipsis"
              >{{ KFTargetArea.object.name.substring(2) }} ({{ KFTargetArea.object.amount }})</span
            >
          </p>
          <input
            type="checkbox"
            :value="KFTargetArea.object.name"
            id="kFTargetArea"
            @change="check($event)"
            :checked="resetCheck.includes(KFTargetArea.object.name) || this.$route.params.Elements"
          />
        </div>
      </div>
    </div>
    <hr />

    <div class="filter-category">
      <h4 class="filterbar-heading_h4">Dokumenttyp</h4>
      <span
        v-if="this.isActiveDocumenttype"
        class="toggle"
        v-on:click="this.isActiveDocumenttype = !this.isActiveDocumenttype"
        >-</span
      >
      <span
        v-else
        class="toggle"
        v-on:click="this.isActiveDocumenttype = !this.isActiveDocumenttype"
        >+</span
      >
      <div v-if="this.isActiveDocumenttype">
        <div
          class="filter"
          v-for="documenttype in filterDocumenttype"
          :key="documenttype.object.name"
        >
          <p class="filterbar-checkbox__heading">
            <span class="ellipsis"
              >{{ documenttype.object.name }} ({{ documenttype.object.amount }})</span
            >
          </p>
          <input
            type="checkbox"
            :value="documenttype.object.name"
            id="documenttype"
            @change="check($event)"
            :checked="resetCheck.includes(documenttype.object.name) || this.$route.params.Elements"
          />
        </div>
      </div>
    </div>
    <hr />

    <div class="filter-category">
      <h4 class="filterbar-heading_h4">Dokumentsanvarig</h4>
      <span
        v-if="this.isActiveDepartment"
        class="toggle"
        v-on:click="this.isActiveDepartment = !this.isActiveDepartment"
        >-</span
      >
      <span v-else class="toggle" v-on:click="this.isActiveDepartment = !this.isActiveDepartment"
        >+</span
      >

      <div v-if="this.isActiveDepartment">
        <div class="filter" v-for="department in filterDepartment" :key="department.object.name">
          <p class="filterbar-checkbox__heading">
            <span class="ellipsis"
              >{{ department.object.name }} ({{ department.object.amount }})</span
            >
          </p>

          <input
            type="checkbox"
            :value="department.object.name"
            id="department"
            @change="check($event)"
            :checked="resetCheck.includes(department.object.name) || this.$route.params.Elements"
          />
        </div>
      </div>
    </div>
    <hr />

    <div class="filter-category">
      <h4 class="filterbar-heading_h4">Faställt av</h4>
      <span
        v-if="this.isActiveOffice"
        class="toggle"
        v-on:click="this.isActiveOffice = !this.isActiveOffice"
        >-</span
      >
      <span v-else class="toggle" v-on:click="this.isActiveOffice = !this.isActiveOffice">+</span>
      <div v-if="this.isActiveOffice">
        <div class="filter" v-for="office in filterOffice" :key="office.object.name">
          <p class="filterbar-checkbox__heading">
            <span class="ellipsis">{{ office.object.name }} ({{ office.object.amount }})</span>
          </p>
          <input
            type="checkbox"
            :value="office.object.name"
            id="office"
            @change="check($event)"
            :checked="resetCheck.includes(office.object.name) || this.$route.params.Elements"
          />
        </div>
      </div>
    </div>
    <hr />

    <div class="filter-category">
      <h4 class="filterbar-heading_h4">Tematiskt område</h4>
      <span v-if="isActiveThematic" class="toggle" v-on:click="isActiveThematic = !isActiveThematic"
        >-</span
      >
      <span v-else class="toggle" v-on:click="isActiveThematic = !isActiveThematic">+</span>

      <div v-if="isActiveThematic">
        <div v-for="thematic in filterThematic" :key="thematic.object.name">
          <div
            class="filter"
            v-if="this.$route.params.Thematic == thematic.object.name"
          >
            <p class="filterbar-checkbox__heading">
              <span class="ellipsis"
                >{{ thematic.object.name }} ({{ thematic.object.amount }})</span
              >
            </p>
            <input
              type="checkbox"
              :value="thematic.object.name"
              id="thematic"
              @change="check($event)"
              :checked="resetCheck.includes(thematic.object.name) || this.$route.params.Elements"
            />
          </div>
          <div class="filter" v-else>
            <p class="filterbar-checkbox__heading">
              {{ thematic.object.name }} ({{ thematic.object.amount }})
            </p>
            <input
              type="checkbox"
              :value="thematic.object.name"
              id="thematic"
              @change="check($event)"
              :checked="resetCheck.includes(thematic.object.name) || this.$route.params.Elements"
            />
          </div>
        </div>
      </div>
    </div>
    <hr />

    <div class="filter-category">
      <h4 class="filterbar-heading_h4">Utgångsdatum</h4>
      <span
        v-if="this.isActiveValidity"
        class="toggle"
        v-on:click="this.isActiveValidity = !this.isActiveValidity"
        >-</span
      >
      <span v-else class="toggle" v-on:click="this.isActiveValidity = !this.isActiveValidity"
        >+</span
      >
      <div v-if="this.isActiveValidity">
        <div class="filter" v-for="validity in filterValidity" :key="validity.object.name">
          <p class="filterbar-checkbox__heading">
            <span class="ellipsis">{{ validity.object.name }} ({{ validity.object.amount }})</span>
          </p>
          <input
            type="checkbox"
            :value="validity.object.name"
            id="validity"
            @change="check($event)"
            :checked="resetCheck.includes(validity.object.name) || this.$route.params.Elements"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['resetCheck'],
  emits: ['filter'],

  data() {
    return {
      isActiveGlobalBoal: false,
      isActivekFTargetArea: false,
      isActiveDocumenttype: false,
      isActiveDepartment: false,
      isActiveOffice: false,
      isActiveThematic: '',
      isActiveValidity: false,
      filterGlobalGoal: this.filterOnKey('GlobalGoal'),
      filterKFTargetArea: this.filterOnKey('KFTargetArea'),
      filterDocumenttype: this.filterOnKey('Documenttype'),
      filterDepartment: this.filterOnKey('Department'),
      filterOffice: this.filterOnKey('Office'),
      filterThematic: this.filterOnKey('Thematic'),
      filterValidity: this.filterOnKey('Validity'),
    }
  },

  mounted() {
    this.isActiveThematic = true;
  },

  methods: {
    
    check: function(e) {
      if (this.$route.params.Elements) {
        this.$route.params = {Thematic: e.target.value}
      }
      this.$route.params = {Thematic: e.target.value}
      this.$emit('filter', e)
    },

    filterOnKey: function(key) {
      const filterKey = new Set()
      const arrayWithCount = []
      const objectToArray = []
      const elements = this.$store.state.Elements

      elements.forEach((index) => {
        filterKey.add(index[key])
      })

      for (let index of filterKey) {
        objectToArray.push(index)
      }

      for (let i = 0; i < objectToArray.length; i++) {
        for (let j = 0; j < elements.length; j++) {
          for (let k in elements[j]) {
            if (objectToArray[i] === elements[j][k]) {
              arrayWithCount[i] = {
                object: {name: elements[j][k], amount: 0},
              }
            }
          }
        }
      }
      for (let i = 0; i < objectToArray.length; i++) {
        for (let j = 0; j < elements.length; j++) {
          for (let k in elements[j]) {
            if (objectToArray[i] === elements[j][k]) {
              arrayWithCount[i].object.amount += 1
            }
          }
        }
      }

      return arrayWithCount.filter((index) => {
        return index.object.name.length > 0
      })
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
.filterbar-heading_h3 {
  font-size: 14px;
  font-weight: 200;
  color: #000;
  font-weight: bold;
}
.filterbar-heading_h4 {
  font-size: 11px;
  font-weight: 200;
  color: #000;
  font-weight: bold;
}
.filterbar-checkbox__heading {
  font-size: 9px;
  font-weight: 200;
  margin-left: 3px;
  color: #000;
  font-weight: bold;
}

.ellipsis {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
  white-space: nowrap;
}

.filterBar {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  height: fit-content;
  margin-top: 200px;
  max-width: 230px;
  min-width: 230px;
  padding: 21px 12px;
  text-align: left;

  .filter-category {
    margin-bottom: 20px;
    padding: 0 3px;
    position: relative;
  }

  .toggle {
    position: absolute;
    top: -5px;
    right: 5px;
    font-size: 18px;
    color: #686b6f;
  }

  .filter {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 24px;
    justify-content: space-between;
  }
  input {
    cursor: pointer;
  }

  hr {
    width: 200px;
    color: #d4d4d4;
    border-width: thin;
  }
}
</style>
