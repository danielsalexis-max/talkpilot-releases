import{r as W,D as $,d as D,b as R,c as H}from"./earcon-BUvW7wm3.js";const v=t=>new Promise(e=>setTimeout(e,t)),_=4200,I=1800,M=3600,E=4500,F=t=>500+t.length*62;class V{constructor(e,s,o={}){this.beats=e,this.surface=s,this.opts=o}clips=new Map;stopped=!1;run=0;timers=[];steerOnStage=!1;preload(){for(const e of this.beats){if(e.kind!=="line"||this.clips.has(e.line.audio))continue;const s=new Audio(e.line.audio);s.preload="auto",this.clips.set(e.line.audio,s)}}async play(){this.stopped=!1;const e=++this.run,s=()=>this.stopped||e!==this.run;for(const o of this.beats){if(s())return;if(o.kind==="pause"){await v(o.ms);continue}if(o.kind==="steer"){if(o.note&&(this.surface.note(o.note),await v(_),s()))return;this.surface.steer(o.label,o.why),this.steerOnStage=!0,this.opts.earcon?.("steer"),o.note&&await v(I);continue}await this.speak(o.line,s)}}stop(){this.stopped=!0;for(const e of this.timers)clearTimeout(e);this.timers=[];for(const e of this.clips.values())e.pause(),e.currentTime=0;this.surface.subtitle(null,""),this.surface.clearSteer(),this.surface.clearCue(),this.surface.clearNote(),this.steerOnStage=!1}async speak(e,s){this.surface.subtitle(e.who,e.text),e.who==="you"&&this.steerOnStage&&(this.later(M,()=>{this.surface.clearSteer(),this.steerOnStage=!1}),this.later(M+1200,()=>this.surface.clearNote()));const o=this.clips.get(e.audio)??new Audio(e.audio);let r=0;if(e.cue){const{text:c,atMs:d,note:P}=e.cue;P?(r=_+I,this.later(d,()=>{o.pause(),this.surface.note(P),this.later(_,()=>{this.surface.cue(c),this.opts.earcon?.("cue"),this.later(E,()=>this.surface.clearCue()),this.later(E+1200,()=>this.surface.clearNote())}),this.later(r,()=>void o.play().catch(()=>{}))})):this.later(d,()=>{this.surface.cue(c),this.opts.earcon?.("cue"),this.later(E,()=>this.surface.clearCue())})}await this.playClip(o,F(e.text)+r),!s()&&(await v(650),!s()&&this.surface.subtitle(null,""))}later(e,s){const o=setTimeout(()=>{this.stopped||s()},e);this.timers.push(o)}playClip(e,s){return new Promise(o=>{let r=!1;const c=()=>{r||(r=!0,e.removeEventListener("ended",c),e.removeEventListener("error",d),o())},d=()=>{setTimeout(c,s)};e.addEventListener("ended",c),e.addEventListener("error",d),e.currentTime=0,e.play().catch(d),setTimeout(c,s*3)})}}const S="https://d8j0ntlcm91z4.cloudfront.net/user_39Sc4IESvT5qnaaFOInFTw3LqPV/",Y={primary:`${S}hf_20260904_184438_20dee674-d4ba-47d3-9f04-e6b95cc46b27.png`},y={name:"Diane Torres",role:"VP of Operations, Meridian Logistics",mode:"Sales"},u=(t,e,s)=>({kind:"line",line:{who:"you",text:t,audio:`${S}${e}`,cue:s}}),f=(t,e)=>({kind:"line",line:{who:"them",text:t,audio:`${S}${e}`}}),T=(t,e,s)=>({kind:"steer",label:t,why:e,note:s}),i=t=>({kind:"pause",ms:t}),x=[u("Thanks for making time today — I know budgets are tight this quarter.","hf_20260904_184435_c0b94ae9-1b9e-426e-96ab-8503782419fa.mp3"),i(900),f("Honestly, the price is higher than what we budgeted this quarter.","hf_20260904_184347_9cc0261f-b490-4ab7-95f7-15ab1c77e8e6.mp3"),i(1200),T("Ask what changed","They had budget. Something moved.",{eyebrow:"TalkPilot · right now",text:"It heard her. Watch the glass: its suggestion is about to land — live, before you’ve said a word."}),i(2e3),u("Fair enough — what changed since the budget got approved?","hf_20260904_184347_d6db8328-b29b-4e72-ae09-2ebf794223be.mp3"),i(900),f("We cut the tooling line mid-year.","hf_20260904_184347_91c28096-4f4d-4209-8eab-52980ec0802b.mp3"),i(1200),T("Name the cost of waiting","A cut has a reason. Tie it to the problem."),i(2e3),u("Got it. What's that costing the team right now, doing it the old way?","hf_20260904_184347_ce65c8bd-77db-4ea6-b0b8-7c79d7a2138b.mp3"),i(900),f("Probably a few hours a week across the team, if I'm honest.","hf_20260904_184347_c7ac21df-e7b9-4b45-a3b7-54663efb42de.mp3"),i(1400),u("If we piloted this with one team, when would you want to see results?","hf_20260904_184347_0c389b9e-78b2-4323-8c7d-78370048811e.mp3",{text:"Slow down",atMs:1400,note:{eyebrow:"Live cue",text:"You’ve started rushing. TalkPilot noticed."}}),i(900),f("End of the quarter, ideally — before the next budget cycle.","hf_20260904_184347_af36aa78-ce82-4392-ade0-007e480ff1a3.mp3"),i(1200),T("Close on a date","They just gave you a deadline."),i(2e3),u("Then let's start the pilot Monday, so you have results well before then.","hf_20260904_184603_bc527f85-375c-4d63-a884-8f25fd3a7c08.mp3"),i(900),f("Okay. Send me the proposal and we'll go through it Thursday.","hf_20260904_184347_50a7d8d2-8c5f-4e61-9851-76c2d7b0cd7a.mp3")];x.filter(t=>t.kind==="steer").length;x.filter(t=>t.kind==="line"&&t.line.cue).length;const j=matchMedia("(prefers-reduced-motion: reduce)").matches,O=t=>new Promise(e=>setTimeout(e,t)),k=W(),n=document.getElementById("stage");n.className="film";n.innerHTML=`
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
    <p class="eyebrow">TalkPilot × <span class="device-name">${$[k]}</span></p>
    <h1>Your next sales call,<br /><em>through the glasses.</em></h1>
    <p class="lede">Ninety seconds. Sound on.</p>
    ${D(k)}
    <button class="cta" type="button">Put on the glasses</button>
    <p class="meta">${y.name} · ${y.role} · Q3 renewal</p>
  </section>

  <section class="overlay outro" hidden>
    <p class="eyebrow">That was TalkPilot</p>
    <h1><em>It coached the whole call.</em><br />Nobody saw it.</h1>
    <p class="lede">Three steers and one cue, each in the corner of your eye, each gone before she'd notice you'd looked.</p>
    <button class="cta" type="button">Watch again</button>
    <a class="link" href="./live.html">Try it live with your own iPhone →</a>
  </section>
`;const a=t=>n.querySelector(t),C=a(".photo"),b=a(".intro"),g=a(".outro"),p=a(".hud-steer"),B=a(".hud-label"),G=a(".hud-why"),l=a(".hud-cue"),L=a(".hud-status"),m=a(".note"),z=a(".note-eyebrow"),Q=a(".note-text"),h=a(".subtitle"),U=a(".sub-who"),J=a(".sub-text");C.addEventListener("error",()=>n.classList.add("no-photo"));C.addEventListener("load",()=>n.classList.add("has-photo"));C.src=Y.primary;const A=H(),K={subtitle(t,e){if(!t){h.classList.remove("show");return}U.textContent=t==="you"?"You":y.name.split(" ")[0]??"",J.textContent=e,h.dataset.who=t,h.hidden=!1,h.classList.remove("show"),h.offsetWidth,h.classList.add("show")},steer(t,e){B.textContent=t,G.textContent=e,p.hidden=!1,p.classList.remove("show"),p.offsetWidth,p.classList.add("show")},clearSteer(){p.classList.remove("show")},cue(t){l.textContent=t,l.hidden=!1,l.classList.remove("show"),l.offsetWidth,l.classList.add("show")},clearCue(){l.classList.remove("show")},note({eyebrow:t,text:e}){z.textContent=t,Q.textContent=e,m.hidden=!1,m.classList.remove("show"),m.offsetWidth,m.classList.add("show")},clearNote(){m.classList.remove("show")}},N=new V(x,K,{earcon:t=>A.play(t)});N.preload();R(n,k,t=>{for(const e of n.querySelectorAll(".device-name"))e.textContent=$[t]});let w=0;async function q(){const t=++w;await A.unlock(),g.hidden=!0,b.classList.add("gone"),n.classList.remove("ended"),n.classList.add("on"),L.textContent="",await O(j?250:1500),t===w&&(b.hidden=!0,L.textContent=`LIVE · ${y.mode}`,await N.play(),t===w&&(L.textContent="Call ended",await O(1700),t===w&&(n.classList.add("ended"),g.hidden=!1)))}function X(){N.stop(),n.classList.remove("on"),b.hidden=!1,b.classList.remove("gone"),g.hidden=!0,requestAnimationFrame(()=>void q())}b.querySelector(".cta").addEventListener("click",()=>void q());g.querySelector(".cta").addEventListener("click",X);
//# sourceMappingURL=main-D8kNkQ-A.js.map
