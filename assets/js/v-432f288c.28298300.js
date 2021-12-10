"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10866],{35274:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-432f288c",path:"/devices/E2007.html",title:"IKEA E2007 control via MQTT",lang:"en-US",frontmatter:{title:"IKEA E2007 control via MQTT",description:"Integrate your IKEA E2007 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-09-29T21:38:40.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Fan",slug:"fan",children:[]},{level:3,title:"Fan_speed (numeric)",slug:"fan-speed-numeric",children:[]},{level:3,title:"Pm25 (numeric)",slug:"pm25-numeric",children:[]},{level:3,title:"Air_quality (enum)",slug:"air-quality-enum",children:[]},{level:3,title:"Led_enable (binary)",slug:"led-enable-binary",children:[]},{level:3,title:"Child_lock (binary)",slug:"child-lock-binary",children:[]},{level:3,title:"Replace_filter (binary)",slug:"replace-filter-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/E2007.md",git:{updatedTime:1639124964e3}}},92280:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});var a=o(66252);const d=(0,a.uE)('<h1 id="ikea-e2007" tabindex="-1"><a class="header-anchor" href="#ikea-e2007" aria-hidden="true">#</a> IKEA E2007</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>E2007</td></tr><tr><td>Vendor</td><td>IKEA</td></tr><tr><td>Description</td><td>STARKVIND air purifier</td></tr><tr><td>Exposes</td><td>fan (state, mode), fan_speed, pm25, air_quality, led_enable, child_lock, replace_filter, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/E2007.jpg" alt="IKEA E2007"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),i=(0,a.Uk)("How to use device type specific configuration"),c=(0,a.uE)('<ul><li><p><code>pm25_precision</code>: Number of digits after decimal point for pm25, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>pm25_calibration</code>: Calibrates the pm25 value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="fan" tabindex="-1"><a class="header-anchor" href="#fan" aria-hidden="true">#</a> Fan</h3><p>The current state of this fan is in the published state under the <code>fan_state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_state&quot;: &quot;ON&quot;}</code> or <code>{&quot;fan_state&quot;: &quot;OFF&quot;}</code>. To read the current state of this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;fan_state&quot;: &quot;&quot;}</code>. To change the mode publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_mode&quot;: VALUE}</code> where <code>VALUE</code> can be: <code>off</code>, <code>auto</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>, <code>7</code>, <code>8</code>, <code>9</code>.</p><h3 id="fan-speed-numeric" tabindex="-1"><a class="header-anchor" href="#fan-speed-numeric" aria-hidden="true">#</a> Fan_speed (numeric)</h3><p>Current fan speed. Value can be found in the published state on the <code>fan_speed</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;fan_speed&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>9</code>.</p><h3 id="pm25-numeric" tabindex="-1"><a class="header-anchor" href="#pm25-numeric" aria-hidden="true">#</a> Pm25 (numeric)</h3><p>Measured PM2.5 (particulate matter) concentration. Value can be found in the published state on the <code>pm25</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pm25&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>µg/m³</code>.</p><h3 id="air-quality-enum" tabindex="-1"><a class="header-anchor" href="#air-quality-enum" aria-hidden="true">#</a> Air_quality (enum)</h3><p>Measured air quality. Value can be found in the published state on the <code>air_quality</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;air_quality&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>excellent</code>, <code>good</code>, <code>moderate</code>, <code>poor</code>, <code>unhealthy</code>, <code>hazardous</code>, <code>out_of_range</code>, <code>unknown</code>.</p><h3 id="led-enable-binary" tabindex="-1"><a class="header-anchor" href="#led-enable-binary" aria-hidden="true">#</a> Led_enable (binary)</h3><p>Enabled LED. Value can be found in the published state on the <code>led_enable</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_enable&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_enable&quot;: NEW_VALUE}</code>. If value equals <code>true</code> led_enable is ON, if <code>false</code> OFF.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary" aria-hidden="true">#</a> Child_lock (binary)</h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;child_lock&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child_lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="replace-filter-binary" tabindex="-1"><a class="header-anchor" href="#replace-filter-binary" aria-hidden="true">#</a> Replace_filter (binary)</h3><p>Filter is older than 6 months and needs replacing. Value can be found in the published state on the <code>replace_filter</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;replace_filter&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> replace_filter is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),l={},r=(0,o(83744).Z)(l,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[d,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[i])),_:1})])]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);