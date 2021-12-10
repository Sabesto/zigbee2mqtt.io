"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[9589],{20970:(e,t,a)=>{a.r(t),a.d(t,{data:()=>n});const n={key:"v-6ff7464e",path:"/devices/067771.html",title:"Legrand 067771 control via MQTT",lang:"en-US",frontmatter:{title:"Legrand 067771 control via MQTT",description:"Integrate your Legrand 067771 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-01-14T19:34:25.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Model numbers",slug:"model-numbers",children:[]},{level:3,title:"LED configuration",slug:"led-configuration",children:[]},{level:3,title:"Dimmer",slug:"dimmer",children:[]},{level:3,title:"Identify",slug:"identify",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Light",slug:"light",children:[]},{level:3,title:"Ballast_minimum_level (numeric)",slug:"ballast-minimum-level-numeric",children:[]},{level:3,title:"Ballast_maximum_level (numeric)",slug:"ballast-maximum-level-numeric",children:[]},{level:3,title:"Dimmer_enabled (binary)",slug:"dimmer-enabled-binary",children:[]},{level:3,title:"Permanent_led (binary)",slug:"permanent-led-binary",children:[]},{level:3,title:"Led_when_on (binary)",slug:"led-when-on-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/067771.md",git:{updatedTime:1639124964e3}}},53050:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(66252);const o=(0,n.uE)('<h1 id="legrand-067771" tabindex="-1"><a class="header-anchor" href="#legrand-067771" aria-hidden="true">#</a> Legrand 067771</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>067771</td></tr><tr><td>Vendor</td><td>Legrand</td></tr><tr><td>Description</td><td>Wired switch without neutral</td></tr><tr><td>Exposes</td><td>light (state, brightness), ballast_minimum_level, ballast_maximum_level, dimmer_enabled, permanent_led, led_when_on, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/067771.jpg" alt="Legrand 067771"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="model-numbers" tabindex="-1"><a class="header-anchor" href="#model-numbers" aria-hidden="true">#</a> Model numbers</h3><p>Model number depends on the country and the colour of the devices, for instance:</p><ul><li><p>French models are branded as Céliane with Netatmo, and models for this device depends on the colour, with the following numbers: &quot;0 677 21&quot;, &quot;0 677 71&quot; and &quot;0 648 91&quot;.</p></li><li><p>Spanish models are branded as Legrand Valena Next, and models for this device depends on the colour, with the following numbers: &quot;7 418 10&quot;, &quot;7 418 40&quot; and &quot;7 418 70&quot;.</p></li></ul><p>Other brand names depending on the country:</p><ul><li>Availability for Céliane™ with Netatmo → France and Overseas territories, Greece, Poland, Hungary, Tunisia, Morocco, Ivory Coast, Czech Republic, Russia, Mauritius</li><li>Availability for Dooxie™ with Netatmo → France and Overseas territories</li><li>Availability for Mosaic™ with Netatmo → France and Overseas territories, Ivory Coast</li><li>Availability for Living Now™ with Netatmo → Italy, Belgium, Greece, Portugal, Lebanon, Israel, Chile, Peru, Mexico</li><li>Availability for Valena Allure™ with Netatmo → Greece, Germany, Austria, Poland, Slovakia, Bulgaria, Czech Republic, Hungary, Russia</li><li>Availability for Valena Life™ with Netatmo → Greece, Germany, Austria, Portugal, Poland, Slovakia, Bulgaria, Czech Republic, Hungary, Lituania, Russia</li><li>Availability for Valena Next™ with Netatmo → Spain, Belgium</li><li>Availability for Arteor™ with Netatmo → Australia, New Zealand, India, Malaysia, Lebanon, Mauritius, South Africa</li><li>Availability for Plexo™ with Netatmo → France and Overseas territories, Spain, Belgium</li><li>Availability for Modul&#39;Up™ with Netatmo → France and Overseas territories</li></ul><h3 id="led-configuration" tabindex="-1"><a class="header-anchor" href="#led-configuration" aria-hidden="true">#</a> LED configuration</h3><ul><li><code>permanent_led</code>: enable or disable the permanent blue LED. Values: <code>ON</code> / <code>OFF</code> (default)</li><li><code>led_when_on</code>: enables the LED when the light is on. Values: <code>ON</code> / <code>OFF</code> (default)</li></ul><p>Example of MQTT message payload to disable permanent LED and enable LED when the lights are on. This should be sent to <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string">&quot;permanent_led&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OFF&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;led_when_on&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ON&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="dimmer" tabindex="-1"><a class="header-anchor" href="#dimmer" aria-hidden="true">#</a> Dimmer</h3><ul><li><code>dimmer_enabled</code>: enable or disable the dimming functions. Values: <code>ON</code> / <code>OFF</code> (default)</li></ul><p>Example of MQTT message payload to enable dimming. This should be sent to <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;dimmer_enabled&quot;: &quot;ON&quot;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="identify" tabindex="-1"><a class="header-anchor" href="#identify" aria-hidden="true">#</a> Identify</h3><p>Helps to identify the switch using the LED.</p><ul><li><p><code>identify[&#39;effect&#39;]</code>: only works for blink3 &amp; fixed in <code>effect</code>. Values:</p><ul><li><code>blink3</code></li><li><code>fixed</code></li><li><code>blinkgreen</code></li><li><code>blinkblue</code></li></ul></li><li><p><code>identify[&#39;color&#39;]</code>: only works for blink3 &amp; fixed in <code>effect</code>. Values:</p><ul><li><code>default</code></li><li><code>red</code></li><li><code>green</code></li><li><code>blue</code></li><li><code>lightblue</code></li><li><code>yellow</code></li><li><code>pink</code></li><li><code>white</code></li></ul></li></ul><p>Example of MQTT message payload to Identify the switch. This should be sent to <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;identify&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blink3&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;white&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',22),i=(0,n.Uk)("How to use device type specific configuration"),s=(0,n.uE)('<ul><li><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping" aria-hidden="true">#</a> Moving/stepping</h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span>\n  <span class="token string">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span>\n  <span class="token string">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="ballast-minimum-level-numeric" tabindex="-1"><a class="header-anchor" href="#ballast-minimum-level-numeric" aria-hidden="true">#</a> Ballast_minimum_level (numeric)</h3><p>Specifies the minimum brightness value. Value can be found in the published state on the <code>ballast_minimum_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ballast_minimum_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ballast_minimum_level&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>254</code>.</p><h3 id="ballast-maximum-level-numeric" tabindex="-1"><a class="header-anchor" href="#ballast-maximum-level-numeric" aria-hidden="true">#</a> Ballast_maximum_level (numeric)</h3><p>Specifies the maximum brightness value. Value can be found in the published state on the <code>ballast_maximum_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ballast_maximum_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ballast_maximum_level&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>254</code>.</p><h3 id="dimmer-enabled-binary" tabindex="-1"><a class="header-anchor" href="#dimmer-enabled-binary" aria-hidden="true">#</a> Dimmer_enabled (binary)</h3><p>Allow the device to change brightness. Value can be found in the published state on the <code>dimmer_enabled</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;dimmer_enabled&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> dimmer_enabled is ON, if <code>OFF</code> OFF.</p><h3 id="permanent-led-binary" tabindex="-1"><a class="header-anchor" href="#permanent-led-binary" aria-hidden="true">#</a> Permanent_led (binary)</h3><p>Enable or disable the permanent blue LED. Value can be found in the published state on the <code>permanent_led</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;permanent_led&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> permanent_led is ON, if <code>OFF</code> OFF.</p><h3 id="led-when-on-binary" tabindex="-1"><a class="header-anchor" href="#led-when-on-binary" aria-hidden="true">#</a> Led_when_on (binary)</h3><p>Enables the LED when the light is on. Value can be found in the published state on the <code>led_when_on</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_when_on&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led_when_on is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',25),l={},d=(0,a(83744).Z)(l,[["render",function(e,t){const a=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[i])),_:1})])]),s],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,n]of t)e[a]=n;return e}}}]);