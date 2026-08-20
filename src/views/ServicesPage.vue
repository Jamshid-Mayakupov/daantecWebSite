<template>
  <div class="pt-20 bg-[#F4F7F9] font-sans selection:bg-theme-blue selection:text-white min-h-screen">
    
    <section class="py-20 relative overflow-hidden">
      <!-- Premium Background Glow Effects -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-theme-blue/30 to-transparent"></div>
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-theme-blue/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        
        <!-- Premium Badge / Header -->
        <div class="text-center mb-20" data-aos="fade-down">
          <div class="inline-flex items-center justify-center gap-4 px-6 py-3 rounded-full bg-white shadow-[0_10px_30px_-15px_rgba(37,99,235,0.2)] border border-blue-50/50 backdrop-blur-sm">
            <span class="w-2.5 h-2.5 rounded-full bg-theme-blue animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.5)]"></span>
            <span class="text-sm font-black text-theme-blue uppercase tracking-[0.25em]">{{ $t('services.badge') }}</span>
            <span class="w-2.5 h-2.5 rounded-full bg-theme-blue animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.5)]"></span>
          </div>
        </div>

        <!-- Services Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="group relative bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-15px_rgba(37,99,235,0.15)] border border-gray-100 hover:border-theme-blue/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full cursor-default"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <!-- Animated Bottom Border -->
            <div class="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 to-theme-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

            <!-- Decorative Glow Blob inside Card -->
            <div class="absolute -right-12 -top-12 w-48 h-48 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-50 group-hover:scale-100 ease-out z-0 blur-2xl pointer-events-none"></div>

            <div class="relative z-10 flex-1 flex flex-col">
              <!-- Icon Container -->
              <div class="w-16 h-16 bg-blue-50 text-theme-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-theme-blue group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-blue-500/30 group-hover:scale-110 transform origin-left">
                <i :class="service.icon" class="text-2xl transition-transform duration-500 group-hover:scale-110"></i>
              </div>
              
              <!-- Title & Description -->
              <h3 class="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-theme-blue transition-colors duration-300">
                {{ $t(service.title) }}
              </h3>
              <p class="text-sm text-gray-500 mb-8 leading-relaxed font-medium flex-1">
                {{ $t(service.description) }}
              </p>

              <!-- Features List -->
              <div class="pt-6 border-t border-gray-100/80">
                <ul class="space-y-4">
                  <li 
                    v-for="(feature, idx) in service.features" 
                    :key="idx" 
                    class="flex items-start group/feature"
                  >
                    <!-- Custom Interactive Checkmark -->
                    <div class="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 mr-3 group-hover/feature:bg-theme-blue transition-colors duration-300">
                      <i class="fas fa-check text-[10px] text-theme-blue group-hover/feature:text-white transition-colors duration-300"></i>
                    </div>
                    <span class="text-sm font-semibold text-gray-600 group-hover/feature:text-gray-900 transition-colors duration-300">
                      {{ $t(feature) }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      services: [
        {
          icon: 'fas fa-truck-fast',
          title: 'services.service1Title',
          description: 'services.service1Desc',
          features: [
            'services.service1Feature1',
            'services.service1Feature2',
            'services.service1Feature3',
            'services.service1Feature4'
          ]
        },
        {
          icon: 'fas fa-warehouse',
          title: 'services.service2Title',
          description: 'services.service2Desc',
          features: [
            'services.service2Feature1',
            'services.service2Feature2',
            'services.service2Feature3',
            'services.service2Feature4'
          ]
        },
        {
          icon: 'fas fa-handshake-angle',
          title: 'services.service3Title',
          description: 'services.service3Desc',
          features: [
            'services.service3Feature1',
            'services.service3Feature2',
            'services.service3Feature3',
            'services.service3Feature4'
          ]
        },
        {
          icon: 'fas fa-chart-line',
          title: 'services.service4Title',
          description: 'services.service4Desc',
          features: [
            'services.service4Feature1',
            'services.service4Feature2',
            'services.service4Feature3',
            'services.service4Feature4'
          ]
        },
        {
          icon: 'fas fa-graduation-cap',
          title: 'services.service5Title',
          description: 'services.service5Desc',
          features: [
            'services.service5Feature1',
            'services.service5Feature2',
            'services.service5Feature3',
            'services.service5Feature4'
          ]
        },
        {
          icon: 'fas fa-headset',
          title: 'services.service6Title',
          description: 'services.service6Desc',
          features: [
            'services.service6Feature1',
            'services.service6Feature2',
            'services.service6Feature3',
            'services.service6Feature4'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.text-theme-blue {
  color: #2563EB;
}
.bg-theme-blue {
  background-color: #2563EB;
}
</style>