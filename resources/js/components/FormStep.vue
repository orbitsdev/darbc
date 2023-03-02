<template>
  <div class="form-step">
    <div class="form-step-content" :style="{ transform: `translateX(-${activeStepIndex * 100}%)` }">
      <slot :step="activeStepIndex + 1"></slot>
    </div>
    <div class="form-step-indicator">
      <div v-for="(step, index) in steps" :key="index" class="form-step-indicator-item" :class="{ active: index === activeStepIndex }">
        {{ index + 1 }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialStepIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeStepIndex: this.initialStepIndex,
      steps: []
    };
  },
  mounted() {
    this.steps = this.$slots.default.filter(slot => slot.tag);
    this.steps.forEach((step, index) => {
      step.componentOptions.propsData.stepIndex = index;
    });
  },
  methods: {
    nextStep() {
      if (this.activeStepIndex < this.steps.length - 1) {
        this.activeStepIndex++;
      }
    },
    previousStep() {
      if (this.activeStepIndex > 0) {
        this.activeStepIndex--;
      }
    }
  }
};
</script>

<style>
.form-step {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.form-step-content {
  display: flex;
  transition: transform 0.3s ease-in-out;
  height: 100%;
}

.form-step-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #f5f5f5;
}

.form-step-indicator-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  border-radius: 50%;
  background-color: #ccc;
  font-weight: bold;
  cursor: pointer;
}

.form-step-indicator-item.active {
  background-color: #007aff;
  color: #fff;
}
</style>
