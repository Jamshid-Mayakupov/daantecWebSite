<template>
  <div class="bg-[#F4F7F9] font-sans selection:bg-theme-blue selection:text-white min-h-screen">
    
    <!-- 1. Hero Section with Video Background -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Video Background -->
      <div class="absolute inset-0 w-full h-full overflow-hidden bg-black">
        <video 
          ref="bgVideo"
          class="absolute inset-0 w-full h-full object-cover"
          autoplay
          loop
          muted
          playsinline
          poster="/dantec-video-cadr.png"
          @loadeddata="onVideoLoaded"
        >
          <source src="/daantec-video.mp4" type="video/mp4">
        </video>
        
        <!-- Yengil qora gradient (Faqat matnlar o'qilishi uchun, videoni to'sib qo'ymaydi) -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-0"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0"></div>
      </div>

      <!-- Sound Control Button (Premium) -->
      <button 
        @click="toggleMute"
        class="absolute top-28 right-8 lg:right-12 z-30 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group shadow-[0_0_30px_rgba(0,0,0,0.3)]"
      >
        <i 
          :class="isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up'" 
          class="text-white text-xl group-hover:text-theme-blue transition-colors duration-300"
        ></i>
      </button>

      <!-- Content -->
      <div class="container mx-auto px-4 py-20 relative z-10 pt-32">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-8 xl:col-span-7">
            <!-- Premium Badge -->
            <div class="hero-badge inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
              <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
              <span class="text-xs font-black text-white uppercase tracking-[0.25em]">{{ $t("hero.badge") }}</span>
            </div>

            <!-- Title -->
            <h1 class="hero-title text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
              {{ $t("hero.title") }}<br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{{ $t("hero.titleAccent") }}</span>
            </h1>

            <!-- Subtitle -->
            <p class="hero-text text-lg lg:text-xl text-white/90 mb-10 leading-relaxed font-medium max-w-2xl drop-shadow-md">
              {{ $t("hero.subtitle") }}
            </p>

            <!-- Buttons -->
            <div class="hero-buttons flex flex-col sm:flex-row gap-4 mb-16">
              <router-link to="/partners" class="group relative inline-flex items-center justify-center gap-3 bg-theme-blue text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(37,99,235,0.4)] overflow-hidden">
                <div class="absolute inset-0 w-0 bg-white/20 transition-all duration-[250ms] ease-out group-hover:w-full -z-10"></div>
                <i class="fas fa-handshake"></i>
                <span>{{ $t("hero.btnPartner") }}</span>
              </router-link>
              <router-link to="/products" class="group relative inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-white hover:text-slate-900 hover:-translate-y-1 shadow-lg">
                <i class="fas fa-box-open group-hover:text-theme-blue transition-colors"></i>
                <span>{{ $t("hero.btnCatalog") }}</span>
              </router-link>
            </div>

            <!-- Stats (Glassmorphism) -->
            <div class="hero-stats grid grid-cols-3 gap-4 lg:gap-6">
              <div class="stat-item bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[2rem] hover:bg-white/20 transition-colors duration-300 shadow-lg">
                <div class="text-3xl lg:text-5xl font-black text-white mb-1 counter drop-shadow-md">{{ animatedYears }}+</div>
                <div class="text-xs lg:text-sm font-semibold text-cyan-400 uppercase tracking-wider">{{ $t("hero.statsYears") }}</div>
              </div>
              <div class="stat-item bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[2rem] hover:bg-white/20 transition-colors duration-300 shadow-lg">
                <div class="text-3xl lg:text-5xl font-black text-white mb-1 counter drop-shadow-md">{{ animatedPartners }}+</div>
                <div class="text-xs lg:text-sm font-semibold text-cyan-400 uppercase tracking-wider">{{ $t("hero.statsPartners") }}</div>
              </div>
              <div class="stat-item bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[2rem] hover:bg-white/20 transition-colors duration-300 shadow-lg">
                <div class="text-3xl lg:text-5xl font-black text-white mb-1 counter drop-shadow-md">{{ animatedProducts }}</div>
                <div class="text-xs lg:text-sm font-semibold text-cyan-400 uppercase tracking-wider">{{ $t("hero.statsCountries") }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Directions Section -->
    <section class="py-24 bg-white relative">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 class="text-3xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">{{ $t("directions.title") }}</h2>
          <p class="text-lg text-gray-500 font-medium">{{ $t("directions.subtitle") }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div 
            v-for="(direction, index) in directions" 
            :key="index" 
            class="group relative bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] hover:border-theme-blue/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
            :style="{ animationDelay: index * 0.1 + 's' }"
          >
            <!-- Decorative Glow inside Card -->
            <div class="absolute -right-12 -top-12 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100 ease-out z-0 blur-xl pointer-events-none"></div>

            <div class="relative z-10 flex-1 flex flex-col">
              <div class="w-16 h-16 bg-blue-50 text-theme-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-theme-blue group-hover:text-white transition-all duration-500 shadow-inner group-hover:scale-110 origin-left">
                <i :class="direction.icon" class="text-2xl transition-transform duration-500"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-theme-blue transition-colors duration-300">{{ $t(direction.title) }}</h3>
              <p class="text-sm text-gray-500 mb-6 flex-1 leading-relaxed font-medium">{{ $t(direction.description) }}</p>
              
              <a href="#" class="inline-flex items-center text-theme-blue text-sm font-bold group/link mt-auto">
                {{ $t("directions.more") }} 
                <i class="fas fa-arrow-right ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Why Choose Us Section -->
    <section class="py-24 bg-[#F4F7F9] relative overflow-hidden">
      <!-- Background elements -->
      <div class="absolute right-0 top-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-20 z-0 pointer-events-none"></div>

      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          
          <div class="why-content order-2 lg:order-1">
            <h2 class="why-title text-3xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">{{ $t("whyUs.title") }}</h2>
            <p class="why-subtitle text-lg text-gray-600 font-medium mb-10 leading-relaxed max-w-lg">{{ $t("whyUs.subtitle") }}</p>

            <div class="space-y-6">
              <div v-for="(benefit, index) in benefits" :key="index" class="benefit-item group flex items-start gap-5">
                <div class="flex-shrink-0 w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-theme-blue transition-colors duration-300">
                  <i :class="benefit.icon" class="text-theme-blue text-xl group-hover:text-white transition-colors duration-300"></i>
                </div>
                <div class="pt-1">
                  <h4 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-theme-blue transition-colors duration-300">{{ $t(benefit.title) }}</h4>
                  <p class="text-sm text-gray-500 leading-relaxed font-medium">{{ $t(benefit.description) }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="why-image relative order-1 lg:order-2">
            <!-- Image Wrapper -->
            <div class="relative rounded-[3rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] aspect-[4/5] lg:aspect-square group">
              <div class="absolute inset-0 bg-theme-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay pointer-events-none"></div>
              <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=800&fit=crop" alt="Склад" class="why-img w-full h-full object-cover transform scale-105" />
              
              <!-- Premium Floating Badge -->
              <div class="quality-badge absolute bottom-8 left-8 right-8 lg:right-auto lg:-left-8 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-white z-20 flex items-center gap-5">
                <div class="relative flex-shrink-0 w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
                  <div class="absolute inset-0 bg-green-400 rounded-2xl animate-ping opacity-20"></div>
                  <i class="fas fa-check text-green-500 text-2xl relative z-10"></i>
                </div>
                <div>
                  <div class="text-2xl font-black text-gray-900 tracking-tight">100%</div>
                  <div class="text-sm font-semibold text-gray-500 uppercase tracking-wider">{{ $t("whyUs.guarantee") }}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 4. CTA Section -->
    <section class="py-24 relative overflow-hidden">
      <div class="container mx-auto px-4 max-w-5xl relative z-10">
        <div class="bg-slate-950 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl">
          
          <!-- Decorative Background Patterns -->
          <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-theme-blue/30 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div class="cta-content max-w-2xl mx-auto text-center relative z-20">
            <h2 class="cta-title text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">{{ $t("cta.title") }}</h2>
            <p class="cta-text text-lg text-blue-100/80 mb-10 font-medium leading-relaxed">{{ $t("cta.subtitle") }}</p>

            <div class="cta-buttons flex flex-col sm:flex-row gap-4 justify-center">
              <router-link to="/partners" class="group relative inline-flex items-center justify-center gap-3 bg-theme-blue text-white px-8 py-4 rounded-xl font-bold shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-1">
                <i class="fas fa-handshake"></i>
                {{ $t("cta.btnPartner") }}
              </router-link>
              <router-link to="/contact" class="group relative inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-white hover:text-slate-900 hover:-translate-y-1">
                <i class="fas fa-phone group-hover:text-theme-blue transition-colors"></i>
                {{ $t("cta.btnContact") }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "HomePage",
  data() {
    return {
      isMuted: true,
      
      // Stats
      animatedYears: 0,
      animatedPartners: 0,
      animatedProducts: 0,
      
      directions: [
        { icon: "fas fa-heartbeat", title: "directions.cardiology.title", description: "directions.cardiology.desc" },
        { icon: "fas fa-brain", title: "directions.neurology.title", description: "directions.neurology.desc" },
        { icon: "fas fa-hospital", title: "directions.resuscitation.title", description: "directions.resuscitation.desc" },
        { icon: "fas fa-globe-americas", title: "directions.standards.title", description: "directions.standards.desc" }
      ],
      benefits: [
        { icon: "fas fa-certificate", title: "whyUs.certification.title", description: "whyUs.certification.desc" },
        { icon: "fas fa-industry", title: "whyUs.direct.title", description: "whyUs.direct.desc" },
        { icon: "fas fa-shield-alt", title: "whyUs.quality.title", description: "whyUs.quality.desc" },
        { icon: "fas fa-user-md", title: "whyUs.expertise.title", description: "whyUs.expertise.desc" }
      ]
    };
  },
  mounted() {
    this.initGsapAnimations();
    this.animateCounters();
  },
  beforeUnmount() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  },
  methods: {
    onVideoLoaded() {
      // Видео загружено и готово к воспроизведению
      console.log('Background video loaded');
    },
    
    toggleMute() {
      this.isMuted = !this.isMuted;
      this.$refs.bgVideo.muted = this.isMuted;
    },
    
    // Animations
    initGsapAnimations() {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.from(".hero-badge", { y: 30, opacity: 0, duration: 0.8 })
        .from(".hero-title", { y: 50, opacity: 0, duration: 1 }, "-=0.4")
        .from(".hero-text", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-buttons", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".stat-item", { y: 30, opacity: 0, duration: 0.6, stagger: 0.15 }, "-=0.5");

      gsap.from(".why-title", { x: -80, opacity: 0, duration: 1, scrollTrigger: { trigger: ".why-content", start: "top 75%" } });
      gsap.from(".why-subtitle", { x: -60, opacity: 0, duration: 0.8, delay: 0.2, scrollTrigger: { trigger: ".why-content", start: "top 75%" } });
      gsap.from(".benefit-item", { x: -50, opacity: 0, duration: 0.8, stagger: 0.15, scrollTrigger: { trigger: ".benefit-item", start: "top 85%" } });
      gsap.from(".why-image", { x: 100, opacity: 0, duration: 1.2, scrollTrigger: { trigger: ".why-image", start: "top 75%" } });
      gsap.to(".why-img", { scale: 1.1, ease: "none", scrollTrigger: { trigger: ".why-img", start: "top bottom", end: "bottom top", scrub: true } });
      gsap.from(".quality-badge", { scale: 0, rotation: -180, opacity: 0, duration: 0.8, ease: "back.out(1.7)", scrollTrigger: { trigger: ".quality-badge", start: "top 85%" } });

      gsap.from(".cta-title", { scale: 0.8, opacity: 0, duration: 1, ease: "back.out(1.7)", scrollTrigger: { trigger: ".cta-content", start: "top 80%" } });
      gsap.from(".cta-text", { y: 30, opacity: 0, duration: 0.8, delay: 0.3, scrollTrigger: { trigger: ".cta-content", start: "top 80%" } });
      gsap.from(".cta-buttons", { y: 30, opacity: 0, duration: 0.8, delay: 0.5, scrollTrigger: { trigger: ".cta-content", start: "top 80%" } });
    },

    animateCounters() {
      const duration = 2000, steps = 60, yearTarget = 15, partnersTarget = 50, productsTarget = 3;
      const yearIncrement = yearTarget / steps, partnersIncrement = partnersTarget / steps, productsIncrement = productsTarget / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        this.animatedYears = Math.min(Math.floor(yearIncrement * currentStep), yearTarget);
        this.animatedPartners = Math.min(Math.floor(partnersIncrement * currentStep), partnersTarget);
        this.animatedProducts = Math.min(Math.floor(productsIncrement * currentStep), productsTarget);
        if (currentStep >= steps) clearInterval(interval);
      }, duration / steps);
    }
  }
};
</script>

<style scoped>
.text-theme-blue {
  color: #2563EB;
}
.bg-theme-blue {
  background-color: #2563EB;
}
</style>