<template>
  <div class="savedlist-container">
    <h3>Mina sparade dokument</h3>
    <div class="savedlist-object">
      <img
        class="pdf-icon"
        src="https://i.ibb.co/5M6fZr1/Test-23.png"
        alt="Test-23"
        border="0"
      />
      <h4>Styrdokument nummer # 34</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        risus odio tincidunt nulla suspendisse tempus
      </p>
    </div>
    <div class="savedlist-object">
      <img
        class="pdf-icon"
        src="https://i.ibb.co/5M6fZr1/Test-23.png"
        alt="Test-23"
        border="0"
      />
      <h4>Styrdokument nummer # 34</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        risus odio tincidunt nulla suspendisse tempus
      </p>
    </div>
    <div class="savedlist-object">
      <img
        class="pdf-icon"
        src="https://i.ibb.co/5M6fZr1/Test-23.png"
        alt="Test-23"
        border="0"
      />
      <h4>Styrdokument nummer # 34</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        risus odio tincidunt nulla suspendisse tempus
      </p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
.savedlist-container {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 20vw;
  padding: 16px 40px 16px 40px;
  margin-top: 30px;
  font-family: Montserrat;

  h3 {
    font-style: normal;
    font-weight: bolder;
    font-size: 16px;
    line-height: 20px;
    color: #002065;
  }

  .savedlist-object {
    margin-top: 20px;

    .pdf-icon {
      width: 40px;
      float: left;
      margin-right: 10px;
    }
    h4 {
      font-style: normal;
      font-size: 12px;
      line-height: 16px;
      color: #2c365a;
      margin: 0;
      
      &:hover {
        color: #C0C7D9;
      }
    }
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 7px;
      line-height: 9px;
      color: #000000;
      margin: 0;
    }
  }
}
</style>
