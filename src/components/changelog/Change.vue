<template>
  <div id="change" :class="{ first, last }">
    <div class="timeline"></div>
    <img class="icon" :src="change.icon" alt="feature-icon" />
    <div class="heading">
      <h3 class="version">
        Version
        <b>{{ change.version }}</b>
      </h3>
      <p class="uppercase date">{{ change.date.format('DD.MM.YYYY') }}</p>
      <h4 class="title">{{ change.title }}</h4>
      <markdown :value="change.description"></markdown>
    </div>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown'

export default {
  name: 'change',
  components: { Markdown },
  props: {
    change: Object,
    first: Boolean,
    last: Boolean
  }
}
</script>

<style lang="scss" scoped>
#change {
  /* Position */
  position: relative;
  padding: 36px 0;
  padding-left: 36px;

  /* Text */
  text-align: left;
}

.timeline {
  /* Position */
  position: absolute;
  left: -1px;
  top: 0;

  /* Display */
  height: 100%;
  width: 2px;

  /* Style */
  background-color: rgba(255, 255, 255, 0.1);
}

.first {
  .timeline {
    /* Display */
    border-radius: 1px 1px 0 0;

    /* Style */
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 30px);
  }
}

.last {
  .timeline {
    /* Display */
    height: 40px;
    border-radius: 0 0 1px 1px;
  }
}

.icon {
  /* Position */
  position: absolute;
  left: 0;

  /* Display */
  height: 36px;

  /* Transform */
  transform: translateX(-50%) translateY(3px);
}

.version {
  /* Display */
  margin: 0;

  /* Text */
  font-size: 22px;
  font-weight: 400;
}

.date {
  /* Display */
  margin: 0;
  margin-top: 4px;

  /* Style */
  opacity: 0.5;

  /* Text */
  font-size: 12px;
}

.title {
  margin: 0;
  margin-top: 24px;
  font-size: 18px;
}

.description {
  margin: 0;
  margin-top: 4px;
  opacity: 0.8;
}
</style>
