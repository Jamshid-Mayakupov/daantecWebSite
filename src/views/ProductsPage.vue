<template>
  <div class="pt-20 bg-[#F4F7F9] font-sans selection:bg-theme-blue selection:text-white min-h-screen">
    
    <!-- 1. HERO / BANNER SECTION -->
    <section class="relative pt-16 pb-20 bg-slate-950 text-white overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 opacity-80 -z-10"></div>
      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="flex items-center gap-4 mb-6" data-aos="fade-right">
          <div class="w-12 h-[2px] bg-theme-blue"></div>
          <span class="text-sm font-black text-theme-blue uppercase tracking-[0.3em]">{{ $t("products.badge") }}</span>
        </div>
        <h1 class="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
          Каталог <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Продукции</span>
        </h1>
        <p class="text-gray-300 max-w-2xl text-lg leading-relaxed">
          Высококачественные фармацевтические препараты, отвечающие международным стандартам безопасности и эффективности.
        </p>
      </div>
    </section>

    <!-- 2. MAIN CONTENT (Filters & Grid) -->
    <section class="py-16 -mt-8 relative z-20">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          <!-- FILTERS SIDEBAR -->
          <div class="lg:w-1/4">
            <div class="bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 sticky top-28">
              <h3 class="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3 tracking-tight">
                <i class="fas fa-sliders-h text-theme-blue"></i>
                {{ $t("products.filters") }}
              </h3>

              <!-- Category Filter -->
              <div class="mb-10">
                <h4 class="text-xs font-black text-gray-400 uppercase tracking-widest mb-5">
                  {{ $t("products.category") }}
                </h4>
                <div class="space-y-4">
                  <label
                    v-for="category in categories"
                    :key="category"
                    class="flex items-center gap-4 cursor-pointer group"
                  >
                    <!-- Custom Checkbox -->
                    <div 
                      class="relative flex items-center justify-center w-6 h-6 rounded-lg border-2 transition-all duration-300"
                      :class="selectedCategories.includes(category) ? 'border-theme-blue bg-theme-blue' : 'border-gray-200 group-hover:border-theme-blue'"
                    >
                      <i class="fas fa-check text-white text-xs" :class="selectedCategories.includes(category) ? 'scale-100 opacity-100' : 'scale-0 opacity-0 transition-transform'"></i>
                    </div>
                    <input
                      type="checkbox"
                      :value="category"
                      v-model="selectedCategories"
                      class="hidden"
                    />
                    <span class="text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">
                      {{ $t(`products.categories.${category}`) }}
                    </span>
                  </label>
                </div>
              </div>

              <!-- Manufacturer Filter -->
              <div class="mb-10">
                <h4 class="text-xs font-black text-gray-400 uppercase tracking-widest mb-5">
                  {{ $t("products.manufacturer") }}
                </h4>
                <div class="space-y-4">
                  <label
                    v-for="manufacturer in manufacturers"
                    :key="manufacturer"
                    class="flex items-center gap-4 cursor-pointer group"
                  >
                    <!-- Custom Checkbox -->
                    <div 
                      class="relative flex items-center justify-center w-6 h-6 rounded-lg border-2 transition-all duration-300"
                      :class="selectedManufacturers.includes(manufacturer) ? 'border-theme-blue bg-theme-blue' : 'border-gray-200 group-hover:border-theme-blue'"
                    >
                      <i class="fas fa-check text-white text-xs" :class="selectedManufacturers.includes(manufacturer) ? 'scale-100 opacity-100' : 'scale-0 opacity-0 transition-transform'"></i>
                    </div>
                    <input
                      type="checkbox"
                      :value="manufacturer"
                      v-model="selectedManufacturers"
                      class="hidden"
                    />
                    <span class="text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">
                      {{ $t(`products.manufacturers.${manufacturer}`) }}
                    </span>
                  </label>
                </div>
              </div>

              <button
                @click="resetFilters"
                class="w-full bg-red-50 text-red-500 hover:bg-red-500 hover:text-white px-4 py-3 rounded-xl transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2"
              >
                <i class="fas fa-sync-alt"></i>
                {{ $t("products.resetFilters") }}
              </button>
            </div>
          </div>

          <!-- PRODUCTS GRID -->
          <div class="lg:w-3/4">
            
            <!-- Top Bar (Count & Sort) -->
            <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-wrap justify-between items-center mb-8 gap-4">
              <div class="text-sm font-semibold text-gray-600 flex items-center gap-2">
                Найдено: 
                <span class="bg-blue-50 text-theme-blue px-3 py-1 rounded-lg text-base font-bold">
                  {{ filteredProducts.length }}
                </span>
              </div>
              <div class="relative min-w-[200px]">
                <select class="w-full appearance-none bg-gray-50 border border-gray-100 text-gray-700 text-sm font-semibold rounded-xl pl-4 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-theme-blue/20 cursor-pointer transition-all">
                  <option>{{ $t("products.sortPopular") }}</option>
                  <option>{{ $t("products.sortPriceAsc") }}</option>
                  <option>{{ $t("products.sortPriceDesc") }}</option>
                  <option>{{ $t("products.sortName") }}</option>
                </select>
                <i class="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"></i>
              </div>
            </div>

            <!-- Grid -->
            <div v-if="filteredProducts.length > 0" class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              <div
                v-for="product in filteredProducts"
                :key="product.id"
                class="group bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_50px_-15px_rgba(0,0,0,0.15)] border border-gray-100 hover:border-theme-blue/30 transition-all duration-500 flex flex-col"
              >
                <!-- Image Box -->
                <div class="relative h-60 bg-gradient-to-b from-[#F4F7F9] to-white flex items-center justify-center p-8 overflow-hidden">
                  <div class="absolute inset-0 bg-theme-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <!-- Floating Category Badge -->
                  <div class="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur shadow-sm border border-gray-100 px-3 py-1.5 rounded-full flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-theme-blue animate-pulse"></div>
                    <span class="text-[10px] font-bold text-gray-800 uppercase tracking-widest">
                      {{ $t(`products.categories.${product.category}`) }}
                    </span>
                  </div>

                  <img
                    :src="product.image"
                    :alt="product.name"
                    class="h-full w-full object-contain transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-700 ease-out z-10 relative drop-shadow-xl"
                  />
                </div>

                <!-- Content Box -->
                <div class="p-6 lg:p-8 flex-1 flex flex-col justify-between bg-white relative z-20">
                  <div class="mb-6">
                    <!-- Manufacturer -->
                    <div class="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-3">
                      <i class="fas fa-globe-americas text-theme-blue/50"></i>
                      {{ $t(`products.manufacturers.${product.manufacturer}`) }}
                    </div>

                    <h3 class="text-xl lg:text-2xl font-black text-gray-900 mb-2 group-hover:text-theme-blue transition-colors">
                      {{ product.name }}
                    </h3>
                    <p class="text-sm text-gray-500 font-medium leading-relaxed line-clamp-2">
                      {{ product.dosage }}
                    </p>
                  </div>

                  <!-- Animated Button -->
                  <button
                    @click="openInstruction(product)"
                    class="w-full relative overflow-hidden bg-gray-50 text-theme-blue font-bold px-4 py-4 rounded-xl border border-gray-100 group/btn transition-all duration-300"
                  >
                    <div class="absolute inset-0 bg-theme-blue translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                    <span class="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-white transition-colors duration-300">
                      <i class="fas fa-file-pdf"></i>
                      {{ $t("products.request") }}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Empty State (Hech narsa topilmasa) -->
            <div v-else class="bg-white rounded-[2rem] p-16 text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center">
              <div class="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-search text-4xl text-gray-300"></i>
              </div>
              <h3 class="text-2xl font-black text-gray-900 mb-3">Ничего не найдено</h3>
              <p class="text-gray-500 font-medium max-w-sm mb-8">
                По выбранным параметрам фильтрации нет доступных препаратов. Попробуйте изменить критерии поиска.
              </p>
              <button @click="resetFilters" class="bg-theme-blue text-white font-bold px-8 py-3 rounded-xl hover:bg-opacity-90 transition-all shadow-lg shadow-blue-500/30">
                Сбросить фильтры
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- 3. MODAL FOR REQUEST INSTRUCTION (Chiroyli qilingan Modal) -->
    <div
      v-if="showRequestModal"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity"
      @click.self="showRequestModal = false"
    >
      <div class="bg-white rounded-[2rem] max-w-md w-full p-8 lg:p-10 relative shadow-2xl transform scale-100 transition-transform">
        <button
          @click="showRequestModal = false"
          class="absolute top-6 right-6 w-10 h-10 bg-gray-50 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 flex items-center justify-center transition-colors"
        >
          <i class="fas fa-times text-lg"></i>
        </button>

        <div class="text-center mb-8 mt-4">
          <div class="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <i class="fas fa-file-pdf text-theme-blue text-3xl"></i>
          </div>
          <h3 class="text-2xl font-black text-gray-900 mb-3">
            Инструкция недоступна
          </h3>
          <p class="text-gray-600 font-medium">Препарат: <span class="text-theme-blue font-bold">{{ selectedProduct?.name }}</span></p>
        </div>

        <p class="text-gray-500 text-sm mb-8 text-center leading-relaxed">
          Для получения подробной информации или инструкции к данному препарату, пожалуйста, свяжитесь с нашим отделом.
        </p>

        <div class="space-y-4">
          <a
            href="tel:+998951234567"
            class="flex items-center justify-center gap-3 w-full bg-theme-blue text-white px-6 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all font-bold"
          >
            <i class="fas fa-phone-alt"></i>
            Позвонить
          </a>
          <router-link
            to="/contact"
            @click="showRequestModal = false"
            class="flex items-center justify-center gap-3 w-full bg-blue-50 text-theme-blue px-6 py-4 rounded-xl hover:bg-theme-blue hover:text-white transition-all font-bold"
          >
            <i class="fas fa-envelope"></i>
            Написать нам
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsPage",
  data() {
    return {
      selectedCategories: [],
      selectedManufacturers: [],
      showRequestModal: false,
      selectedProduct: null,
      categories: [
        "cardiology",
        "neurology",
        "resuscitation",
        "antibiotics",
        "metabolism",
      ],
      manufacturers: ["china", "georgia", "uzbekistan"],
      products: [
        // Кардиология
        {
          id: 1,
          name: "ЭФЕС 5",
          category: "cardiology",
          manufacturer: "china",
          dosage: "Фруктоза дифосфат натрия",
          image: "products/Эфес-5.png",
          instruction: "instructions/Эфес17.pdf",
        },
        {
          id: 2,
          name: "ЛАЙФОН",
          category: "cardiology",
          manufacturer: "uzbekistan",
          dosage: "Креатин фосфат натрия 1.0 г №1",
          image: "products/Лайфон.png",
          instruction: "instructions/Лайфтон_печать.pdf",
        },

        // Неврология
        {
          id: 3,
          name: "ЛЕТОКАР",
          category: "neurology",
          manufacturer: "georgia",
          dosage: "4.2 г L-аргинина гидрохлорида, 100 мл",
          image: "products/letokar.png",
          instruction: "instructions/Летокар17.pdf",
        },
        {
          id: 4,
          name: "ВЕГАС",
          category: "neurology",
          manufacturer: "china",
          dosage: "Гемодериват крови телят 40.0 мг",
          image: "products/vegas.jpg",
          instruction: "instructions/Вегас17.pdf",
        },

        // Реанимация
        {
          id: 5,
          name: "СТОЛАКСОЛ",
          category: "resuscitation",
          manufacturer: "uzbekistan",
          dosage: "Электролиты, 100 мл / 200 мл",
          image: "products/столаскол.jpg",
          instruction: "instructions/Столаксол_Print.pdf",
        },
        {
          id: 6,
          name: "МЕГАСОЛ",
          category: "resuscitation",
          manufacturer: "georgia",
          dosage: "Глюкоза 50 мг/мл, 100 мл / 250 мл",
          image: "products/megasol.jpg",
          instruction: "instructions/Мегасол17.pdf",
        },
        {
          id: 7,
          name: "АМИНОМАГТ",
          category: "resuscitation",
          manufacturer: "china",
          dosage: "8% раствор L-аминокислот, 250 мл",
          image: "products/aminomagt.jpg",
          instruction: "instructions/Аминогамт17.pdf",
        },
        {
          id: 8,
          name: "ИНФУЗИОЛ-НED",
          category: "resuscitation",
          manufacturer: "uzbekistan",
          dosage: "5% раствор L-аминокислот, 100/250 мл",
          image: "products/infuziol.jpg",
          instruction: "instructions/Инфузиол17.pdf",
        },

        // Антибиотики
        {
          id: 9,
          name: "МАКРОЦЕФ",
          category: "antibiotics",
          manufacturer: "china",
          dosage: "Цефоперазон 1.0 г + сульбактам 1.0 г",
          image: "products/makrotsef.png",
          instruction: null,
        },
        {
          id: 10,
          name: "АВРОЛА",
          category: "antibiotics",
          manufacturer: "uzbekistan",
          dosage: "Левофлоксацин 500 мг, 100 мл",
          image: "products/avrola.jpg",
          instruction: "instructions/Аврола.pdf",
        },

        // Метаболизм
        {
          id: 11,
          name: "ДЕКАРИН",
          category: "metabolism",
          manufacturer: "georgia",
          dosage: "Аргинозал + Кокарбоксилаза",
          image: "products/dikarin.jpg",
          instruction: null,
        },
        {
          id: 12,
          name: "ПЕПТАЗОЛ",
          category: "metabolism",
          manufacturer: "china",
          dosage: "Пантопразол 45 мг",
          image: "products/peptazole.jpg",
          instruction: "instructions/Пептазол_Print.pdf",
        },
        {
          id: 13,
          name: "АОРТА",
          category: "metabolism",
          manufacturer: "uzbekistan",
          dosage: "Железа (III) гидроксид 100 мг",
          image: "products/aourta-hb.jpg",
          instruction: null,
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        const matchesCategory =
          this.selectedCategories.length === 0 ||
          this.selectedCategories.includes(product.category);
        const matchesManufacturer =
          this.selectedManufacturers.length === 0 ||
          this.selectedManufacturers.includes(product.manufacturer);

        return matchesCategory && matchesManufacturer;
      });
    },
  },
  methods: {
    openInstruction(product) {
      if (product.instruction) {
        // Открываем PDF в новой вкладке
        window.open(product.instruction, "_blank");
      } else {
        // Показываем модальное окно для запроса инструкции
        this.selectedProduct = product;
        this.showRequestModal = true;
      }
    },

    resetFilters() {
      this.selectedCategories = [];
      this.selectedManufacturers = [];
    },
  },
};
</script>

<style scoped>
.text-theme-blue {
  color: #2563EB;
}
.bg-theme-blue {
  background-color: #2563EB;
}

/* Анимация для модального окна */
.fixed {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    backdrop-filter: blur(4px);
  }
}

.max-w-md {
  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideUp {
  from {
    transform: translateY(40px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}
</style>