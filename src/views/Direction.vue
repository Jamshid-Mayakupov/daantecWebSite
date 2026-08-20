<template>
  <div class="pt-20 bg-[#F4F7F9] font-sans selection:bg-theme-blue selection:text-white">
    
    <!-- 1. HERO SECTION -->
    <section class="relative pt-24 pb-20 overflow-hidden bg-slate-950 text-white">
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 opacity-80 -z-10"></div>
      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="flex items-center gap-4 mb-8" data-aos="fade-right">
          <div class="w-12 h-[2px] bg-theme-blue"></div>
          <span class="text-sm font-black text-theme-blue uppercase tracking-[0.3em]">Специализированное направление</span>
        </div>
        <h1 class="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
          DAANTEC <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Pediatrics</span>
        </h1>
        <p class="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
          Специализированное направление компании, ориентированное на дистрибуцию высококачественной педиатрической продукции для поддержки здоровья и гармоничного развития детей.
        </p>
      </div>
    </section>

    <!-- 2. MAIN DETAILS SECTION -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 space-y-6" data-aos="fade-up">
            <h2 class="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
              Поддержка здоровья и гармоничного развития
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Портфель бренда включает современные витаминно-минеральные комплексы, биологически активные добавки и другие продукты, разработанные с учетом международных стандартов качества и безопасности.
            </p>
            <p class="text-gray-600 leading-relaxed">
              <strong>Daantec Pediatrics</strong> стремится предоставлять детям эффективные и безопасные решения, а медицинским специалистам и родителям — продукцию, отвечающую современным требованиям доказательного качества и инноваций.
            </p>
            
            <div class="grid sm:grid-cols-2 gap-4 pt-4">
              <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div class="text-theme-blue font-black text-3xl mb-2">100%</div>
                <div class="text-sm text-gray-600 font-semibold">Доказательное качество и безопасность</div>
              </div>
              <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div class="text-theme-blue font-black text-3xl mb-2">GMP</div>
                <div class="text-sm text-gray-600 font-semibold">Международные стандарты производства</div>
              </div>
            </div>
          </div>

          <!-- O'ng tomondagi Jalkton Rasmlari Galereyasi (Interaktiv Hover) -->
          <div class="lg:col-span-6 relative" data-aos="fade-left">
            <!-- Asosiy konteyner -->
            <div class="relative w-full aspect-[4/3] max-w-[550px] mx-auto">
              
              <!-- Orqadagi Katta Rasm -->
              <div class="absolute top-0 right-0 w-[80%] rounded-3xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] border-2 border-white bg-white transition-all duration-500 ease-out z-0 hover:z-50 hover:scale-[1.05] hover:-translate-y-4 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] cursor-pointer">
                <img 
                  :src="imgCopy3" 
                  alt="DAANTEC Pediatrics Info" 
                  class="w-full h-auto object-contain block"
                >
              </div>

              <!-- Oldindagi Kichikroq Rasm -->
              <div class="absolute bottom-4 left-0 w-[70%] rounded-3xl overflow-hidden shadow-[0_15px_40px_-10px_rgba(0,0,0,0.2)] border-4 border-white bg-white transition-all duration-500 ease-out z-10 hover:z-50 hover:scale-[1.1] hover:-translate-y-4 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] cursor-pointer">
                <img 
                  :src="imgMain" 
                  alt="DAANTEC Pediatrics Main" 
                  class="w-full h-auto object-contain block"
                >
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 3. KEY FOCUS AREAS (Portfel va innovatsiyalar) -->
    <section class="py-24 bg-[#F4F7F9]">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 class="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Портфель бренда</h2>
          <p class="text-gray-600 text-lg">Продукция, отвечающая современным требованиям доказательного качества и инноваций.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100" data-aos="fade-up">
            <div class="w-14 h-14 bg-blue-50 text-theme-blue rounded-2xl flex items-center justify-center text-2xl mb-6 font-bold">01</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Витаминно-минеральные комплексы</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Современные витаминно-минеральные комплексы для надежной поддержки здоровья и гармоничного развития детей.</p>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="100">
            <div class="w-14 h-14 bg-blue-50 text-theme-blue rounded-2xl flex items-center justify-center text-2xl mb-6 font-bold">02</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Биологически активные добавки</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Безопасные и эффективные решения, разработанные с учетом строгих международных стандартов качества.</p>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="200">
            <div class="w-14 h-14 bg-blue-50 text-theme-blue rounded-2xl flex items-center justify-center text-2xl mb-6 font-bold">03</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Специалистам и родителям</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Высококачественная продукция, заслуживающая доверия как медицинских специалистов, так и заботливых родителей.</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
// about papkasidan kerakli rasmlarni import qilish
import imgMain from '@/assets/about/image.png'
import imgCopy3 from '@/assets/about/image copy 3.png'

export default {
  name: 'DirectionPage',
  data() {
    return {
      imgMain,
      imgCopy3
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