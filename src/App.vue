<template>
  <div class="container">
    <profile-section></profile-section>
    <experience-section></experience-section>
    <work-slider></work-slider>
    <about-section></about-section>
    <contact-section></contact-section>
  </div>
</template>

<script>
import ProfileSection from './components/ProfileSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import WorkSlider from './components/WorkSlider.vue';
import AboutSection from './components/AboutSection.vue';
import ContactSection from './components/ContactSection.vue';

export default {
  components: {
    ProfileSection,
    ExperienceSection,
    WorkSlider,
    AboutSection,
    ContactSection
  }
};
</script>
