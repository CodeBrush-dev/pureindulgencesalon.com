// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.pureindulgencesalon.com",
    googleSiteVerification: "9ylQuJD7v4FbM0vWzamutRm0r1qQ-sIUwTwadIU8530"
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.pureindulgencesalon.com/","title_tag":"Women's Hair Salon Port Deposit | Pure Indulgence","meta_description":"Private salon studio Port Deposit offering organic hair products, expert hair color, gray coverage, highlights and a custom hair experience for women."},{"page_url":"https://www.pureindulgencesalon.com/new-client-single-stylist","title_tag":"Custom Hair Experience Port Deposit | Pure Indulgence","meta_description":"Book your private salon studio Port Deposit new client visit with digital consultation, haircut and style, hair care consultation and custom color for women."},{"page_url":"https://www.pureindulgencesalon.com/services","title_tag":"Hair Color Port Deposit | Pure Indulgence","meta_description":"Expert hair color, gray coverage, highlights, haircuts and blow dry services in Port Deposit. Customized solution sessions and organic hair products."},{"page_url":"https://www.pureindulgencesalon.com/about-me","title_tag":"Hair Care Consultation Port Deposit | Pure Indulgence","meta_description":"Meet Renee, a certified colorist in Port Deposit offering hair care consultation, gray coverage, custom color, women's haircut and private salon studio service."},{"page_url":"https://www.pureindulgencesalon.com/contact","title_tag":"Private Salon Studio Port Deposit | Pure Indulgence","meta_description":"Contact Pure Indulgence in Port Deposit to book blow dry services, hair color, gray coverage or a hair care consultation in a private salon studio."},{"page_url":"https://www.pureindulgencesalon.com/faq","title_tag":"Haircut & Style Port Deposit | Pure Indulgence","meta_description":"Find answers about booking, cancellation policy and what to expect for haircut and style, blow dry services and hair care consultations in Port Deposit."},{"page_url":"https://www.pureindulgencesalon.com/thank-you","title_tag":"Thank You - Private Salon Port Deposit | Pure Indulgence","meta_description":"Thanks for choosing Pure Indulgence, your private salon studio in Port Deposit for hair color, gray coverage, highlights and bespoke hair care."}],"keywords":["hair color port deposit","blow dry services port deposit","haircut and style port deposit","gray coverage port deposit","womens hair salon port deposit","private salon studio port deposit","hair highlights port deposit","organic hair products port deposit","custom hair experience port deposit","hair care consultation port deposit"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "Pure Indulgence",
  "url": "https://www.pureindulgencesalon.com/",
  "description": "Private salon studio serving Cecil County offering reliable gray coverage, soft highlights, dimension and short hair. Certified colorist specializing in color retouches, transitioning to gray, highlights, dimension and haircutting in a one-chair suite experience.",
  "telephone": "(410) 642-2224",
  "email": "pureindulgencesalon@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1540 Jacob Tome Highway",
    "addressLocality": "Port Deposit",
    "addressRegion": "MD",
    "postalCode": "21904",
    "addressCountry": "US"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "https://schema.org/Tuesday",
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "https://schema.org/Wednesday",
      "opens": "11:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "https://schema.org/Friday",
      "opens": "09:00",
      "closes": "17:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "https://schema.org/Saturday",
      "opens": "08:00",
      "closes": "15:00"
    }
  ],
  "areaServed": {
    "@type": "Place",
    "name": "Cecil County"
  },
  "image": [
    "https://static.wixstatic.com/media/85947a_bc3774c44bc04ddb967f854c4eb49e95%7Emv2.png",
    "https://static.wixstatic.com/media/298962_a55d89df1f4c4b47b6ad3546b042ce5f%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/298962_a55d89df1f4c4b47b6ad3546b042ce5f%7Emv2.jpg",
    "https://static.wixstatic.com/media/nsplsh_5fcf55653087407f90891bb4e4e7a0b2~mv2.jpg/v1/fill/w_323,h_385,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%20by%20Adam%20Winger.jpg"
  ],
  "founder": {
    "@type": "Person",
    "name": "Renee"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "(410) 642-2224",
    "email": "pureindulgencesalon@gmail.com"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Service Solutions Menu",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "New Guest Refresh",
          "description": "Refresh color without major changes or lightening; great for covering gray and refreshing ends. Includes shampoo, blowdry and haircut as part of package. Estimated maintenance 4-8 weeks. Time: 2 hours."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": 150,
          "maxPrice": 155,
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "New Guest Maintain",
          "description": "Touch up highlights without major changes; partial highlights or grey coverage with face-framing highlights (10 or less). Includes shampoo, blowdry and haircut. Estimated maintenance 10-16 weeks. Time: 2.5-3 hours."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": 195,
          "maxPrice": 225,
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "New Guest Upgrade",
          "description": "Full head highlights, grey coverage with highlights/lowlights, heavy highlighting or significant color change. Includes shampoo, blowdry and haircut. Estimated maintenance 12-16 weeks. Time: 3.5-4 hours."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": 250,
          "maxPrice": 320,
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "New Guest Nourish",
          "description": "Haircut service without color. Includes relaxing luxury shampoo with scalp massage, customized haircut or trim, blow dry style, personalized styling session and product recommendations. Time: 75 minutes. Estimated maintenance 5-8 weeks."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": 70,
          "maxPrice": 75,
          "priceCurrency": "USD"
        }
      }
    ]
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "B.C."
      },
      "reviewBody": "Renee' is an excellent stylist. She takes her time and I've always had a great cut. She is always on time. Her salon is clean and beautiful. So happy that I found her. She is so professional and never tries to push products. I couldn't ask for a better stylist. She always makes sure I am happy with my cut. If you haven't already, try her. You won't regret it."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "M.B."
      },
      "reviewBody": "This was the best hair color and cut I have ever gotten in my life! No one has ever taken the time to educate me about my hair before. It was such an amazing experience as is Renee'. I am so happy and love my new do! Thank you, Renee', you are the best!!"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "E.D."
      },
      "reviewBody": "Renee' always gives me a fantastic cut and is truly a color artist. She also introduced me to the Kevin Murphy line of hair products and I just love them. The thickening line does wonders for my thin hair giving it noticeable volume, manageability, and bounce. I'm so glad I found Renee' and Pure Indulgence!"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "D.I."
      },
      "reviewBody": "Renee' is a phenom in the beauty services industry! Her gorgeous studio sets the tone for the amazing experience you will have in her highly skillful and professional hands. Renee' listens carefully and applies her expertise to create the most fabulous \"you\" possible. She uses the highest quality organic hair care products that meet and exceed the needs and expectations of even the most particular client ..... me."
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
