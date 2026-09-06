import{w as A,r as q,D as I,d as D,b as W,c as R}from"./earcon-Bs5Rr8gH.js";const v=t=>new Promise(e=>setTimeout(e,t)),H=3400,V=1800,C=3600,F=4500,j=t=>500+t.length*62;class B{constructor(e,s,a={}){this.beats=e,this.surface=s,this.opts=a}clips=new Map;stopped=!1;run=0;timers=[];steerOnStage=!1;preload(){for(const e of this.beats){if(e.kind!=="line"||this.clips.has(e.line.audio))continue;const s=new Audio(e.line.audio);s.preload="auto",this.clips.set(e.line.audio,s)}}unlock(){this.preload();for(const e of this.clips.values())A(e)}async play(){this.stopped=!1;const e=++this.run,s=()=>this.stopped||e!==this.run;for(const a of this.beats){if(s())return;if(a.kind==="pause"){await v(a.ms);continue}if(a.kind==="steer"){if(a.note&&(this.surface.note(a.note),await v(H),s()))return;this.surface.steer(a.label,a.why),this.steerOnStage=!0,this.opts.earcon?.("steer"),a.note&&await v(V);continue}await this.speak(a.line,s)}}stop(){this.stopped=!0;for(const e of this.timers)clearTimeout(e);this.timers=[];for(const e of this.clips.values())e.pause(),e.currentTime=0;this.surface.subtitle(null,""),this.surface.clearSteer(),this.surface.clearCue(),this.surface.clearNote(),this.steerOnStage=!1}async speak(e,s){this.surface.subtitle(e.who,e.text),e.who==="you"&&this.steerOnStage&&(this.later(C,()=>{this.surface.clearSteer(),this.steerOnStage=!1}),this.later(C+1200,()=>this.surface.clearNote()));const a=this.clips.get(e.audio)??new Audio(e.audio);if(e.cue){const{text:b,atMs:c}=e.cue;this.later(c,()=>{this.surface.cue(b),this.opts.earcon?.("cue"),this.later(F,()=>this.surface.clearCue())})}await this.playClip(a,j(e.text)),!s()&&(await v(650),!s()&&this.surface.subtitle(null,""))}later(e,s){const a=setTimeout(()=>{this.stopped||s()},e);this.timers.push(a)}playClip(e,s){return new Promise(a=>{let b=!1;const c=()=>{b||(b=!0,e.removeEventListener("ended",c),e.removeEventListener("error",T),a())},T=()=>{setTimeout(c,s)};e.addEventListener("ended",c),e.addEventListener("error",T),e.currentTime=0,e.play().catch(T),setTimeout(c,s*3)})}}const x="https://d8j0ntlcm91z4.cloudfront.net/user_39Sc4IESvT5qnaaFOInFTw3LqPV/",G={primary:`${x}hf_20260904_184438_20dee674-d4ba-47d3-9f04-e6b95cc46b27.png`},m={name:"Diane Torres",role:"VP of Operations, Meridian Logistics",mode:"Sales"},l=(t,e,s)=>({kind:"line",line:{who:"you",text:t,audio:`${x}${e}`,cue:s}}),h=(t,e)=>({kind:"line",line:{who:"them",text:t,audio:`${x}${e}`}}),L=(t,e,s)=>({kind:"steer",label:t,why:e,note:s}),i=t=>({kind:"pause",ms:t}),E=[l("Thanks for making time today — I know budgets are tight this quarter.","hf_20260904_184435_c0b94ae9-1b9e-426e-96ab-8503782419fa.mp3"),i(900),h("Honestly, the price is higher than what we budgeted this quarter.","hf_20260904_184347_9cc0261f-b490-4ab7-95f7-15ab1c77e8e6.mp3"),i(1200),L("Ask what changed","They had budget. Something moved.",{eyebrow:"TalkPilot · live",text:"It heard her. This is its suggestion."}),i(2e3),l("Fair enough — what changed since the budget got approved?","hf_20260904_184347_d6db8328-b29b-4e72-ae09-2ebf794223be.mp3"),i(900),h("We cut the tooling line mid-year.","hf_20260904_184347_91c28096-4f4d-4209-8eab-52980ec0802b.mp3"),i(1200),L("Name the cost of waiting","A cut has a reason. Tie it to the problem."),i(2e3),l("Got it. What's that costing the team right now, doing it the old way?","hf_20260904_184347_ce65c8bd-77db-4ea6-b0b8-7c79d7a2138b.mp3"),i(900),h("Probably a few hours a week across the team, if I'm honest.","hf_20260904_184347_c7ac21df-e7b9-4b45-a3b7-54663efb42de.mp3"),i(1400),l("If we piloted this with one team, when would you want to see results?","hf_20260904_184347_0c389b9e-78b2-4323-8c7d-78370048811e.mp3",{text:"Slow down",atMs:1400}),i(900),h("End of the quarter, ideally — before the next budget cycle.","hf_20260904_184347_af36aa78-ce82-4392-ade0-007e480ff1a3.mp3"),i(1200),L("Close on a date","They just gave you a deadline."),i(2e3),l("Then let's start the pilot Monday, so you have results well before then.","hf_20260904_184603_bc527f85-375c-4d63-a884-8f25fd3a7c08.mp3"),i(900),h("Okay. Send me the proposal and we'll go through it Thursday.","hf_20260904_184347_50a7d8d2-8c5f-4e61-9851-76c2d7b0cd7a.mp3")];E.filter(t=>t.kind==="steer").length;E.filter(t=>t.kind==="line"&&t.line.cue).length;const U=matchMedia("(prefers-reduced-motion: reduce)").matches,$=t=>new Promise(e=>setTimeout(e,t)),k=q(),N=new URLSearchParams(location.search).get("still")==="1",n=document.getElementById("stage");n.className="film";n.innerHTML=`
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
    <p class="eyebrow">TalkPilot × <span class="device-name">${I[k]}</span></p>
    <h1>Your next sales call,<br /><em>through the glasses.</em></h1>
    <p class="lede">Ninety seconds. Sound on.</p>
    ${D(k)}
    <button class="cta" type="button">Put on the glasses</button>
    <p class="meta">${m.name} · ${m.role} · Q3 renewal</p>
  </section>

  <section class="overlay outro" hidden>
    <p class="eyebrow">That was TalkPilot</p>
    <h1><em>It coached the whole call.</em><br />Nobody saw it.</h1>
    <p class="lede">Three steers and one cue, each in the corner of your eye, each gone before she'd notice you'd looked.</p>
    <button class="cta" type="button">Watch again</button>
    <a class="link" href="./live.html" hidden>Try it live with your own iPhone →</a>
  </section>
`;const o=t=>n.querySelector(t),S=o(".photo"),d=o(".intro"),g=o(".outro"),u=o(".hud-steer"),Y=o(".hud-label"),z=o(".hud-why"),f=o(".hud-cue"),Q=o(".hud-cue-text"),y=o(".hud-status"),p=o(".note"),J=o(".note-eyebrow"),K=o(".note-text"),r=o(".subtitle"),X=o(".sub-who"),Z=o(".sub-text");S.addEventListener("error",()=>n.classList.add("no-photo"));S.addEventListener("load",()=>n.classList.add("has-photo"));S.src=G.primary;const P=R(),M={subtitle(t,e){if(!t){r.classList.remove("show");return}X.textContent=t==="you"?"You":m.name.split(" ")[0]??"",Z.textContent=e,r.dataset.who=t,r.hidden=!1,r.classList.remove("show"),r.offsetWidth,r.classList.add("show")},steer(t,e){Y.textContent=t,z.textContent=e,u.hidden=!1,u.classList.remove("show"),u.offsetWidth,u.classList.add("show")},clearSteer(){u.classList.remove("show")},cue(t){Q.textContent=t,f.hidden=!1,f.classList.remove("show"),f.offsetWidth,f.classList.add("show")},clearCue(){f.classList.remove("show")},note({eyebrow:t,text:e}){J.textContent=t,K.textContent=e,p.hidden=!1,p.classList.remove("show"),p.offsetWidth,p.classList.add("show")},clearNote(){p.classList.remove("show")}},_=new B(E,M,{earcon:t=>P.play(t)});N||_.preload();W(n,k,t=>{for(const e of n.querySelectorAll(".device-name"))e.textContent=I[t]});let w=0;async function O(){const t=++w;_.unlock(),await P.unlock(),g.hidden=!0,d.classList.add("gone"),n.classList.remove("ended"),n.classList.add("on"),y.textContent="",await $(U?250:1500),t===w&&(d.hidden=!0,y.textContent=`LIVE · ${m.mode}`,await _.play(),t===w&&(y.textContent="Call ended",await $(1700),t===w&&(n.classList.add("ended"),g.hidden=!1)))}function ee(){_.stop(),n.classList.remove("on"),d.hidden=!1,d.classList.remove("gone"),g.hidden=!0,requestAnimationFrame(()=>void O())}d.querySelector(".cta").addEventListener("click",()=>void O());g.querySelector(".cta").addEventListener("click",ee);if(N){d.hidden=!0,n.classList.add("on","still"),y.textContent=`LIVE · ${m.mode}`;const t=E.find(e=>e.kind==="steer");t&&t.kind==="steer"&&M.steer(t.label,t.why)}
//# sourceMappingURL=main-CPwSAaCg.js.map
