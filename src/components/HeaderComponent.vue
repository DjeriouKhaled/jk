<template>
    <div>
      <!-- Mobile Navigation Toggle Button -->
      <button
        type="button"
        class="mobile-nav-toggle d-lg-none"
        aria-label="mobile-menu"
        @click="toggleMobileMenu"
      >
        <i class="ri-menu-line"></i>
      </button>
  
      <!-- Header Section -->
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center">
          <!-- Logo Section -->
          <div class="logo mr-auto">
            <a
              href="https://nourhomsi.net"
              aria-label="Logo"
              title="Nour Homsi | Web & Graphic Designer"
            >
              <img
                src="https://nourhomsi.net/wp-content/uploads/2024/09/nourhomsi-logo-166.webp"
                class="img-fluid"
                alt="Nour Homsi | Web & Graphic Designer"
                title="Nour Homsi | Web & Graphic Designer"
                aria-label="Logo of Nour Homsi | Web & Graphic Designer"
                loading="lazy"
                decoding="async"
                width="97"
                height="40"
              />
            </a>
          </div>
  
          <!-- Navigation Menu -->
          <nav
            class="nav-menu position-relative"
            :class="{'d-none d-lg-block': !isMobileMenuOpen}"
          >
            <ul id="menu-menu-1" class="nav-menu-container">
              <li
                id="menu-item-43"
                class="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <a
                  title="كورس التصميم والبرمجة"
                  href="https://nourhomsi.net/course/"
                >
                  كورس التصميم والبرمجة
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMobileMenuOpen: false, // للتحكم في حالة قائمة الجوال
      };
    },
    methods: {
      toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen; // تبديل حالة القائمة
      },
    },
  };
  </script>
  
  <style scoped>
  /* يمكنك إضافة تنسيقات CSS هنا لتنسيق زر القائمة الجوال أو عناصر الهيدر */
  </style>
  