// パフォーマンス監視と最適化のためのユーティリティ

// Web Vitals用の型定義
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  duration: number;
  startTime: number;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

/**
 * Core Web Vitalsの測定
 */
export function measureWebVitals() {
  if (typeof window === "undefined") return;

  // Largest Contentful Paint (LCP)
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log("LCP:", lastEntry.startTime);
  }).observe({ entryTypes: ["largest-contentful-paint"] });

  // First Input Delay (FID)
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach((entry) => {
      const fidEntry = entry as PerformanceEventTiming;
      console.log("FID:", fidEntry.processingStart - fidEntry.startTime);
    });
  }).observe({ entryTypes: ["first-input"] });

  // Cumulative Layout Shift (CLS)
  let clsValue = 0;
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach((entry) => {
      const layoutShift = entry as LayoutShift;
      if (!layoutShift.hadRecentInput) {
        clsValue += layoutShift.value;
      }
    });
    console.log("CLS:", clsValue);
  }).observe({ entryTypes: ["layout-shift"] });
}

/**
 * リソースの事前読み込み
 */
export function preloadCriticalResources() {
  if (typeof document === "undefined") return;

  // 重要なフォントの事前読み込み
  const fontPreload = document.createElement("link");
  fontPreload.rel = "preload";
  fontPreload.href = "/fonts/grotesk/SpaceGrotesk-Regular.woff";
  fontPreload.as = "font";
  fontPreload.type = "font/woff";
  fontPreload.crossOrigin = "anonymous";
  document.head.appendChild(fontPreload);

  // 重要な画像の事前読み込み
  const imagePreload = document.createElement("link");
  imagePreload.rel = "preload";
  imagePreload.href = "/logo.png";
  imagePreload.as = "image";
  document.head.appendChild(imagePreload);
}

/**
 * 画像の遅延読み込み
 */
export function lazyLoadImages() {
  if (typeof window === "undefined") return;

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          imageObserver.unobserve(img);
        }
      }
    });
  });

  // data-src属性を持つ画像を監視
  const lazyImages = document.querySelectorAll("img[data-src]");
  lazyImages.forEach((img) => imageObserver.observe(img));
}

/**
 * スクロールパフォーマンスの最適化
 */
export function optimizeScrollPerformance() {
  if (typeof window === "undefined") return;

  let ticking = false;

  function updateScrollPosition() {
    // スクロール位置に基づく処理
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestTick, { passive: true });
}

/**
 * メモリ使用量の監視
 */
export function monitorMemoryUsage() {
  if (typeof window === "undefined" || !("memory" in performance)) return;

  const memoryInfo = (performance as any).memory;
  console.log("Memory Usage:", {
    used: Math.round(memoryInfo.usedJSHeapSize / 1048576) + " MB",
    total: Math.round(memoryInfo.totalJSHeapSize / 1048576) + " MB",
    limit: Math.round(memoryInfo.jsHeapSizeLimit / 1048576) + " MB",
  });
}

/**
 * パフォーマンス最適化の初期化
 */
export function initPerformanceOptimizations() {
  if (typeof window === "undefined") return;

  // DOMContentLoaded後に実行
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      measureWebVitals();
      preloadCriticalResources();
      lazyLoadImages();
      optimizeScrollPerformance();
    });
  } else {
    measureWebVitals();
    preloadCriticalResources();
    lazyLoadImages();
    optimizeScrollPerformance();
  }

  // 定期的にメモリ使用量を監視
  setInterval(monitorMemoryUsage, 30000);
}
