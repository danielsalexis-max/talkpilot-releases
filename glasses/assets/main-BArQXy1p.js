import"./modulepreload-polyfill-B5Qt9EMX.js";const C=t=>new Promise(e=>setTimeout(e,t)),$=t=>500+t.length*62;class q{constructor(e,s,a={}){this.beats=e,this.surface=s,this.opts=a}clips=new Map;stopped=!1;timers=[];steerOnStage=!1;preload(){for(const e of this.beats){if(e.kind!=="line"||this.clips.has(e.line.audio))continue;const s=new Audio(e.line.audio);s.preload="auto",this.clips.set(e.line.audio,s)}}async play(){this.stopped=!1;for(const e of this.beats){if(this.stopped)return;if(e.kind==="pause"){await C(e.ms);continue}if(e.kind==="steer"){this.surface.steer(e.label,e.why),this.steerOnStage=!0,this.opts.earcon?.("steer");continue}await this.speak(e.line)}}stop(){this.stopped=!0;for(const e of this.timers)clearTimeout(e);this.timers=[];for(const e of this.clips.values())e.pause(),e.currentTime=0;this.surface.subtitle(null,""),this.surface.clearSteer(),this.surface.clearCue(),this.steerOnStage=!1}async speak(e){if(this.surface.subtitle(e.who,e.text),e.who==="you"&&this.steerOnStage&&this.later(2200,()=>{this.surface.clearSteer(),this.steerOnStage=!1}),e.cue){const{text:s,atMs:a}=e.cue;this.later(a,()=>{this.surface.cue(s),this.opts.earcon?.("cue"),this.later(3200,()=>this.surface.clearCue())})}await this.playClip(e.audio,$(e.text)),!this.stopped&&(await C(380),this.surface.subtitle(null,""))}later(e,s){const a=setTimeout(()=>{this.stopped||s()},e);this.timers.push(a)}playClip(e,s){const a=this.clips.get(e)??new Audio(e);return new Promise(T=>{let d=!1;const i=()=>{d||(d=!0,a.removeEventListener("ended",i),a.removeEventListener("error",l),T())},l=()=>{setTimeout(i,s)};a.addEventListener("ended",i),a.addEventListener("error",l),a.currentTime=0,a.play().catch(l),setTimeout(i,s*3)})}}const k="https://d8j0ntlcm91z4.cloudfront.net/user_39Sc4IESvT5qnaaFOInFTw3LqPV/",M={primary:`${k}hf_20260904_184438_20dee674-d4ba-47d3-9f04-e6b95cc46b27.png`},y={name:"Diane Torres",role:"VP of Operations, Meridian Logistics",mode:"Sales"},p=(t,e,s)=>({kind:"line",line:{who:"you",text:t,audio:`${k}${e}`,cue:s}}),m=(t,e)=>({kind:"line",line:{who:"them",text:t,audio:`${k}${e}`}}),_=(t,e)=>({kind:"steer",label:t,why:e}),o=t=>({kind:"pause",ms:t}),E=[p("Thanks for making time today — I know budgets are tight this quarter.","hf_20260904_184435_c0b94ae9-1b9e-426e-96ab-8503782419fa.mp3"),o(500),m("Honestly, the price is higher than what we budgeted this quarter.","hf_20260904_184347_9cc0261f-b490-4ab7-95f7-15ab1c77e8e6.mp3"),o(600),_("Ask what changed","They had budget. Something moved."),o(1400),p("Fair enough — what changed since the budget got approved?","hf_20260904_184347_d6db8328-b29b-4e72-ae09-2ebf794223be.mp3"),o(500),m("We cut the tooling line mid-year.","hf_20260904_184347_91c28096-4f4d-4209-8eab-52980ec0802b.mp3"),o(600),_("Name the cost of waiting","A cut has a reason. Tie it to the problem."),o(1400),p("Got it. What's that costing the team right now, doing it the old way?","hf_20260904_184347_ce65c8bd-77db-4ea6-b0b8-7c79d7a2138b.mp3"),o(500),m("Probably a few hours a week across the team, if I'm honest.","hf_20260904_184347_c7ac21df-e7b9-4b45-a3b7-54663efb42de.mp3"),o(900),p("If we piloted this with one team, when would you want to see results?","hf_20260904_184347_0c389b9e-78b2-4323-8c7d-78370048811e.mp3",{text:"Slow down",atMs:1400}),o(500),m("End of the quarter, ideally — before the next budget cycle.","hf_20260904_184347_af36aa78-ce82-4392-ade0-007e480ff1a3.mp3"),o(600),_("Close on a date","They just gave you a deadline."),o(1400),p("Then let's start the pilot Monday, so you have results well before then.","hf_20260904_184603_bc527f85-375c-4d63-a884-8f25fd3a7c08.mp3"),o(500),m("Okay. Send me the proposal and we'll go through it Thursday.","hf_20260904_184347_50a7d8d2-8c5f-4e61-9851-76c2d7b0cd7a.mp3")];E.filter(t=>t.kind==="steer").length;E.filter(t=>t.kind==="line"&&t.line.cue).length;const W=matchMedia("(prefers-reduced-motion: reduce)").matches,A=t=>new Promise(e=>setTimeout(e,t)),r=document.getElementById("stage");r.className="film";r.innerHTML=`
  <div class="scene" aria-hidden="true">
    <div class="photo-fallback"></div>
    <img class="photo" alt="" decoding="async" />
    <div class="grade"></div>
    <div class="lens"></div>
    <div class="hud">
      <div class="hud-boot">TalkPilot</div>
      <div class="hud-steer" hidden>
        <div class="hud-label"></div>
        <div class="hud-why"></div>
      </div>
      <div class="hud-cue" hidden></div>
      <div class="hud-status"></div>
    </div>
    <div class="subtitle" hidden>
      <span class="sub-who"></span>
      <span class="sub-text"></span>
    </div>
  </div>

  <section class="overlay intro">
    <p class="eyebrow">TalkPilot × Even G2</p>
    <h1>Your next sales call,<br /><em>through the glasses.</em></h1>
    <p class="lede">Seventy seconds. Sound on.</p>
    <button class="cta" type="button">Put on the glasses</button>
    <p class="meta">${y.name} · ${y.role} · Q3 renewal</p>
  </section>

  <section class="overlay outro" hidden>
    <p class="eyebrow">That was TalkPilot</p>
    <h1><em>It coached the whole call.</em><br />Nobody saw it.</h1>
    <p class="lede">Three steers and one cue, each in the corner of your eye, each gone before she'd notice you'd looked.</p>
    <button class="cta" type="button">Watch again</button>
    <a class="link" href="./console.html">Open the connected prototype →</a>
  </section>
`;const n=t=>r.querySelector(t),S=n(".photo"),v=n(".intro"),g=n(".outro"),b=n(".hud-steer"),V=n(".hud-label"),D=n(".hud-why"),u=n(".hud-cue"),L=n(".hud-status"),f=n(".subtitle"),N=n(".sub-who"),F=n(".sub-text");S.addEventListener("error",()=>r.classList.add("no-photo"));S.addEventListener("load",()=>r.classList.add("has-photo"));S.src=M.primary;let c=null;function R(t){if(!c)return;const e=c.currentTime;(t==="steer"?[880,1174.66]:[659.25]).forEach((a,T)=>{const d=e+T*.11,i=c.createOscillator(),l=c.createGain();i.type="sine",i.frequency.value=a,l.gain.setValueAtTime(1e-4,d),l.gain.exponentialRampToValueAtTime(.06,d+.015),l.gain.exponentialRampToValueAtTime(1e-4,d+.17),i.connect(l).connect(c.destination),i.start(d),i.stop(d+.19)})}const G={subtitle(t,e){if(!t){f.classList.remove("show");return}N.textContent=t==="you"?"You":y.name.split(" ")[0]??"",F.textContent=e,f.dataset.who=t,f.hidden=!1,f.classList.remove("show"),f.offsetWidth,f.classList.add("show")},steer(t,e){V.textContent=t,D.textContent=e,b.hidden=!1,b.classList.remove("show"),b.offsetWidth,b.classList.add("show")},clearSteer(){b.classList.remove("show")},cue(t){u.textContent=t,u.hidden=!1,u.classList.remove("show"),u.offsetWidth,u.classList.add("show")},clearCue(){u.classList.remove("show")}},x=new q(E,G,{earcon:R});x.preload();let O=0,h=null;function I(){const t=Math.floor((Date.now()-O)/6e4);L.textContent=`LIVE ${t}m · ${y.mode}`}let w=0;async function P(){const t=++w;if(!c)try{c=new AudioContext}catch{c=null}await c?.resume().catch(()=>{}),g.hidden=!0,v.classList.add("gone"),r.classList.remove("ended"),r.classList.add("on"),L.textContent="",await A(W?250:1500),t===w&&(v.hidden=!0,O=Date.now(),I(),h=setInterval(I,6e4),await x.play(),t===w&&(h&&clearInterval(h),h=null,L.textContent="Call ended",await A(1700),t===w&&(r.classList.add("ended"),g.hidden=!1)))}function j(){x.stop(),h&&clearInterval(h),h=null,r.classList.remove("on"),v.hidden=!1,v.classList.remove("gone"),g.hidden=!0,requestAnimationFrame(()=>void P())}v.querySelector(".cta").addEventListener("click",()=>void P());g.querySelector(".cta").addEventListener("click",j);
//# sourceMappingURL=main-BArQXy1p.js.map
