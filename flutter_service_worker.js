'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "700501482832c6b76588dca8b55e8cfd",
"version.json": "1d9b80cf5b799918547f4ecbc45aef63",
"index.html": "7511c10d41ba7c5d55c3e3daf4e1cded",
"/": "7511c10d41ba7c5d55c3e3daf4e1cded",
"main.dart.js": "45e2cf96202f976bec09b2621cf5c11f",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "80ca9cbe76afd413e54645871a397f74",
"icons/Icon-192.png": "109a3f682ed1e8ddd0137a49f807c404",
"icons/Icon-maskable-192.png": "109a3f682ed1e8ddd0137a49f807c404",
"icons/Icon-maskable-512.png": "90c5b135bfac73a07aded33e833d729e",
"icons/Icon-512.png": "90c5b135bfac73a07aded33e833d729e",
"manifest.json": "ee105c6d6086fa40175f3a88d291bc02",
"assets/AssetManifest.json": "a94e53db03be3b021d4c1e2237e7cbd4",
"assets/NOTICES": "6eab702cd4ddeb0cdbe7bbbd16ab24d5",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "4139bda954f08d30eeff618afd4b15c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a3423f83a4cde014239296d34f656d57",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "63009c2cea9c1f67349f051ecfc3ad2d",
"assets/fonts/MaterialIcons-Regular.otf": "de9746f9bb598b3f08a244939361ab5b",
"assets/assets/images/app_icon.png": "a28758ce5a16083f85f924fa93fe4adf",
"assets/assets/images/meshtastic/device/10.HELTEC_V2_1.jpg": "36d50863dbab2726fcbef587472aa7b3",
"assets/assets/images/meshtastic/device/67.HELTEC_VISION_MASTER_E213.jpg": "3494c348daab89bdf1c8107d27f759dd",
"assets/assets/images/meshtastic/device/72.RAK3172.jpg": "65454a9755cc0793646a53c418942af4",
"assets/assets/images/meshtastic/device/48.HELTEC_WIRELESS_TRACKER.jpg": "de0740832a927903c5eaa5236e606b97",
"assets/assets/images/meshtastic/device/43.HELTEC_V3.jpg": "32620020f1b7afa09d3d93505d2ee735",
"assets/assets/images/meshtastic/device/7.T_ECHO.jpg": "7a029daf5af7f464f9d137d2ec543bcd",
"assets/assets/images/meshtastic/device/16.TLORA_T3_S3.jpg": "62738c478d0e79b56574970c27fb0d63",
"assets/assets/images/meshtastic/device/18.NANO_G2_ULTRA.jpg": "616bf2f28513f5271474d969f16dcfa1",
"assets/assets/images/meshtastic/device/53.HELTEC_HT62.jpg": "cc318c4937d8e405e5cd22894524a12c",
"assets/assets/images/meshtastic/device/13.RAK11200.jpg": "201796ebc9af448430355decb7435af6",
"assets/assets/images/meshtastic/device/9.RAK4631.jpg": "af59ae1381a01edb51d0b8a8aa031673",
"assets/assets/images/meshtastic/device/12.LILYGO_TBEAM_S3_CORE.jpg": "8edea510b1a35341b7605b7854262805",
"assets/assets/images/meshtastic/device/49.HELTEC_WIRELESS_PAPER.jpg": "3b375f4357dc7a95ab8d373702ab5184",
"assets/assets/images/meshtastic/device/22.RAK2560.jpg": "083f779f61d62d0a889702a54abb4de6",
"assets/assets/images/meshtastic/device/19.LORA_TYPE.jpg": "d0975049e48c70ce258c936189f0f265",
"assets/assets/images/meshtastic/device/66.HELTEC_VISION_MASTER_T190.jpg": "db6fe30c1a89831387e6abfbac7c2473",
"assets/assets/images/meshtastic/device/20.WIPHONE.jpg": "a53ded83cde0dd3d36732819c55b4796",
"assets/assets/images/meshtastic/device/0.default.png": "acdea7ff0b51ab18e3a2c5f1fd77cd7e",
"assets/assets/images/meshtastic/device/3.TLORA_V2_1_1P6.jpg": "5082241927c454043d7bd5900481396a",
"assets/assets/images/meshtastic/device/68.HELTEC_VISION_MASTER_E290.jpg": "12fc5a08711a65ecf260287fe04cafb9",
"assets/assets/images/meshtastic/device/23.HELTEC_HRU_3601.jpg": "a4bf8322d0fa786b1a9e00d192856a52",
"assets/assets/images/meshtastic/device/44.HELTEC_WSL_V3.jpg": "5091f768d8fbd563e583a6b4ea22b3a9",
"assets/assets/images/meshtastic/device/61.CDEBYTE_EORA_S3.jpg": "02a5957734f01741f103e44d0a6fdf4b",
"assets/assets/images/meshtastic/device/14.NANO_G1.jpg": "b1001a2448e2e2c0ea7b5b55604e4029",
"assets/assets/images/meshtastic/device/64.RADIOMASTER_900_BANDIT_NANO.jpg": "92a7eba90933859e3db4975f50c22b91",
"assets/assets/images/meshtastic/device/11.HELTEC_V1.jpg": "eceecd96b31d3d8ee998bfd6aff5dec2",
"assets/assets/images/meshtastic/device/40.NRF52840_PCA10059.jpg": "95996609cb114345f3659242376e5886",
"assets/assets/images/meshtastic/device/58.HELTEC_WIRELESS_TRACKER_V1_0.jpg": "7c6a616cee51fd39e9cd22e88f3ea524",
"assets/assets/images/meshtastic/device/50.T_DECK.jpg": "6c18e953e47cb0919a1c0278318f03f8",
"assets/assets/images/meshtastic/device/25.STATION_G1.jpg": "0cb5411ef8eaf1b701dea8eef03178f7",
"assets/assets/images/meshtastic/device/17.NANO_G1_EXPLORER.jpg": "6841a676bbe70a3cba266a375b41edf2",
"assets/assets/images/meshtastic/device/57.HELTEC_WIRELESS_PAPER_V1_0.jpg": "0132ff072b4a0904cdec8c54a8bd42e8",
"assets/assets/images/meshtastic/device/65.HELTEC_CAPSULE_SENSOR_V3.jpg": "37c47a3a79bbca07052a1f4b5a2df040",
"assets/assets/images/meshtastic/device/31.STATION_G2.jpg": "232e29fc16515ae77c9959f36863bc93",
"assets/assets/images/meshtastic/device/26.RAK11310.jpg": "1351b1ba45a943357acc21b5499d9797",
"assets/assets/images/meshtastic/device/4.TBEAM.jpg": "f447d64423be1152d98d678ffdc7761b",
"assets/assets/images/meshtastic/device/51.T_WATCH_S3.jpg": "277a627bd81c9ae9601eee51650d15ba",
"assets/assets/images/meshtastic/device/5.HELTEC_V2_0.jpg": "eceecd96b31d3d8ee998bfd6aff5dec2",
"assets/assets/cfg/app_settings.json": "996f907ed0aaa566a3df4a3721fdf10f",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
