<template>
  <div class=" container  mx-auto px-4 font-sans">
    <!-- Header -->
    <header class="flex justify-between items-stretch p-2">
    <!-- Content for larger screens -->
    <div class="hidden lg:flex items-start space-x-4">
      <span class="font-semibold text-blue-950">khaledjr2018@gmail.com</span>
      <a href="#" class="bg-gray-100 text-gray-600 hover:text-gray-900 rounded-full p-1 px-2 text-sm flex items-center space-x-2">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Gmail--Streamline-Core" height="20" width="20"><desc>Gmail Icon</desc><g id="gmail"><path id="Union" fill="#8fbffa" fill-rule="evenodd" d="M1.00772 12.0542h2.76535V7.68637l3.26988 2.11682 3.26995 -2.11683v4.36784h2.7653c0.5091 0 0.9218 -0.4112 0.9218 -0.9185V3.75445c0 -1.45329 -1.6136 -2.33103 -2.8405 -1.54516l-0.8466 0.54231v0.00119L7.04295 4.85187 3.77307 2.75279V2.7516l-0.84665 -0.54231C1.69951 1.42342 0.0859375 2.30116 0.0859375 3.75445v7.38125c0 0.5073 0.4126965 0.9185 0.9217825 0.9185Z" clip-rule="evenodd" stroke-width="1"></path><path id="Intersect" fill="#2859c5" fill-rule="evenodd" d="M3.77307 7.68637 0.0859375 5.29944V3.75445c0 -1.45329 1.6135725 -2.33103 2.8404825 -1.54516l0.84665 0.5435v4.93358ZM14 5.29944V3.75445c0 -1.45329 -1.6136 -2.33103 -2.8405 -1.54516l-0.8466 0.5435v4.93357L14 5.29944Z" clip-rule="evenodd" stroke-width="1"></path></g></svg> -->
        <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Gmail--Streamline-Core" height="22" width="22"><desc>Gmail Streamline Icon: https://streamlinehq.com</desc><g id="gmail"><path id="Rectangle 18" stroke="#172554" stroke-linecap="round" stroke-linejoin="round" d="M1.74275 12.0032h2.65011V3.0883l-0.81137 -0.51971C2.40571 1.81546 0.859375 2.65663 0.859375 4.04936V11.123c0 0.4861 0.395495 0.8802 0.883375 0.8802Z" stroke-width="1"></path><path id="Rectangle 20" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M0.859375 4.04936v1.1765L4.39286 7.48917l2.65011 1.69748 2.65011 -1.69748 3.53352 -2.26331v-1.1765c0 -1.39273 -1.5464 -2.2339 -2.7222 -1.48077l-0.81132 0.51971 -2.65011 1.69748L4.39286 3.0883l-0.81137 -0.51971C2.40571 1.81546 0.859375 2.65663 0.859375 4.04936Z" stroke-width="1"></path><path id="Rectangle 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M9.69305 12.0032h2.65015c0.4878 0 0.8833 -0.3941 0.8833 -0.8802V4.04936c0 -1.39273 -1.5463 -2.2339 -2.7221 -1.48077l-0.81135 0.51971v8.9149Z" stroke-width="1"></path></g></svg> -->
        <span>نسخ</span>
      </a>

      <!-- <a href="#" class="bg-gray-100 text-gray-600 hover:text-gray-900 rounded-full p-1 px-4 text-sm flex items-center space-x-2">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v10M16 7v10M12 7v10M20 12H4" />
         </svg>
         <span>Copy</span>
      </a> -->
      <a href="#" class="bg-gray-100 text-gray-600 hover:text-gray-900 rounded-full p-1 px-4 text-sm">cv</a>
     
    </div>
    <nav class="hidden lg:flex items-center space-x-4">
        <a href="#" class="text-gray-600 hover:text-gray-900 text-sm">لينكدان</a>
        <a href="#" class="text-gray-600 hover:text-gray-900 text-sm">دريبل</a>
        <a href="#" class="text-gray-600 hover:text-gray-900 text-sm">انستقرام</a>
      </nav>
    <!-- Content for smaller screens -->
    <div class="lg:hidden flex items-center justify-between w-full px-4">
  <img src="@/assets/jk.svg" alt="Logo" class="w-12 h-12 md:w-12 lg:w-" /> <!-- JK Logo -->
  
  <button
    type="button"
    class="mobile-nav-toggle"
    aria-label="mobile-menu"
    @click="toggleMenu"
  >
    <img src="@/assets/menu-line.svg" alt="Menu" class="w-6 h-6 p-1" />
  </button>
</div>


    <!-- Navigation overlay for smaller screens -->
    <div v-if="isMenuOpen" class="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex flex-col items-center justify-center">
      <button @click="toggleMenu" class="self-end p-6 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <nav class="flex flex-col space-y-4 text-white text-lg">
        <a href="#" @click="toggleMenu">khaledjr2018@gmail.com</a>
        <a href="#" @click="toggleMenu">CV</a>
        <a href="#" @click="toggleMenu">لينكدان</a>
        <a href="#" @click="toggleMenu">دريبل</a>
        <a href="#" @click="toggleMenu">انستقرام</a>
      </nav>
    </div>
  </header>


    <!-- Hero Section -->
    <section class="text-center py-16">
      <div class="relative inline-block mb-12">
        <img src="./assets/placeholder-profile.png" alt="Profile" class="w-32 h-32 rounded-full mb-8">
        <span class="absolute bottom-0 right-0 font-sans font-semibold font-cairo bg-white text-xl lg:text-2xl px-0 py-0 rounded-full text-center w-full  text-slate-900">جريو خالد</span>
      </div>
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cairo text-slate-900 font-normal mb-5">نحو انطلاقة رقمية مثالية 
        تصميم وتطوير مواقع وتطبيقات بجودة عالية  </h1>
      <button class="bg-slate-900 text-white px-6 py-2 rounded-full">اخر اعمالي</button>
    </section>

    <!-- Clients Section -->
    <section class="py-8">
      <div class="flex flex-wrap justify-center items-center gap-8">
        <img src="./assets/adobe.png" alt="Adobe" class="h-10 grayscale">
        <img src="./assets/java-script.webp" alt="Adobe" class="h-8 grayscale">
        <img src="./assets/Figma-Logo.png" alt="figma" class="h-10 grayscale">
        <img src="./assets/press.png" alt="wordpress" class="h-10 grayscale">
        <img src="./assets/f.png" alt="flutter" class="h-16 grayscale">
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16">
      <h2 class="text-2xl font-bold text-center text-slate-900 mb-12">خدمات أقدمها </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="mb-4 ">
            <svg class="w-10 h-10 mx-auto" fill="none" stroke="#1f2937" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <h3 class="font-semibold mb-2 text-slate-900">UX & UI</h3>
          <p class="text-sm text-gray-600">تصميم واجهات سهلة الاستخدام وفعالة وممتعة للاستخدام.</p>
        </div>
        <div class="text-center">
          <div class="mb-4">
            <svg class="w-10 h-10 mx-auto" fill="none" stroke="#1f2937" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
          </div>
          <h3 class="font-semibold mb-2 text-slate-900">Web & Mobile App</h3>
          <p class="text-sm text-gray-600">تحويل الأفكار إلى تجارب استثنائية لتطبيقات الويب والهواتف المحمولة.</p>
        </div>
        <div class="text-center">
          <div class="mb-4">
            <svg class="w-10 h-10 mx-auto text-slate-900" fill="none" stroke="#1f2937" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </div>
          <h3 class="font-semibold mb-2">Design & Creative</h3>
          <p class="text-sm text-gray-600">إنشاء تصميمات مذهلة بصريًا تتواصل مع جمهورك.</p>
        </div>
        <div class="text-center">
          <div class="mb-4">
            <svg class="w-10 h-10 mx-auto " fill="none" stroke="#1f2937" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          </div>
          <h3 class="font-semibold mb-2 text-slate-900">Development</h3>
          <p class="text-sm text-gray-600">جلب رؤيتك إلى الحياة مع أحدث التقنيات واتجاهات التصميم.</p>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="text-center py-16">
      <div class="mb-8">
        <svg class="w-14 h-14 mx-auto" fill="none" stroke="#0f172a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
      </div>
      <h2 class="text-2xl font-bold mb-8 text-slate-900">أخبرني عن مشروعك القادم</h2>
      <div class="space-x-4">
        <button class="bg-slate-900 text-white px-6 py-2 rounded-full">أرسل لي بريدا إلكترونيا</button>
        <button class="bg-white text-slate-900 border border-slate-900 px-6 py-2 rounded-full">واتساب</button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 text-center text-sm text-gray-600">
      <p>© 2024 جميع الحقوق محفوظة.</p>
      <div class="mt-4 space-x-2">
        <a href="#" class="hover:text-gray-900">    انستقرام</a>
        <a href="#" class="hover:text-gray-900">   لينكدإن       </a>
        <a href="#" class="hover:text-gray-900">    دريبل      </a>
        
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Portfolio',
      isMenuOpen: false, // State to control menu visibility
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle the menu open state
    },
  },
};
</script>

<style scoped>
/* Add any additional styles not covered by Tailwind here */
/* Add this in your main CSS or component style section if needed */
@import url('https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css');
</style>