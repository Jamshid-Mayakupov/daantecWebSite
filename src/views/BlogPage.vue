<template>
  <div class="pt-20 bg-[#F4F7F9] font-sans selection:bg-theme-blue selection:text-white min-h-screen">
    
    <!-- 1. HERO & SEARCH SECTION -->
    <section class="relative pt-24 pb-32 bg-slate-950 overflow-hidden z-10">
      <!-- Premium Background Glows -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-theme-blue/20 via-slate-900 to-slate-950 -z-10"></div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-theme-blue/30 blur-[120px] rounded-full pointer-events-none"></div>

      <div class="container mx-auto px-4 max-w-7xl relative z-20">
        <!-- Badge -->
        <div class="text-center mb-10" data-aos="fade-down">
          <div class="inline-flex items-center justify-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span class="w-2 h-2 rounded-full bg-theme-blue animate-pulse"></span>
            <span class="text-xs font-black text-white uppercase tracking-[0.25em]">{{ $t('blog.badge') }}</span>
          </div>
        </div>

        <!-- Search Input -->
        <div class="relative max-w-2xl mx-auto group/search" data-aos="fade-up" data-aos-delay="100">
          <div class="absolute -inset-1 bg-gradient-to-r from-theme-blue to-cyan-400 rounded-[1.5rem] blur opacity-20 group-hover/search:opacity-40 transition duration-500"></div>
          <div class="relative flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl transition-all">
            <i class="fas fa-search text-gray-400 text-lg ml-6"></i>
            <input 
              type="text" 
              v-model="searchQuery"
              :placeholder="$t('blog.searchPlaceholder')"
              class="w-full px-4 py-5 bg-transparent text-white placeholder-gray-400 text-base lg:text-lg font-medium outline-none"
            >
            <!-- Search clearing shortcut visual -->
            <div class="hidden sm:flex items-center mr-6 px-2.5 py-1 rounded bg-white/10 border border-white/10 text-gray-400 text-xs font-bold">
              /
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. BLOG POSTS SECTION -->
    <section class="py-20 relative z-20 -mt-10">
      <div class="container mx-auto px-4 max-w-7xl">
        
        <!-- Filters -->
        <div class="flex flex-wrap gap-3 mb-16 justify-center" data-aos="fade-up">
          <button 
            @click="selectedCategory = 'all'"
            class="px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300"
            :class="selectedCategory === 'all' 
              ? 'bg-theme-blue text-white shadow-[0_8px_20px_rgba(37,99,235,0.3)] -translate-y-1' 
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100 hover:text-theme-blue hover:border-theme-blue/30'"
          >
            {{ $t('blog.filterAll') }}
          </button>
          
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = category"
            class="px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300"
            :class="selectedCategory === category 
              ? 'bg-theme-blue text-white shadow-[0_8px_20px_rgba(37,99,235,0.3)] -translate-y-1' 
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100 hover:text-theme-blue hover:border-theme-blue/30'"
          >
            {{ $t(`blog.category${category}`) }}
          </button>
        </div>

        <!-- Posts Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in filteredPosts" 
            :key="post.id"
            class="group bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] border border-gray-100 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            data-aos="fade-up"
          >
            <!-- Image Box -->
            <div class="relative h-60 overflow-hidden">
              <div class="absolute inset-0 bg-theme-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
              <img 
                :src="post.image" 
                :alt="$t(post.title)" 
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              >
              <!-- Floating Glassmorphism Badge -->
              <div class="absolute top-4 left-4 z-20 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-theme-blue tracking-wide shadow-sm">
                {{ $t(`blog.category${post.category}`) }}
              </div>
            </div>

            <!-- Content Box -->
            <div class="p-8 flex-1 flex flex-col">
              <!-- Meta Data -->
              <div class="flex items-center text-gray-400 text-xs font-semibold mb-4 gap-4">
                <div class="flex items-center gap-1.5">
                  <i class="far fa-calendar-alt text-theme-blue/70"></i>
                  <span>{{ $t(post.date) }}</span>
                </div>
                <div class="w-1 h-1 rounded-full bg-gray-300"></div>
                <div class="flex items-center gap-1.5">
                  <i class="far fa-clock text-theme-blue/70"></i>
                  <span>{{ post.readTime }} {{ $t('blog.min') }}</span>
                </div>
              </div>

              <!-- Title & Excerpt -->
              <h3 class="text-xl font-black text-gray-900 mb-3 group-hover:text-theme-blue transition-colors duration-300 line-clamp-2 leading-snug">
                {{ $t(post.title) }}
              </h3>
              <p class="text-sm text-gray-500 leading-relaxed font-medium mb-6 flex-1 line-clamp-3">
                {{ $t(post.excerpt) }}
              </p>

              <!-- Read More Link -->
              <div class="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                <a href="#" class="text-theme-blue text-sm font-bold inline-flex items-center group/link">
                  {{ $t('blog.readMore') }}
                  <i class="fas fa-arrow-right ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300"></i>
                </a>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty State (No posts found) -->
        <div v-if="filteredPosts.length === 0" class="bg-white rounded-[2rem] p-16 text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center">
          <div class="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
            <i class="fas fa-search text-3xl text-gray-300"></i>
          </div>
          <h3 class="text-xl font-black text-gray-900 mb-2">Статьи не найдены</h3>
          <p class="text-gray-500 font-medium max-w-sm">
            По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.
          </p>
        </div>

        <!-- Pagination -->
        <div v-if="filteredPosts.length > 0" class="flex justify-center mt-16 space-x-3">
          <button class="w-12 h-12 bg-theme-blue text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">1</button>
          <button class="w-12 h-12 bg-white text-gray-600 font-bold rounded-xl border border-gray-200 hover:border-theme-blue hover:text-theme-blue hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">2</button>
          <button class="w-12 h-12 bg-white text-gray-600 font-bold rounded-xl border border-gray-200 hover:border-theme-blue hover:text-theme-blue hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">3</button>
          <button class="w-12 h-12 bg-white text-gray-600 font-bold rounded-xl border border-gray-200 hover:border-theme-blue hover:text-theme-blue hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group">
            <i class="fas fa-chevron-right text-sm transform group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>

      </div>
    </section>

    <!-- 3. NEWSLETTER SECTION -->
    <section class="py-24 relative overflow-hidden">
      <div class="container mx-auto px-4 max-w-5xl relative z-10">
        <div class="bg-theme-blue rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl" data-aos="fade-up">
          
          <!-- Decorative Background Patterns -->
          <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div class="absolute -top-24 -right-24 w-64 h-64 bg-white/20 blur-[50px] rounded-full pointer-events-none"></div>
          <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-400/30 blur-[80px] rounded-full pointer-events-none"></div>

          <div class="max-w-2xl mx-auto text-center relative z-20">
            <div class="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner border border-white/20">
              <i class="far fa-envelope-open text-2xl text-white"></i>
            </div>
            
            <h2 class="text-3xl lg:text-4xl font-black text-white mb-4 tracking-tight">
              {{ $t('blog.newsletterTitle') }}
            </h2>
            <p class="text-base lg:text-lg text-blue-100 font-medium mb-10 leading-relaxed">
              {{ $t('blog.newsletterSubtitle') }}
            </p>
            
            <!-- Newsletter Form -->
            <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <div class="relative flex-1 group/input">
                <i class="fas fa-at absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-theme-blue transition-colors"></i>
                <input 
                  type="email" 
                  v-model="newsletterEmail"
                  :placeholder="$t('blog.newsletterPlaceholder')"
                  required
                  class="w-full bg-white pl-12 pr-5 py-4 text-sm font-semibold text-gray-900 rounded-xl outline-none shadow-lg focus:ring-4 focus:ring-white/20 transition-all"
                >
              </div>
              <button 
                type="submit"
                class="bg-slate-900 text-white px-8 py-4 text-sm rounded-xl font-bold hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {{ $t('blog.newsletterButton') }}
                <i class="fas fa-paper-plane text-xs"></i>
              </button>
            </form>
            
            <p class="text-xs text-blue-200 mt-6 font-medium">
              * Мы не рассылаем спам. Отписаться можно в любой момент.
            </p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'all',
      newsletterEmail: '',
      categories: ['News', 'Reviews', 'Analytics', 'Law', 'Tech'],
      posts: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop',
          category: 'News',
          date: 'blog.post1Date',
          readTime: 5,
          title: 'blog.post1Title',
          excerpt: 'blog.post1Excerpt'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop',
          category: 'Reviews',
          date: 'blog.post2Date',
          readTime: 7,
          title: 'blog.post2Title',
          excerpt: 'blog.post2Excerpt'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop',
          category: 'Analytics',
          date: 'blog.post3Date',
          readTime: 10,
          title: 'blog.post3Title',
          excerpt: 'blog.post3Excerpt'
        },
        {
          id: 4,
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
          category: 'Tech',
          date: 'blog.post4Date',
          readTime: 6,
          title: 'blog.post4Title',
          excerpt: 'blog.post4Excerpt'
        },
        {
          id: 5,
          image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop',
          category: 'Law',
          date: 'blog.post5Date',
          readTime: 8,
          title: 'blog.post5Title',
          excerpt: 'blog.post5Excerpt'
        },
        {
          id: 6,
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
          category: 'News',
          date: 'blog.post6Date',
          readTime: 4,
          title: 'blog.post6Title',
          excerpt: 'blog.post6Excerpt'
        }
      ]
    }
  },
  computed: {
    filteredPosts() {
      let filtered = this.posts

      if (this.selectedCategory !== 'all') {
        filtered = filtered.filter(post => post.category === this.selectedCategory)
      }

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(post => 
          this.$t(post.title).toLowerCase().includes(query) || 
          this.$t(post.excerpt).toLowerCase().includes(query)
        )
      }

      return filtered
    }
  },
  methods: {
    subscribeNewsletter() {
      alert(this.$t('blog.newsletterSuccess') + this.newsletterEmail)
      this.newsletterEmail = ''
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
/* Truncate long texts */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>