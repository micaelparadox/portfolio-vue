<template>
  <div class="">
    <AppNavbar />
    <ProfileSection />
    <ExperienceSection />
    <WorkSlider />
    <AboutSection />
    <ContactSection />
  </div>
</template>


<script>
import ProfileSection from './components/ProfileSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import WorkSlider from './components/WorkSlider.vue';
import AboutSection from './components/AboutSection.vue';
import ContactSection from './components/ContactSection.vue';
import AppNavbar from './components/AppNavbar.vue';

export default {
  components: {
    ProfileSection,
    ExperienceSection,
    WorkSlider,
    AboutSection,
    ContactSection,
    AppNavbar,
  }
};
</script>
