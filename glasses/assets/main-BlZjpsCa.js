import{w as R,r as H,D as O,d as V,b as F,c as Y}from"./earcon-DCZefFRn.js";const w=t=>new Promise(e=>setTimeout(e,t)),T=4200,I=1800,M=3600,k=4500,j=t=>500+t.length*62;class B{constructor(e,s,o={}){this.beats=e,this.surface=s,this.opts=o}clips=new Map;stopped=!1;run=0;timers=[];steerOnStage=!1;preload(){for(const e of this.beats){if(e.kind!=="line"||this.clips.has(e.line.audio))continue;const s=new Audio(e.line.audio);s.preload="auto",this.clips.set(e.line.audio,s)}}unlock(){this.preload();for(const e of this.clips.values())R(e)}async play(){this.stopped=!1;const e=++this.run,s=()=>this.stopped||e!==this.run;for(const o of this.beats){if(s())return;if(o.kind==="pause"){await w(o.ms);continue}if(o.kind==="steer"){if(o.note&&(this.surface.note(o.note),await w(T),s()))return;this.surface.steer(o.label,o.why),this.steerOnStage=!0,this.opts.earcon?.("steer"),o.note&&await w(I);continue}await this.speak(o.line,s)}}stop(){this.stopped=!0;for(const e of this.timers)clearTimeout(e);this.timers=[];for(const e of this.clips.values())e.pause(),e.currentTime=0;this.surface.subtitle(null,""),this.surface.clearSteer(),this.surface.clearCue(),this.surface.clearNote(),this.steerOnStage=!1}async speak(e,s){this.surface.subtitle(e.who,e.text),e.who==="you"&&this.steerOnStage&&(this.later(M,()=>{this.surface.clearSteer(),this.steerOnStage=!1}),this.later(M+1200,()=>this.surface.clearNote()));const o=this.clips.get(e.audio)??new Audio(e.audio);let r=0;if(e.cue){const{text:c,atMs:d,note:P}=e.cue;P?(r=T+I,this.later(d,()=>{o.pause(),this.surface.note(P),this.later(T,()=>{this.surface.cue(c),this.opts.earcon?.("cue"),this.later(k,()=>this.surface.clearCue()),this.later(k+1200,()=>this.surface.clearNote())}),this.later(r,()=>void o.play().catch(()=>{}))})):this.later(d,()=>{this.surface.cue(c),this.opts.earcon?.("cue"),this.later(k,()=>this.surface.clearCue())})}await this.playClip(o,j(e.text)+r),!s()&&(await w(650),!s()&&this.surface.subtitle(null,""))}later(e,s){const o=setTimeout(()=>{this.stopped||s()},e);this.timers.push(o)}playClip(e,s){return new Promise(o=>{let r=!1;const c=()=>{r||(r=!0,e.removeEventListener("ended",c),e.removeEventListener("error",d),o())},d=()=>{setTimeout(c,s)};e.addEventListener("ended",c),e.addEventListener("error",d),e.currentTime=0,e.play().catch(d),setTimeout(c,s*3)})}}const C="https://d8j0ntlcm91z4.cloudfront.net/user_39Sc4IESvT5qnaaFOInFTw3LqPV/",G={primary:`${C}hf_20260904_184438_20dee674-d4ba-47d3-9f04-e6b95cc46b27.png`},v={name:"Diane Torres",role:"VP of Operations, Meridian Logistics",mode:"Sales"},f=(t,e,s)=>({kind:"line",line:{who:"you",text:t,audio:`${C}${e}`,cue:s}}),p=(t,e)=>({kind:"line",line:{who:"them",text:t,audio:`${C}${e}`}}),S=(t,e,s)=>({kind:"steer",label:t,why:e,note:s}),i=t=>({kind:"pause",ms:t}),L=[f("Thanks for making time today — I know budgets are tight this quarter.","hf_20260904_184435_c0b94ae9-1b9e-426e-96ab-8503782419fa.mp3"),i(900),p("Honestly, the price is higher than what we budgeted this quarter.","hf_20260904_184347_9cc0261f-b490-4ab7-95f7-15ab1c77e8e6.mp3"),i(1200),S("Ask what changed","They had budget. Something moved.",{eyebrow:"TalkPilot · right now",text:"It heard her. Watch the glass: its suggestion is about to land — live, before you’ve said a word."}),i(2e3),f("Fair enough — what changed since the budget got approved?","hf_20260904_184347_d6db8328-b29b-4e72-ae09-2ebf794223be.mp3"),i(900),p("We cut the tooling line mid-year.","hf_20260904_184347_91c28096-4f4d-4209-8eab-52980ec0802b.mp3"),i(1200),S("Name the cost of waiting","A cut has a reason. Tie it to the problem."),i(2e3),f("Got it. What's that costing the team right now, doing it the old way?","hf_20260904_184347_ce65c8bd-77db-4ea6-b0b8-7c79d7a2138b.mp3"),i(900),p("Probably a few hours a week across the team, if I'm honest.","hf_20260904_184347_c7ac21df-e7b9-4b45-a3b7-54663efb42de.mp3"),i(1400),f("If we piloted this with one team, when would you want to see results?","hf_20260904_184347_0c389b9e-78b2-4323-8c7d-78370048811e.mp3",{text:"Slow down",atMs:1400,note:{eyebrow:"Live cue",text:"You’ve started rushing. TalkPilot noticed."}}),i(900),p("End of the quarter, ideally — before the next budget cycle.","hf_20260904_184347_af36aa78-ce82-4392-ade0-007e480ff1a3.mp3"),i(1200),S("Close on a date","They just gave you a deadline."),i(2e3),f("Then let's start the pilot Monday, so you have results well before then.","hf_20260904_184603_bc527f85-375c-4d63-a884-8f25fd3a7c08.mp3"),i(900),p("Okay. Send me the proposal and we'll go through it Thursday.","hf_20260904_184347_50a7d8d2-8c5f-4e61-9851-76c2d7b0cd7a.mp3")];L.filter(t=>t.kind==="steer").length;L.filter(t=>t.kind==="line"&&t.line.cue).length;const U=matchMedia("(prefers-reduced-motion: reduce)").matches,$=t=>new Promise(e=>setTimeout(e,t)),x=H(),A=new URLSearchParams(location.search).get("still")==="1",n=document.getElementById("stage");n.className="film";n.innerHTML=`
  <div class="scene" aria-hidden="true">
    <div class="photo-fallback"></div>
    <img class="photo" alt="" decoding="async" />
    <div class="grade"></div>
    <div class="lens"></div>
    <div class="frame"></div>
    <div class="hud">
      <div class="hud-boot">TalkPilot</div>
      <div class="hud-steer" hidden>
        <div class="hud-label"></div>
        <div class="hud-why"></div>
      </div>
      <div class="hud-cue" hidden></div>
      <div class="hud-status"></div>
    </div>
    <div class="note" hidden>
      <span class="note-eyebrow"></span>
      <span class="note-text"></span>
    </div>
    <div class="subtitle" hidden>
      <span class="sub-who"></span>
      <span class="sub-text"></span>
    </div>
  </div>

  <section class="overlay intro">
    <p class="eyebrow">TalkPilot × <span class="device-name">${O[x]}</span></p>
    <h1>Your next sales call,<br /><em>through the glasses.</em></h1>
    <p class="lede">Ninety seconds. Sound on.</p>
    ${V(x)}
    <button class="cta" type="button">Put on the glasses</button>
    <p class="meta">${v.name} · ${v.role} · Q3 renewal</p>
  </section>

  <section class="overlay outro" hidden>
    <p class="eyebrow">That was TalkPilot</p>
    <h1><em>It coached the whole call.</em><br />Nobody saw it.</h1>
    <p class="lede">Three steers and one cue, each in the corner of your eye, each gone before she'd notice you'd looked.</p>
    <button class="cta" type="button">Watch again</button>
    <a class="link" href="./live.html" hidden>Try it live with your own iPhone →</a>
  </section>
`;const a=t=>n.querySelector(t),N=a(".photo"),u=a(".intro"),_=a(".outro"),m=a(".hud-steer"),z=a(".hud-label"),Q=a(".hud-why"),l=a(".hud-cue"),g=a(".hud-status"),b=a(".note"),J=a(".note-eyebrow"),K=a(".note-text"),h=a(".subtitle"),X=a(".sub-who"),Z=a(".sub-text");N.addEventListener("error",()=>n.classList.add("no-photo"));N.addEventListener("load",()=>n.classList.add("has-photo"));N.src=G.primary;const q=Y(),W={subtitle(t,e){if(!t){h.classList.remove("show");return}X.textContent=t==="you"?"You":v.name.split(" ")[0]??"",Z.textContent=e,h.dataset.who=t,h.hidden=!1,h.classList.remove("show"),h.offsetWidth,h.classList.add("show")},steer(t,e){z.textContent=t,Q.textContent=e,m.hidden=!1,m.classList.remove("show"),m.offsetWidth,m.classList.add("show")},clearSteer(){m.classList.remove("show")},cue(t){l.textContent=t,l.hidden=!1,l.classList.remove("show"),l.offsetWidth,l.classList.add("show")},clearCue(){l.classList.remove("show")},note({eyebrow:t,text:e}){J.textContent=t,K.textContent=e,b.hidden=!1,b.classList.remove("show"),b.offsetWidth,b.classList.add("show")},clearNote(){b.classList.remove("show")}},E=new B(L,W,{earcon:t=>q.play(t)});A||E.preload();F(n,x,t=>{for(const e of n.querySelectorAll(".device-name"))e.textContent=O[t]});let y=0;async function D(){const t=++y;E.unlock(),await q.unlock(),_.hidden=!0,u.classList.add("gone"),n.classList.remove("ended"),n.classList.add("on"),g.textContent="",await $(U?250:1500),t===y&&(u.hidden=!0,g.textContent=`LIVE · ${v.mode}`,await E.play(),t===y&&(g.textContent="Call ended",await $(1700),t===y&&(n.classList.add("ended"),_.hidden=!1)))}function ee(){E.stop(),n.classList.remove("on"),u.hidden=!1,u.classList.remove("gone"),_.hidden=!0,requestAnimationFrame(()=>void D())}u.querySelector(".cta").addEventListener("click",()=>void D());_.querySelector(".cta").addEventListener("click",ee);if(A){u.hidden=!0,n.classList.add("on","still"),g.textContent=`LIVE · ${v.mode}`;const t=L.find(e=>e.kind==="steer");t&&t.kind==="steer"&&W.steer(t.label,t.why)}
//# sourceMappingURL=main-BlZjpsCa.js.map
