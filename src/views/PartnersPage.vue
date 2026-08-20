<template>
  <div class="pt-20 bg-[#F4F7F9] font-sans selection:bg-theme-blue selection:text-white min-h-screen">
    
    <!-- 1. HERO SECTION -->
    <section class="relative pt-24 pb-32 bg-slate-950 text-white overflow-hidden z-10">
      <!-- Premium Glow Effects -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-950 -z-10"></div>
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-theme-blue/20 blur-[100px] rounded-full"></div>
      <div class="absolute bottom-0 left-10 w-72 h-72 bg-cyan-500/10 blur-[80px] rounded-full"></div>
      
      <div class="container mx-auto px-4 max-w-7xl relative z-20">
        <div class="flex items-center gap-4 mb-8" data-aos="fade-right">
          <div class="w-12 h-[2px] bg-theme-blue"></div>
          <span class="text-xs font-black text-theme-blue uppercase tracking-[0.3em]">{{ $t('partners.badge') }}</span>
        </div>
        
        <div class="max-w-3xl text-left" data-aos="fade-up">
          <h1 class="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            {{ $t('partners.heroTitle') }}
          </h1>
          <p class="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed font-medium">
            {{ $t('partners.heroSubtitle') }}
          </p>
          <button 
            @click="scrollToForm" 
            class="group relative inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-theme-blue hover:text-white shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)] overflow-hidden"
          >
            <div class="absolute inset-0 w-0 bg-theme-blue transition-all duration-[250ms] ease-out group-hover:w-full -z-10"></div>
            <i class="fas fa-handshake text-theme-blue group-hover:text-white transition-colors"></i>
            <span>{{ $t('partners.heroButton') }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- 2. BENEFITS SECTION -->
    <section class="py-24 bg-white relative">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 class="text-3xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">{{ $t('partners.benefitsTitle') }}</h2>
          <p class="text-lg text-gray-600 font-medium">{{ $t('partners.benefitsSubtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(benefit, index) in benefits" 
            :key="index" 
            class="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] hover:border-theme-blue/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            data-aos="fade-up" :data-aos-delay="index * 100"
          >
            <!-- Background Decoration -->
            <div class="absolute -right-8 -top-8 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100 ease-out z-0"></div>
            
            <div class="relative z-10">
              <div class="w-16 h-16 bg-blue-50 text-theme-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-theme-blue group-hover:text-white transition-colors duration-500 shadow-inner">
                <i :class="benefit.icon" class="text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-theme-blue transition-colors">{{ $t(benefit.title) }}</h3>
              <p class="text-sm text-gray-500 leading-relaxed font-medium">{{ $t(benefit.description) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. STEPS SECTION (Timeline Design) -->
    <section class="py-24 bg-[#F4F7F9]">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <h2 class="text-3xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">{{ $t('partners.stepsTitle') }}</h2>
          <p class="text-lg text-gray-600 font-medium">{{ $t('partners.stepsSubtitle') }}</p>
        </div>

        <div class="max-w-4xl mx-auto relative">
          <!-- Vertical Line -->
          <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-theme-blue via-blue-300 to-transparent -translate-x-1/2 opacity-20"></div>
          
          <div class="space-y-12">
            <div 
              v-for="(step, index) in steps" 
              :key="index" 
              class="relative flex flex-col md:flex-row items-center gap-8 group"
              data-aos="fade-up"
            >
              <!-- Timeline Node -->
              <div class="md:absolute md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-white border-4 border-theme-blue rounded-full flex items-center justify-center text-theme-blue font-black text-2xl shadow-lg z-10 group-hover:scale-110 group-hover:bg-theme-blue group-hover:text-white transition-all duration-300">
                {{ index + 1 }}
              </div>
              
              <!-- Content Card -->
              <div class="w-full md:w-1/2 flex" :class="index % 2 === 0 ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16 md:ml-auto'">
                <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group-hover:shadow-xl group-hover:border-theme-blue/30 transition-all duration-300 w-full text-center md:text-left relative">
                  <h3 class="text-xl font-bold text-gray-900 mb-3">{{ $t(step.title) }}</h3>
                  <p class="text-sm text-gray-600 leading-relaxed font-medium">{{ $t(step.description) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. SUCCESS STORIES -->
    <section class="py-24 bg-white relative overflow-hidden">
      <!-- Decor -->
      <div class="absolute right-0 top-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-20 z-0 pointer-events-none"></div>

      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 class="text-3xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">{{ $t('partners.storiesTitle') }}</h2>
          <p class="text-lg text-gray-600 font-medium">{{ $t('partners.storiesSubtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="(story, index) in successStories" 
            :key="index" 
            class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
          >
            <i class="fas fa-quote-right absolute -bottom-4 -right-4 text-9xl text-gray-50 opacity-50 group-hover:text-blue-50 transition-colors z-0 pointer-events-none"></i>
            
            <div class="relative z-10">
              <div class="flex items-center mb-6 gap-4">
                <div class="relative">
                  <div class="absolute inset-0 border-2 border-theme-blue rounded-full scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
                  <img :src="story.logo" alt="Logo" class="w-14 h-14 rounded-full shadow-sm">
                </div>
                <div>
                  <h4 class="text-lg font-bold text-gray-900">{{ $t(story.company) }}</h4>
                  <p class="text-theme-blue text-xs font-bold uppercase tracking-wider">{{ $t(story.city) }}</p>
                </div>
              </div>
              <p class="text-gray-600 text-sm leading-relaxed mb-6 font-medium italic">"{{ $t(story.review) }}"</p>
              <div class="flex text-yellow-400 gap-1 text-sm">
                <i v-for="n in 5" :key="n" class="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. PARTNERSHIP FORM (Premium Design) -->
    <section id="partner-form" class="py-24 bg-slate-950 relative overflow-hidden">
      <!-- Dark Premium Glows -->
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-theme-blue/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative">
            <div class="text-center mb-10">
              <h2 class="text-3xl lg:text-4xl font-black text-gray-900 mb-4 tracking-tight">{{ $t('partners.formTitle') }}</h2>
              <p class="text-gray-500 font-medium">{{ $t('partners.formSubtitle') }}</p>
            </div>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              
              <div class="grid md:grid-cols-2 gap-6">
                <!-- Company Name -->
                <div class="form-group">
                  <label class="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">{{ $t('partners.formCompany') }} *</label>
                  <div class="relative group/input">
                    <i class="fas fa-building absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-theme-blue transition-colors"></i>
                    <input 
                      type="text" 
                      required 
                      v-model="form.companyName"
                      class="w-full bg-gray-50 pl-11 pr-4 py-4 text-sm font-semibold text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:border-theme-blue focus:ring-4 focus:ring-theme-blue/10 outline-none transition-all"
                      placeholder="Название вашей компании"
                    >
                  </div>
                </div>

                <!-- INN -->
                <div class="form-group">
                  <label class="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">{{ $t('partners.formInn') }} *</label>
                  <div class="relative group/input">
                    <i class="fas fa-id-card absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-theme-blue transition-colors"></i>
                    <input 
                      type="text" 
                      required 
                      v-model="form.inn"
                      class="w-full bg-gray-50 pl-11 pr-4 py-4 text-sm font-semibold text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:border-theme-blue focus:ring-4 focus:ring-theme-blue/10 outline-none transition-all"
                      placeholder="ИНН организации"
                    >
                  </div>
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <!-- Contact Person -->
                <div class="form-group">
                  <label class="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">{{ $t('partners.formContact') }} *</label>
                  <div class="relative group/input">
                    <i class="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-theme-blue transition-colors"></i>
                    <input 
                      type="text" 
                      required 
                      v-model="form.contactPerson"
                      class="w-full bg-gray-50 pl-11 pr-4 py-4 text-sm font-semibold text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:border-theme-blue focus:ring-4 focus:ring-theme-blue/10 outline-none transition-all"
                      placeholder="Ф.И.О. представителя"
                    >
                  </div>
                </div>

                <!-- Phone -->
                <div class="form-group">
                  <label class="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">{{ $t('partners.formPhone') }} *</label>
                  <div class="relative group/input">
                    <i class="fas fa-phone absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-theme-blue transition-colors"></i>
                    <input 
                      type="tel" 
                      required 
                      v-model="form.phone"
                      class="w-full bg-gray-50 pl-11 pr-4 py-4 text-sm font-semibold text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:border-theme-blue focus:ring-4 focus:ring-theme-blue/10 outline-none transition-all"
                      placeholder="+998 (__) ___-__-__"
                    >
                  </div>
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <!-- Email -->
                <div class="form-group">
                  <label class="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">Email *</label>
                  <div class="relative group/input">
                    <i class="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-theme-blue transition-colors"></i>
                    <input 
                      type="email" 
                      required 
                      v-model="form.email"
                      class="w-full bg-gray-50 pl-11 pr-4 py-4 text-sm font-semibold text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:border-theme-blue focus:ring-4 focus:ring-theme-blue/10 outline-none transition-all"
                      placeholder="example@mail.com"
                    >
                  </div>
                </div>

                <!-- City -->
                <div class="form-group">
                  <label class="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">{{ $t('partners.formCity') }} *</label>
                  <div class="relative group/input">
                    <i class="fas fa-map-marker-alt absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-theme-blue transition-colors"></i>
                    <input 
                      type="text" 
                      required 
                      v-model="form.city"
                      class="w-full bg-gray-50 pl-11 pr-4 py-4 text-sm font-semibold text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:border-theme-blue focus:ring-4 focus:ring-theme-blue/10 outline-none transition-all"
                      placeholder="Ваш город"
                    >
                  </div>
                </div>
              </div>

              <!-- Categories Custom Checkboxes -->
              <div class="pt-2">
                <label class="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-4">{{ $t('partners.formCategories') }}</label>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <label 
                    v-for="(category, idx) in categories" 
                    :key="idx" 
                    class="relative cursor-pointer group"
                  >
                    <input 
                      type="checkbox" 
                      :value="category"
                      v-model="form.categories"
                      class="peer sr-only"
                    >
                    <div class="bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 text-center transition-all peer-checked:bg-theme-blue peer-checked:text-white peer-checked:border-theme-blue peer-hover:border-theme-blue/50">
                      {{ $t(category) }}
                    </div>
                  </label>
                </div>
              </div>

              <!-- Message -->
              <div class="pt-2">
                <label class="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">{{ $t('partners.formMessage') }}</label>
                <textarea 
                  rows="4" 
                  v-model="form.message"
                  class="w-full bg-gray-50 px-5 py-4 text-sm font-semibold text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:border-theme-blue focus:ring-4 focus:ring-theme-blue/10 outline-none transition-all resize-none"
                  placeholder="Дополнительная информация о сотрудничестве..."
                ></textarea>
              </div>

              <!-- Agreement & Submit -->
              <div class="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 mt-6 border-t border-gray-100">
                <label class="flex items-center space-x-3 cursor-pointer group">
                  <div class="relative flex items-center justify-center w-6 h-6 rounded-md border-2 border-gray-300 transition-colors group-hover:border-theme-blue" :class="{ 'bg-theme-blue border-theme-blue': form.agreement }">
                    <i class="fas fa-check text-white text-xs transition-transform" :class="form.agreement ? 'scale-100' : 'scale-0'"></i>
                  </div>
                  <input 
                    type="checkbox" 
                    required 
                    v-model="form.agreement"
                    class="hidden"
                  >
                  <span class="text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors max-w-sm">
                    {{ $t('partners.formAgreement') }}
                  </span>
                </label>

                <button 
                  type="submit" 
                  class="w-full md:w-auto relative overflow-hidden bg-theme-blue text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300 group/submit"
                >
                  <div class="absolute inset-0 bg-white/20 translate-y-full group-hover/submit:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    {{ $t('partners.formSubmit') }}
                    <i class="fas fa-arrow-right group-hover/submit:translate-x-1 transition-transform"></i>
                  </span>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PartnersPage',
  data() {
    return {
      form: {
        companyName: '',
        inn: '',
        contactPerson: '',
        phone: '',
        email: '',
        city: '',
        categories: [],
        message: '',
        agreement: false
      },
      benefits: [
        { icon: 'fas fa-percent', title: 'partners.benefit1Title', description: 'partners.benefit1Desc' },
        { icon: 'fas fa-truck-fast', title: 'partners.benefit2Title', description: 'partners.benefit2Desc' },
        { icon: 'fas fa-handshake', title: 'partners.benefit3Title', description: 'partners.benefit3Desc' },
        { icon: 'fas fa-boxes-stacked', title: 'partners.benefit4Title', description: 'partners.benefit4Desc' },
        { icon: 'fas fa-chart-line', title: 'partners.benefit5Title', description: 'partners.benefit5Desc' },
        { icon: 'fas fa-headset', title: 'partners.benefit6Title', description: 'partners.benefit6Desc' }
      ],
      steps: [
        { title: 'partners.step1Title', description: 'partners.step1Desc' },
        { title: 'partners.step2Title', description: 'partners.step2Desc' },
        { title: 'partners.step3Title', description: 'partners.step3Desc' },
        { title: 'partners.step4Title', description: 'partners.step4Desc' }
      ],
      successStories: [
        { company: 'partners.story1Company', city: 'partners.story1City', logo: 'https://ui-avatars.com/api/?name=A&background=0B497A&color=fff', review: 'partners.story1Review' },
        { company: 'partners.story2Company', city: 'partners.story2City', logo: 'https://ui-avatars.com/api/?name=V&background=0B497A&color=fff', review: 'partners.story2Review' },
        { company: 'partners.story3Company', city: 'partners.story3City', logo: 'https://ui-avatars.com/api/?name=M&background=0B497A&color=fff', review: 'partners.story3Review' }
      ],
      categories: ['partners.catCardiology', 'partners.catNeurology', 'partners.catResuscitation', 'partners.catAll']
    }
  },
  methods: {
    scrollToForm() {
      document.getElementById('partner-form').scrollIntoView({ behavior: 'smooth' })
    },
    submitForm() {
      alert(this.$t('partners.formSuccess'))
      this.form = {
        companyName: '',
        inn: '',
        contactPerson: '',
        phone: '',
        email: '',
        city: '',
        categories: [],
        message: '',
        agreement: false
      }
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
.border-theme-blue {
  border-color: #2563EB;
}

/* Yengil hover va focus animatsiyalari uchun qulaylik */
textarea::-webkit-scrollbar {
  width: 8px;
}
textarea::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 8px;
}
textarea::-webkit-scrollbar-thumb {
  background: #c1c1c1; 
  border-radius: 8px;
}
textarea::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8; 
}
</style>