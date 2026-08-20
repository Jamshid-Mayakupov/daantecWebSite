<template>
  <div class="pt-20 bg-[#F4F7F9] font-sans selection:bg-theme-blue selection:text-white min-h-screen">
    
    <!-- 1. HERO SECTION -->
    <section class="relative pt-24 pb-48 bg-slate-950 overflow-hidden z-10">
      <!-- Premium Glow Effects -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900 to-slate-950 -z-10"></div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-theme-blue/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div class="container mx-auto px-4 max-w-7xl relative z-20">
        <!-- Badge -->
        <div class="text-center mb-8" data-aos="fade-down">
          <div class="inline-flex items-center justify-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
            <span class="text-xs font-black text-white uppercase tracking-[0.25em]">{{ $t('contact.badge') }}</span>
          </div>
        </div>
        
        <div class="max-w-3xl mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
          <h1 class="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            {{ $t('contact.title') }}
          </h1>
          <p class="text-lg lg:text-xl text-blue-100/80 font-medium leading-relaxed max-w-2xl mx-auto">
            {{ $t('contact.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- 2. CONTACT INFO CARDS (Overlapping Hero) -->
    <section class="relative z-20 -mt-32 pb-16">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
          
          <!-- Phone Card -->
          <div class="group bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-theme-blue/30 hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-2 text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="w-20 h-20 bg-blue-50 text-theme-blue rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 group-hover:bg-theme-blue group-hover:text-white transition-all duration-500 shadow-inner group-hover:scale-110">
                <i class="fas fa-phone-alt text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-theme-blue transition-colors">{{ $t('contact.phoneTitle') }}</h3>
              <a href="tel:+998950522552" class="block text-lg font-black text-gray-800 hover:text-theme-blue mb-2 transition-colors">+998 (95) 052-25-52</a>
              <p class="text-sm text-gray-500 font-medium">{{ $t('contact.phoneSchedule') }}</p>
            </div>
          </div>

          <!-- Email Card -->
          <div class="group bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-theme-blue/30 hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-2 text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="w-20 h-20 bg-blue-50 text-theme-blue rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 group-hover:bg-theme-blue group-hover:text-white transition-all duration-500 shadow-inner group-hover:scale-110">
                <i class="fas fa-envelope text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-theme-blue transition-colors">Email</h3>
              <a href="mailto:daantec.uz@gmail.com" class="block text-lg font-black text-gray-800 hover:text-theme-blue mb-2 transition-colors">daantec.uz@gmail.com</a>
              <p class="text-sm text-gray-500 font-medium">{{ $t('contact.emailResponse') }}</p>
            </div>
          </div>

          <!-- Address Card -->
          <div class="group bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-theme-blue/30 hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-2 text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="w-20 h-20 bg-blue-50 text-theme-blue rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 group-hover:bg-theme-blue group-hover:text-white transition-all duration-500 shadow-inner group-hover:scale-110">
                <i class="fas fa-map-marker-alt text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-theme-blue transition-colors">{{ $t('contact.addressTitle') }}</h3>
              <p class="text-base font-black text-gray-800 mb-1">{{ $t('contact.addressCity') }}, {{ $t('contact.addressDistrict') }}</p>
              <p class="text-sm text-gray-500 font-medium">{{ $t('contact.addressStreet') }}</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 3. MAP AND FORM SECTION -->
    <section class="py-16">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          <!-- Map Placeholder (Premium UI) -->
          <div class="lg:col-span-5 h-[500px] lg:h-auto min-h-[500px] rounded-[3rem] overflow-hidden relative shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] bg-slate-900 group">
            <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
              <div class="relative mb-6">
                <div class="absolute inset-0 bg-theme-blue rounded-full animate-ping opacity-50"></div>
                <div class="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                  <i class="fas fa-map-marked-alt text-white text-3xl"></i>
                </div>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Наш офис</h3>
              <p class="text-blue-100/70 font-medium max-w-xs mx-auto">{{ $t('contact.mapPlaceholder') }}</p>
            </div>
          </div>

          <!-- Contact Form (High-End) -->
          <div class="lg:col-span-7">
            <div class="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
              <h2 class="text-3xl lg:text-4xl font-black text-gray-900 mb-8 tracking-tight">{{ $t('contact.formTitle') }}</h2>
              
              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <!-- Name -->
                  <div>
                    <label class="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">{{ $t('contact.formName') }} *</label>
                    <div class="relative group/input">
                      <i class="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-theme-blue transition-colors"></i>
                      <input 
                        type="text" 
                        required 
                        v-model="form.name"
                        class="w-full bg-gray-50 pl-11 pr-4 py-4 text-sm font-semibold text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:border-theme-blue focus:ring-4 focus:ring-theme-blue/10 outline-none transition-all"
                        placeholder="Иван Иванов"
                      >
                    </div>
                  </div>

                  <!-- Email -->
                  <div>
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
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                  <!-- Phone -->
                  <div>
                    <label class="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">{{ $t('contact.formPhone') }}</label>
                    <div class="relative group/input">
                      <i class="fas fa-phone absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-theme-blue transition-colors"></i>
                      <input 
                        type="tel" 
                        v-model="form.phone"
                        class="w-full bg-gray-50 pl-11 pr-4 py-4 text-sm font-semibold text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:border-theme-blue focus:ring-4 focus:ring-theme-blue/10 outline-none transition-all"
                        placeholder="+998 (__) ___-__-__"
                      >
                    </div>
                  </div>

                  <!-- Subject -->
                  <div>
                    <label class="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">{{ $t('contact.formSubject') }} *</label>
                    <div class="relative group/input">
                      <i class="fas fa-list absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10 group-focus-within/input:text-theme-blue transition-colors"></i>
                      <select 
                        required 
                        v-model="form.subject"
                        class="w-full appearance-none bg-gray-50 pl-11 pr-10 py-4 text-sm font-semibold text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:border-theme-blue focus:ring-4 focus:ring-theme-blue/10 outline-none transition-all cursor-pointer relative"
                      >
                        <option value="" disabled selected>{{ $t('contact.formSubjectPlaceholder') }}</option>
                        <option>{{ $t('contact.subjectGeneral') }}</option>
                        <option>{{ $t('contact.subjectPartnership') }}</option>
                        <option>{{ $t('contact.subjectOrder') }}</option>
                        <option>{{ $t('contact.subjectSupport') }}</option>
                        <option>{{ $t('contact.subjectOther') }}</option>
                      </select>
                      <i class="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs"></i>
                    </div>
                  </div>
                </div>

                <!-- Message -->
                <div>
                  <label class="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">{{ $t('contact.formMessage') }} *</label>
                  <textarea 
                    required 
                    rows="4" 
                    v-model="form.message"
                    class="w-full bg-gray-50 px-5 py-4 text-sm font-semibold text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:border-theme-blue focus:ring-4 focus:ring-theme-blue/10 outline-none transition-all resize-none"
                    placeholder="Напишите ваш вопрос или предложение..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  class="w-full relative overflow-hidden bg-theme-blue text-white px-8 py-4 rounded-xl font-bold shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300 group/btn"
                >
                  <div class="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    <i class="fas fa-paper-plane"></i>
                    {{ $t('contact.formSubmit') }}
                  </span>
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <!-- 4. FAQ SECTION -->
    <section class="py-24 bg-white relative">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">{{ $t('contact.faqTitle') }}</h2>
          <p class="text-lg text-gray-500 font-medium">{{ $t('contact.faqSubtitle') }}</p>
        </div>

        <div class="space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index" 
            class="bg-white rounded-2xl border transition-all duration-300 overflow-hidden"
            :class="faq.open ? 'border-theme-blue shadow-[0_10px_30px_rgba(37,99,235,0.1)] ring-4 ring-theme-blue/5' : 'border-gray-100 hover:border-gray-300'"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <button 
              @click="toggleFaq(index)" 
              class="w-full px-6 lg:px-8 py-5 flex justify-between items-center text-left bg-transparent outline-none"
            >
              <span class="font-bold text-gray-900 text-base lg:text-lg pr-4 transition-colors" :class="faq.open ? 'text-theme-blue' : ''">
                {{ $t(faq.question) }}
              </span>
              <div class="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 shrink-0" :class="faq.open ? 'bg-theme-blue text-white' : 'bg-blue-50 text-theme-blue'">
                <!-- DUPLICATE ATTRIBUTE BUG FIXED HERE: Combined :class into one array/string evaluation -->
                <i class="text-xs transition-transform duration-300" :class="faq.open ? 'fas fa-minus rotate-180' : 'fas fa-plus'"></i>
              </div>
            </button>
            <transition name="fade">
              <div v-if="faq.open" class="px-6 lg:px-8 pb-6">
                <p class="text-sm lg:text-base text-gray-600 leading-relaxed font-medium pt-2 border-t border-gray-100/50">
                  {{ $t(faq.answer) }}
                </p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      faqs: [
        { question: 'contact.faq1Question', answer: 'contact.faq1Answer', open: false },
        { question: 'contact.faq2Question', answer: 'contact.faq2Answer', open: false },
        { question: 'contact.faq3Question', answer: 'contact.faq3Answer', open: false },
        { question: 'contact.faq4Question', answer: 'contact.faq4Answer', open: false },
        { question: 'contact.faq5Question', answer: 'contact.faq5Answer', open: false }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open
    },
    submitForm() {
      alert(this.$t('contact.formSuccess'))
      this.form = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
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

/* FAQ Transition */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 200px;
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

/* Textarea Scrollbar Styling */
textarea::-webkit-scrollbar {
  width: 6px;
}
textarea::-webkit-scrollbar-track {
  background: transparent; 
}
textarea::-webkit-scrollbar-thumb {
  background: #cbd5e1; 
  border-radius: 10px;
}
textarea::-webkit-scrollbar-thumb:hover {
  background: #94a3b8; 
}
</style>