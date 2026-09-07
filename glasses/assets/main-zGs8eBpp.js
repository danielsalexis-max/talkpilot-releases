import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{w as q,r as D,D as I,d as R,b as H,c as V}from"./earcon-BtTFJXvc.js";const y=t=>new Promise(e=>setTimeout(e,t)),F=3400,B=1800,P=3600,j=4500,G=t=>500+t.length*62;class U{constructor(e,s,a={}){this.beats=e,this.surface=s,this.opts=a}clips=new Map;stopped=!1;run=0;timers=[];steerOnStage=!1;preload(){for(const e of this.beats){if(e.kind!=="line"||this.clips.has(e.line.audio))continue;const s=new Audio(e.line.audio);s.preload="auto",this.clips.set(e.line.audio,s)}}unlock(){this.preload();for(const e of this.clips.values())q(e)}async play(){this.stopped=!1;const e=++this.run,s=()=>this.stopped||e!==this.run;for(const a of this.beats){if(s())return;if(a.kind==="pause"){await y(a.ms);continue}if(a.kind==="steer"){if(a.note&&(this.surface.note(a.note),await y(F),s()))return;this.surface.steer(a.label,a.why),this.steerOnStage=!0,this.opts.earcon?.("steer"),a.note&&await y(B);continue}await this.speak(a.line,s)}}stop(){this.stopped=!0;for(const e of this.timers)clearTimeout(e);this.timers=[];for(const e of this.clips.values())e.pause(),e.currentTime=0;this.surface.subtitle(null,""),this.surface.clearSteer(),this.surface.clearCue(),this.surface.clearNote(),this.steerOnStage=!1}async speak(e,s){this.surface.subtitle(e.who,e.text),e.who==="you"&&this.steerOnStage&&(this.later(P,()=>{this.surface.clearSteer(),this.steerOnStage=!1}),this.later(P+1200,()=>this.surface.clearNote()));const a=this.clips.get(e.audio)??new Audio(e.audio);if(e.cue){const{text:g,atMs:d}=e.cue;this.later(d,()=>{this.surface.cue(g),this.opts.earcon?.("cue"),this.later(j,()=>this.surface.clearCue())})}await this.playClip(a,G(e.text)),!s()&&(await y(650),!s()&&this.surface.subtitle(null,""))}later(e,s){const a=setTimeout(()=>{this.stopped||s()},e);this.timers.push(a)}playClip(e,s){return new Promise(a=>{let g=!1;const d=()=>{g||(g=!0,e.removeEventListener("ended",d),e.removeEventListener("error",x),a())},x=()=>{setTimeout(d,s)};e.addEventListener("ended",d),e.addEventListener("error",x),e.currentTime=0,e.play().catch(x),setTimeout(d,s*3)})}}const $="https://d8j0ntlcm91z4.cloudfront.net/user_39Sc4IESvT5qnaaFOInFTw3LqPV/",Y={primary:`${$}hf_20260904_184438_20dee674-d4ba-47d3-9f04-e6b95cc46b27.png`},l={name:"Diane Torres",role:"VP of Operations, Meridian Logistics",mode:"Sales"},f=(t,e,s)=>({kind:"line",line:{who:"you",text:t,audio:`${$}${e}`,cue:s}}),p=(t,e)=>({kind:"line",line:{who:"them",text:t,audio:`${$}${e}`}}),S=(t,e,s)=>({kind:"steer",label:t,why:e,note:s}),i=t=>({kind:"pause",ms:t}),k=[f("Thanks for making time today — I know budgets are tight this quarter.","hf_20260904_184435_c0b94ae9-1b9e-426e-96ab-8503782419fa.mp3"),i(900),p("Honestly, the price is higher than what we budgeted this quarter.","hf_20260904_184347_9cc0261f-b490-4ab7-95f7-15ab1c77e8e6.mp3"),i(1200),S("Ask what changed","They had budget. Something moved.",{eyebrow:"Right now",text:"TalkPilot heard her. This is its suggestion."}),i(2e3),f("Fair enough — what changed since the budget got approved?","hf_20260904_184347_d6db8328-b29b-4e72-ae09-2ebf794223be.mp3"),i(900),p("We cut the tooling line mid-year.","hf_20260904_184347_91c28096-4f4d-4209-8eab-52980ec0802b.mp3"),i(1200),S("Name the cost of waiting","A cut has a reason. Tie it to the problem."),i(2e3),f("Got it. What's that costing the team right now, doing it the old way?","hf_20260904_184347_ce65c8bd-77db-4ea6-b0b8-7c79d7a2138b.mp3"),i(900),p("Probably a few hours a week across the team, if I'm honest.","hf_20260904_184347_c7ac21df-e7b9-4b45-a3b7-54663efb42de.mp3"),i(1400),f("If we piloted this with one team, when would you want to see results?","hf_20260904_184347_0c389b9e-78b2-4323-8c7d-78370048811e.mp3",{text:"Slow down",atMs:1400}),i(900),p("End of the quarter, ideally — before the next budget cycle.","hf_20260904_184347_af36aa78-ce82-4392-ade0-007e480ff1a3.mp3"),i(1200),S("Close on a date","They just gave you a deadline."),i(2e3),f("Then let's start the pilot Monday, so you have results well before then.","hf_20260904_184603_bc527f85-375c-4d63-a884-8f25fd3a7c08.mp3"),i(900),p("Okay. Send me the proposal and we'll go through it Thursday.","hf_20260904_184347_50a7d8d2-8c5f-4e61-9851-76c2d7b0cd7a.mp3")];k.filter(t=>t.kind==="steer").length;k.filter(t=>t.kind==="line"&&t.line.cue).length;const _=matchMedia("(prefers-reduced-motion: reduce)").matches,m=t=>new Promise(e=>setTimeout(e,t)),C=D(),M=new URLSearchParams(location.search).get("still")==="1",n=document.getElementById("stage");n.className="film";n.innerHTML=`
  <div class="scene" aria-hidden="true">
    <div class="photo-fallback"></div>
    <img class="photo" alt="" decoding="async" />
    <div class="grade"></div>
    <div class="lens"></div>
    <div class="frame"></div>
    <div class="hud">
      <div class="hud-boot">TalkPilot</div>
      <div class="hud-steer" hidden>
        <img class="hud-brand" src="/talkpilot-releases/glasses/brand/talkpilot.png" alt="" />
        <div class="hud-label"></div>
        <div class="hud-why"></div>
      </div>
      <div class="hud-cue" hidden><img class="hud-brand" src="/talkpilot-releases/glasses/brand/talkpilot.png" alt="" /><span class="hud-cue-text"></span></div>
      <div class="hud-status"></div>
      <div class="note" hidden>
        <span class="note-eyebrow"></span>
        <span class="note-text"></span>
      </div>
    </div>
    <div class="subtitle" hidden>
      <span class="sub-who"></span>
      <span class="sub-text"></span>
    </div>
  </div>

  <section class="overlay intro">
    <p class="eyebrow">TalkPilot × <span class="device-name">${I[C]}</span></p>
    <h1>Your next conversation,<br /><em>through the glasses.</em></h1>
    <p class="lede">Ninety seconds. Sound on.</p>
    ${R(C)}
    <button class="cta" type="button">Put on the glasses</button>
    <p class="meta">${l.name} · ${l.role} · Q3 renewal</p>
  </section>

  <section class="overlay brief" hidden>
    <p class="eyebrow">Before you watch</p>
    <ul class="brief-lines">
      <li>TalkPilot listens to the conversation you are already having.</li>
      <li>When the other person finishes a thought, one line appears on your glasses.</li>
      <li>They see nothing. Nothing is said out loud.</li>
    </ul>
    <p class="meta">What follows is one call, from your point of view.<br />${l.name} · ${l.role}</p>
  </section>

  <section class="overlay outro" hidden>
    <p class="eyebrow">That was TalkPilot</p>
    <h1><em>It coached the whole conversation.</em><br />Nobody saw it.</h1>
    <p class="lede">Three steers and one cue, each in the corner of your eye, each gone before she'd notice you'd looked.</p>
    <button class="cta" type="button">Watch again</button>
    <a class="link" href="./live.html" hidden>Try it live with your own iPhone →</a>
  </section>
`;const o=t=>n.querySelector(t),N=o(".photo"),u=o(".intro"),r=o(".brief"),T=o(".outro"),b=o(".hud-steer"),z=o(".hud-label"),Q=o(".hud-why"),w=o(".hud-cue"),J=o(".hud-cue-text"),L=o(".hud-status"),v=o(".note"),K=o(".note-eyebrow"),X=o(".note-text"),h=o(".subtitle"),Z=o(".sub-who"),ee=o(".sub-text");N.addEventListener("error",()=>n.classList.add("no-photo"));N.addEventListener("load",()=>n.classList.add("has-photo"));N.src=Y.primary;const O=V(),A={subtitle(t,e){if(!t){h.classList.remove("show");return}Z.textContent=t==="you"?"You":l.name.split(" ")[0]??"",ee.textContent=e,h.dataset.who=t,h.hidden=!1,h.classList.remove("show"),h.offsetWidth,h.classList.add("show")},steer(t,e){z.textContent=t,Q.textContent=e,b.hidden=!1,b.classList.remove("show"),b.offsetWidth,b.classList.add("show")},clearSteer(){b.classList.remove("show")},cue(t){J.textContent=t,w.hidden=!1,w.classList.remove("show"),w.offsetWidth,w.classList.add("show")},clearCue(){w.classList.remove("show")},note({eyebrow:t,text:e}){K.textContent=t,X.textContent=e,v.hidden=!1,v.classList.remove("show"),v.offsetWidth,v.classList.add("show")},clearNote(){v.classList.remove("show")}},E=new U(k,A,{earcon:t=>O.play(t)});M||E.preload();H(n,C,t=>{for(const e of n.querySelectorAll(".device-name"))e.textContent=I[t]});let c=0;async function W(){const t=++c;E.unlock(),await O.unlock(),T.hidden=!0,u.classList.add("gone"),n.classList.remove("ended"),n.classList.add("on"),L.textContent="",await m(_?250:1500),t===c&&(u.hidden=!0,r.hidden=!1,await m(_?400:800),t===c&&(r.classList.add("reading"),await m(_?600:7200),t===c&&(r.classList.add("gone"),await m(_?100:700),t===c&&(r.hidden=!0,r.classList.remove("reading","gone"),L.textContent=`LIVE · ${l.mode}`,await E.play(),t===c&&(L.textContent="Call ended",await m(1700),t===c&&(n.classList.add("ended"),T.hidden=!1))))))}function te(){E.stop(),n.classList.remove("on"),u.hidden=!1,u.classList.remove("gone"),r.hidden=!0,r.classList.remove("reading","gone"),T.hidden=!0,requestAnimationFrame(()=>void W())}u.querySelector(".cta").addEventListener("click",()=>void W());T.querySelector(".cta").addEventListener("click",te);if(M){u.hidden=!0,r.hidden=!0,n.classList.add("on","still"),L.textContent=`LIVE · ${l.mode}`;const t=k.find(e=>e.kind==="steer");t&&t.kind==="steer"&&A.steer(t.label,t.why)}
//# sourceMappingURL=main-zGs8eBpp.js.map
