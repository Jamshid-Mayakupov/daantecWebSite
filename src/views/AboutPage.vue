<template>
  <div class="pt-20 bg-[#F4F7F9] font-sans selection:bg-theme-blue selection:text-white">
    
    <!-- 1. HIGH-END HERO & HISTORY -->
    <section class="relative pt-24 pb-32 overflow-hidden">
      <div class="absolute top-10 left-0 w-full overflow-hidden pointer-events-none select-none flex justify-center opacity-[0.03] -z-10">
        <h1 class="text-[15rem] font-black text-slate-900 whitespace-nowrap tracking-tighter">DAANTEC</h1>
      </div>

      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="flex items-center gap-4 mb-16" data-aos="fade-right">
          <div class="w-12 h-[2px] bg-theme-blue"></div>
          <span class="text-sm font-black text-theme-blue uppercase tracking-[0.3em]">{{ $t('about.badge') }}</span>
        </div>

        <div class="grid lg:grid-cols-12 gap-8 lg:gap-0 items-center relative">
          <div class="lg:col-span-6 relative z-20" data-aos="fade-up">
            <h2 class="text-5xl lg:text-7xl font-extrabold text-[#0B1120] leading-[1.05] tracking-tight mb-10">
              {{ $t('about.historyTitle') }}
            </h2>
            
            <div class="bg-white/80 backdrop-blur-2xl p-8 lg:p-12 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-white relative lg:-mr-20">
              <div class="space-y-6 text-lg text-gray-600 font-medium">
                <p class="leading-relaxed">{{ $t('about.historyText1') }}</p>
                <p class="leading-relaxed">{{ $t('about.historyText2') }}</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6 relative z-10 lg:pl-10 mt-10 lg:mt-0" data-aos="fade-left" data-aos-delay="200">
            <div class="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
              <!-- Tez yuklanuvchi optimizatsiya qilingan rasm -->
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=70&auto=format"
                alt="DAANTEC Office" 
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s] ease-out"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-transparent to-transparent"></div>
              
              <div class="absolute bottom-8 left-8 right-8">
                <div class="bg-theme-blue/90 backdrop-blur-md border border-white/20 p-6 lg:p-8 rounded-3xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <i class="fas fa-quote-left text-3xl text-white/30 absolute top-6 right-6"></i>
                  <p class="text-white text-base lg:text-lg leading-relaxed font-semibold">
                    {{ $t('about.historyText3') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. CINEMATIC TEAM BANNER -->
    <section class="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 w-full h-full">
        <div class="absolute inset-0 bg-black/40 z-10 mix-blend-multiply"></div>
        <img class="w-full h-full object-cover transform scale-110" src="@/assets/img/DSC00648.jpg" alt="Команда DAANTEC">
      </div>
      
      <div class="relative z-20 text-center px-4" data-aos="zoom-in">
        <h1 class="text-5xl lg:text-8xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">Наша команда</h1>
        <p class="text-xl text-gray-200 font-medium max-w-2xl mx-auto drop-shadow-md">Профессионализм, объединенный одной целью</p>
      </div>
    </section>
    
    <!-- 3. EXPANDED CORE VALUES (Kengaytirilgan, katta va salmoqli bo'lim) -->
    <section class="py-32 bg-[#050A15] relative overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-theme-blue to-transparent opacity-50"></div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-theme-blue/20 blur-[150px] pointer-events-none"></div>

      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="text-center mb-24" data-aos="fade-up">
          <h2 class="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">{{ $t('about.valuesTitle') }}</h2>
          <p class="text-lg text-gray-400 font-medium max-w-2xl mx-auto">{{ $t('about.valuesSubtitle') }}</p>
        </div>
        
        <div class="space-y-12 lg:space-y-24">
          
          <!-- 1. Qadriyat: Sifat (Chapda matn, o'ngda rasm) -->
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center" data-aos="fade-up">
            <div class="order-2 lg:order-1">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                  <i class="fas fa-shield-alt text-theme-blue text-2xl"></i>
                </div>
                <span class="text-theme-blue font-black tracking-widest text-xl">01</span>
              </div>
              <h3 class="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">{{ $t('about.valueQuality') }}</h3>
              <p class="text-lg text-gray-400 leading-relaxed font-medium">{{ $t('about.valueQualityDesc') }}</p>
            </div>
            <div class="order-1 lg:order-2">
              <div class="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 group">
                <!-- Juda tez yuklanuvchi (w=600&q=60) rasm -->
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=60&auto=format" alt="Quality" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-[#050A15] via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          <!-- 2. Qadriyat: G'amxo'rlik (Chapda rasm, o'ngda matn) -->
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center" data-aos="fade-up">
            <div>
              <div class="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 group">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=60&auto=format" alt="Care" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-[#050A15] via-transparent to-transparent"></div>
              </div>
            </div>
            <div>
              <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                  <i class="fas fa-heart text-theme-blue text-2xl"></i>
                </div>
                <span class="text-theme-blue font-black tracking-widest text-xl">02</span>
              </div>
              <h3 class="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">{{ $t('about.valueCare') }}</h3>
              <p class="text-lg text-gray-400 leading-relaxed font-medium">{{ $t('about.valueCareDesc') }}</p>
            </div>
          </div>

          <!-- 3. Qadriyat: Ishonch (Chapda matn, o'ngda rasm) -->
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center" data-aos="fade-up">
            <div class="order-2 lg:order-1">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                  <i class="fas fa-handshake text-theme-blue text-2xl"></i>
                </div>
                <span class="text-theme-blue font-black tracking-widest text-xl">03</span>
              </div>
              <h3 class="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">{{ $t('about.valueReliability') }}</h3>
              <p class="text-lg text-gray-400 leading-relaxed font-medium">{{ $t('about.valueReliabilityDesc') }}</p>
            </div>
            <div class="order-1 lg:order-2">
              <div class="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 group">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=60&auto=format" alt="Reliability" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-[#050A15] via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          <!-- 4. Qadriyat: Innovatsiya (Chapda rasm, o'ngda matn) -->
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center" data-aos="fade-up">
            <div>
              <div class="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 group">
                <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=60&auto=format" alt="Innovation" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-[#050A15] via-transparent to-transparent"></div>
              </div>
            </div>
            <div>
              <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                  <i class="fas fa-star text-theme-blue text-2xl"></i>
                </div>
                <span class="text-theme-blue font-black tracking-widest text-xl">04</span>
              </div>
              <h3 class="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">{{ $t('about.valueInnovation') }}</h3>
              <p class="text-lg text-gray-400 leading-relaxed font-medium">{{ $t('about.valueInnovationDesc') }}</p>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'AboutPage'
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