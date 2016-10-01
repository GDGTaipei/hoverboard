/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/webcomponentsjs/webcomponents-lite.min.js","f04ed23700daeb36f637bfe095960659"],["/data/blog.json","966dfc623f261b214a06d7435f2068ee"],["/data/en/resources.json","8ae4914ec226b48883448a98252d3f6b"],["/data/hoverboard.config.json","7f16aa6841ac3e78f6808bca3b654be8"],["/data/partners.json","b68e75644fdeb5705531bd20b8003aa7"],["/data/posts/2015-10-24-devfest-ua-summary.markdown","68c408c5dac1a4299379a031482c63f5"],["/data/posts/2016-05-04-devfest-2016-announced.markdown","bdb4d8f7d8c62d4ffc6ef7d65bcc6876"],["/data/posts/2016-05-06-c4p-time.markdown","db8d211a74193948c77ba37a29ac9feb"],["/data/posts/code-of-conduct.markdown","d36b81f26dc0701bf2d5f8924f2fb4d8"],["/data/schedule.json","7f18d720189a561b24233e70224e42d9"],["/data/sessions.json","ae8773ac935db43152a1e0910fa123ad"],["/data/speakers.json","9c981ec78464170d268b685002b2f583"],["/data/team.json","5223a0ee832a99e2c6d2eb598149cee9"],["/data/tweets.json","80b8481b23c5a2e43a316f24b8973f04"],["/data/uk/resources.json","7650c844e95268aa69c0b47f867881f2"],["/data/videos.json","d33a117f430cbdb53d3c59b95a51fd8c"],["/images/backgrounds/2015_1.jpg","bc9d13af2b3e38b4556be691c63b7889"],["/images/backgrounds/2015_2.jpg","22ce360278168687e87cd0a728c43328"],["/images/backgrounds/2015_3.jpg","d76b9241e72a3f004b7c8f32452b0692"],["/images/backgrounds/closing.jpg","0d2666a42b5feb51dbddae4a6e76cf59"],["/images/backgrounds/coffee-break.jpg","283b8d543ba287acda89bade3e1a7eb4"],["/images/backgrounds/home.png","b57f40e281ba06760d073514bef2f1bb"],["/images/backgrounds/hub.jpg","f1db7c47dff6b3bc54c64f0db9d975d2"],["/images/backgrounds/location_1.jpg","8de2dd2dd6247cda89a487a1aa38804e"],["/images/backgrounds/location_2.jpg","38683197f335140f8807bec868c5c4dd"],["/images/backgrounds/location_3.jpg","5a4ce654301d6d264e5f4fb48ae890f0"],["/images/backgrounds/lunch.jpg","1b7f9ec019a4391c25584c3bce7843d6"],["/images/backgrounds/morning.jpg","ee01e33624472918bb981c02b2c31855"],["/images/backgrounds/opening.jpg","3ebf00d4f85ca044eff1dc17ed56d034"],["/images/backgrounds/party.jpg","62bdfc8ded3b33861fecade528d92837"],["/images/backgrounds/registration.jpg","4afd4b01198cc95c2232e06dd35eb640"],["/images/favicon/favicon-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/favicon/favicon.ico","b86585686052335d3f7ef73973e18aef"],["/images/favicon/favivon-32.png","a9509ca258731e12d52dd223ad1ba4c8"],["/images/gdg-logo.svg","a124fcbb532a30ad2342b16662695bdf"],["/images/logo-light.svg","75f45b80d3e64d114f910351b33f361d"],["/images/logo-white.svg","94f517204edbbc3da51c1d3bf616ea0d"],["/images/logo.svg","68a5eeb613ef13b8d6453ede61d86a65"],["/images/logos/gdg-lviv.svg","557e52d18aed88a36197d1388c67c985"],["/images/logos/gdg-x.svg","f8fb99f2d34c78761130651f9d46c5ed"],["/images/logos/google.svg","888b314b2d82dac34ba4f7d1df8e0a84"],["/images/people/adrian_kajda.jpg","0f6b1f6e0fb8456b0e502fb68d63b890"],["/images/people/aleksander_piotrowski.jpg","3fdea37afaadb582de5d3db734ca7449"],["/images/people/anton_minashkin.jpg","8743cba298093dd9d8753df54ffa3eb2"],["/images/people/carmen_popovicu.jpg","a965e4967c7e404c1160aaed7bfd2504"],["/images/people/constantine_mars.jpg","a2012f812425ef17db86a22ee1a7d3a9"],["/images/people/david_mayboroda.jpg","f8a82fa9a9501f993f07f1047af36500"],["/images/people/david_vávra.jpg","36b36fbfd39cf79811b709a59b584c69"],["/images/people/diana_pinchuk.jpg","a8fededa520a70d7b15ca9855f4274b4"],["/images/people/dmytro_danylyk.jpg","055e47dbd06c0310fe2ad2eef2ce33e8"],["/images/people/gerard_sans.jpg","f27a13dd6f6c6900d0641c930d7acfc6"],["/images/people/ihor_dvoretskyi.jpg","a972b997723d51d76e1a8e5b1639ece9"],["/images/people/jakub_škvára.jpg","91d772c2d43a89ebf9ff2db6f9d7da09"],["/images/people/jana_moudra.jpg","599274aedd2628e4cca8f25a06de9c42"],["/images/people/jean-baptiste_clion.jpg","9deb5786962a4c5cda8d418979b1dc36"],["/images/people/jozef_vodicka.jpg","a637531e56379d8fd17e193ad41feac2"],["/images/people/konrad_dzwinel.jpg","87fa8ec3b0c03fbf1ec7fbb76f095001"],["/images/people/marta_maxymiak.jpg","66cf6a7ffbb589914516f2303cc3274b"],["/images/people/mateusz_herych.jpg","26b070ef0b1a9ea3524a81120e00a584"],["/images/people/mete_atamel.jpg","f6d464313c22a02cb7b614465fad34ad"],["/images/people/michael_pustovit.jpg","06067095649e59a0829702546b9ffa9e"],["/images/people/oleh_zasadnyy.jpg","65455c422b00d757659a32eccf6f74bd"],["/images/people/ostap_andrusiv.jpg","075350bcb64d4ae4e39c23f10a864215"],["/images/people/paul_lammertsma.jpg","7e36e7d6a582245a666edad0fc7a0e18"],["/images/people/resul caner_yildirim.jpg","cc8cfb34921892bbedde00756a7495b7"],["/images/people/roman_herasymenko.jpg","db34757871038f0d9f4fd5f62e460e46"],["/images/people/rustem_arzymbetov.jpg","257f8f63371fd3c2148000d5c5cda7c7"],["/images/people/sascha_wolter.jpg","ccd15e09478bfe988cc05904b29662bc"],["/images/people/sergii_khomenko.jpg","75f5812d1dfa3f5d9e0dc21dc15efd7c"],["/images/people/sergiy_mokienko.jpg","ca54f122a83434cf9d041e1f1030f6bf"],["/images/people/sofiya_huts.jpg","79853274bd9e03af2d6d253e7a6fcce9"],["/images/people/valentyn_shybanov.jpg","f20c647b7afdf41dfe5f77c413e4c19d"],["/images/people/vasylyna_mytsak.jpg","02e5c75ae5e27012723770d2365a0af9"],["/images/people/vitaliy_zasadnyy.jpg","6e6d03c367f0bec66080792c59516b3b"],["/images/people/volodya_karpliuk.jpg","6dd8b956989a8906aae87aea38092a48"],["/images/people/yonatan_levin.jpg","6ab778d9178aae877f3c09aca42f6b5a"],["/images/posts/announce.jpg","bc9412e05d6ceaf809583f52c0631e6e"],["/images/posts/c4p-is-open.jpg","e70275316abad0afb9e145ef75472351"],["/images/posts/summary.jpg","6df056d37ca45e05cd240db2e902a02c"],["/images/posts/summary1.jpg","c6deb766b3d711b16dd54836cec831be"],["/images/posts/summary10.jpg","7c475adf3f762770eab64ac2336088b2"],["/images/posts/summary11.jpg","ba56a01a1b012252657c15f362814898"],["/images/posts/summary2.jpg","b04919da708d9332358696c24dde6f0c"],["/images/posts/summary3.jpg","cca9bbf45d05d6b129e4b87b249c368f"],["/images/posts/summary4.jpg","176b9543955b84c0bbda8f21a80aa7f0"],["/images/posts/summary5.jpg","2c75cba81c06eac75fdbfac4edbed79d"],["/images/posts/summary6.jpg","4637db009b49463d40be52c9e57c367a"],["/images/posts/summary7.jpg","18f9515bb11dcf2e2a98a856b939b23d"],["/images/posts/summary8.jpg","51a6357257d94790599645aa1059e0f5"],["/images/posts/summary9.jpg","63bbe0210affa537342e33e7a203bbc6"],["/images/sessions/101.JPG","ede88fe70af4490b679cefd1ce1e5089"],["/images/sessions/102.JPG","bbdb4ca9cd529504f4e3a753aeee733d"],["/images/sessions/103.JPG","224b230f4bb13c6ff1d46f619ef803ed"],["/images/sessions/104.JPG","73bad1eb58418b34a464911d3ec93f41"],["/images/sessions/105.JPG","111f9e298a0c75cca4ce4a4bc18fc670"],["/images/sessions/106.JPG","f1eb952cb454b74de96bd4e3907107d0"],["/images/sessions/107.JPG","8231c85cf0d0c19c03fefd00dcb6be25"],["/images/sessions/108.JPG","481a5aff3eab28bbcde894cd8bf01afa"],["/images/sessions/109.JPG","1573d7d1302da1b08f08ce0176c44714"],["/images/sessions/110.JPG","e0fbc859296bad2c71f0a23084d59410"],["/images/sessions/111.JPG","fc52d9e46fa8403336782eeee3397ae7"],["/images/sessions/112.JPG","85270c0e66bc27c8faa2a7f61645e29e"],["/images/sessions/113.JPG","51fec4ff43dc798b30fea374b2ab8e6f"],["/images/sessions/114.JPG","9f9bf0b0e7f91ad483d63e37df977c1d"],["/images/sessions/115.JPG","606958de9bccb22c3bf983153bdce886"],["/images/sessions/116.JPG","18498b45a03bc9681a65f43957431711"],["/images/sessions/117.JPG","ab525002817d6b6ff87daf169de3d15c"],["/images/sessions/119.JPG","161a228686bb400ba188c8df058bd8ed"],["/images/sessions/120.JPG","aab4f9cc5d8c0fae92fe3e55866b58a9"],["/images/sessions/122.JPG","3ecb36e2284df6cb89816a3f4b9d38ed"],["/images/sessions/123.JPG","701c7edc8cb398b857114209fb234271"],["/images/sessions/124.JPG","a911c75a697e7dca346bf259d6cdd6d6"],["/images/sessions/125.JPG","7d1846ed159325b9ee348c3f8f0bf883"],["/images/sessions/133.JPG","bc6011fb13b75b695b848ab7c31efa39"],["/images/sessions/134.JPG","668ebe1db886c5ac44474bd3753a196e"],["/images/sessions/135.JPG","10370c66d83100cf54e15eb50d252302"],["/images/sessions/140.JPG","af7741e0a0b12bc11e19b169bdd107b3"],["/images/social-share.png","79ca6494383081d924064ed71e116e70"],["/images/touch/homescreen-144.png","777fba2c9ab035808a6925ca611bc67f"],["/images/touch/homescreen-168.png","fc1f8e5f1a213ad6c2731c089fef3de1"],["/images/touch/homescreen-192.png","1775ae0aca4e1db5d5b1650a3b2c7eac"],["/images/touch/homescreen-256.png","c30a7a4972a7b4a5c0ad7c9572cb3e87"],["/images/touch/homescreen-48.png","0a740b7afb3040a80eb0622ee24b35ac"],["/images/touch/homescreen-72.png","8a50435f9af90132f255eb24018c68dc"],["/images/touch/homescreen-96.png","0f6e04240af1efb86d43d278564d46ac"],["/index.html","7ca8f1dcab1428901d59c609a024ece0"],["/manifest.json","ba5213bb8ac17d6d558b9ef604f917f8"],["/scripts/bootstrap.js","ed50113d210e9ac60efcefc68dd6834d"],["/scripts/helper/deferred.js","00ad32e38a07f247290c2f67e536d711"],["/scripts/helper/elements.js","0ca8fba3ee9ce7cba1d836a0bed8afea"],["/scripts/helper/promise-polyfill.js","bce372630e22345ff83479f41c533046"],["/scripts/helper/service-worker-registration.js","2e10c2ced9d00afc996e1b9beb8f1cee"],["/scripts/helper/util.js","36c5192324d40e060799d58a38f96ef6"],["/scripts/metrics.js","8623bff01545e628beb021b08b8afa31"],["/src/behaviors/localize-behavior.html","5c9051994ed4cb58f9ca0a2cfbf0c483"],["/src/behaviors/page-behavior.html","7a14e88bebe781a58ef61c15252a8e4d"],["/src/behaviors/share-behavior.html","cb664197f584d8b10b94d069c119214c"],["/src/behaviors/utils-behavior.html","2e544f9c4b49f3af3a1152174baa2916"],["/src/effects/fade-effect.html","8ee4b618e5e00c5b2c822a7bdddfa1b1"],["/src/elements/about-block.html","bed1462f08b432d21111284783e15353"],["/src/elements/animatable-content.html","f4b07f855a4880b041ad91499007f74f"],["/src/elements/app-data.html","2d5850928498309e76a4f02486517899"],["/src/elements/call-to-action.html","6e01c9d68e5c334e5a45e9abc532c7f1"],["/src/elements/drawer-block.html","ea984cd3fca83cf56a8e58e5b138382a"],["/src/elements/featured-people.html","249707dd0ca920238932a7494c0c5a3f"],["/src/elements/featured-videos.html","80d4e598376a9dc8df9aaf1e8ba40108"],["/src/elements/footer-block.html","0260a3e42af487b155900a34564a3e5d"],["/src/elements/header-content.html","58b012312d0a1592114af9f4a77e38d7"],["/src/elements/latest-posts.html","d3e3d6d0f23c46347fba03a7478f44f1"],["/src/elements/logos-block.html","6237343bedf8dbdcaef81d89ebcfe71c"],["/src/elements/mailchimp-subscribe.html","080ada45390e247ba278fa6f5a16634f"],["/src/elements/map-block.html","f4f3311ae5b41f230a3341105e1327a9"],["/src/elements/photo-block.html","6fc4977db8e046054608eb7f680a905e"],["/src/elements/schedule-day.html","5872710494dd1a23b2994bf3cf94619d"],["/src/elements/schedule-subnav.html","3ad4d6b985e0e42d510f3a2bc5927597"],["/src/elements/session-details.html","29c1f46f8ec7d30b3e17f59a91d831d1"],["/src/elements/social-feed.html","fa4b6815f37f5a0d2711e82b0375ca96"],["/src/elements/social-post.html","cd9164247079ccdca86f1cfed3a09b7c"],["/src/elements/speaker-details.html","b187afdc96c187597deb35f382d2ebcf"],["/src/elements/statistics-block.html","3275ecc1d2acd05ca638506c9e38b297"],["/src/elements/ticket-element.html","498a199ba2dc885300fae700aca2b7f2"],["/src/elements/tickets-block.html","8dfcecb54aee013d036b1e2865eb423e"],["/src/elements/toast-element.html","d26f879617a6c9d8a1ef57a0e1073142"],["/src/elements/toolbar-block.html","214c354cc22d690652ef63fbdfb89ec6"],["/src/elements/truncate-marked-text.html","a4e2ead87bcb1526e38395b8c5525a23"],["/src/elements/video-dialog.html","77cc165d7ad1aa76df137b03af61d69d"],["/src/hoverboard-app.html","53d8013760ce516fd763acacaecc51fb"],["/src/js-wrappers/g-plusone.html","abcc292603de43782fa49f6fd952a4a6"],["/src/js-wrappers/time-element-wrapper.html","cc26ded5c3021fdfb09304414b2e0af1"],["/src/pages/blog-list.html","b0621b3feed8ff0900dee19f5c98177b"],["/src/pages/blog-page.html","558f2a547620a3595979ac881f0a664a"],["/src/pages/cod-page.html","d077a020d6a3b27c6ecd998acd186022"],["/src/pages/home-page.html","843666db720bf7f39b7d871f893df545"],["/src/pages/post-page.html","5afd570b193d39ab50ddd61c463efaee"],["/src/pages/schedule-page.html","be58d0b35f0c724610973d57217ed85f"],["/src/pages/speakers-page.html","c38473ca241c71cb47879fb453ca8a30"],["/src/pages/team-page.html","9865467cea208cdd5b572e002a30e79d"],["/src/styles/dialog-styles.html","f1910f8e1c4247e0e2c4e99814615b7a"],["/src/styles/icons.html","bc6fc739ddabc1dce834e1d8c9df1a69"],["/src/styles/mixins.html","a97221af3b44a1b3ca296ab0b5d4e10e"],["/src/styles/shared-styles.html","be3b368c43a806624eb892a35fe81747"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




