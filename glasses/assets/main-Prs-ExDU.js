import{c as O}from"./earcon-CSmJ0kyC.js";const C=t=>new Promise(e=>setTimeout(e,t)),A=t=>500+t.length*62;class M{constructor(e,s,a={}){this.beats=e,this.surface=s,this.opts=a}clips=new Map;stopped=!1;timers=[];steerOnStage=!1;preload(){for(const e of this.beats){if(e.kind!=="line"||this.clips.has(e.line.audio))continue;const s=new Audio(e.line.audio);s.preload="auto",this.clips.set(e.line.audio,s)}}async play(){this.stopped=!1;for(const e of this.beats){if(this.stopped)return;if(e.kind==="pause"){await C(e.ms);continue}if(e.kind==="steer"){if(this.surface.steer(e.label,e.why),this.steerOnStage=!0,this.opts.earcon?.("steer"),e.note){const s=e.note;this.later(900,()=>this.surface.note(s))}continue}await this.speak(e.line)}}stop(){this.stopped=!0;for(const e of this.timers)clearTimeout(e);this.timers=[];for(const e of this.clips.values())e.pause(),e.currentTime=0;this.surface.subtitle(null,""),this.surface.clearSteer(),this.surface.clearCue(),this.surface.clearNote(),this.steerOnStage=!1}async speak(e){if(this.surface.subtitle(e.who,e.text),e.who==="you"&&this.steerOnStage&&(this.later(2200,()=>{this.surface.clearSteer(),this.steerOnStage=!1}),this.later(3400,()=>this.surface.clearNote())),e.cue){const{text:s,atMs:a,note:m}=e.cue;this.later(a,()=>{this.surface.cue(s),this.opts.earcon?.("cue"),m&&this.later(600,()=>this.surface.note(m)),this.later(3200,()=>this.surface.clearCue()),this.later(4200,()=>this.surface.clearNote())})}await this.playClip(e.audio,A(e.text)),!this.stopped&&(await C(380),this.surface.subtitle(null,""))}later(e,s){const a=setTimeout(()=>{this.stopped||s()},e);this.timers.push(a)}playClip(e,s){const a=this.clips.get(e)??new Audio(e);return new Promise(m=>{let S=!1;const b=()=>{S||(S=!0,a.removeEventListener("ended",b),a.removeEventListener("error",g),m())},g=()=>{setTimeout(b,s)};a.addEventListener("ended",b),a.addEventListener("error",g),a.currentTime=0,a.play().catch(g),setTimeout(b,s*3)})}}const T="https://d8j0ntlcm91z4.cloudfront.net/user_39Sc4IESvT5qnaaFOInFTw3LqPV/",W={primary:`${T}hf_20260904_184438_20dee674-d4ba-47d3-9f04-e6b95cc46b27.png`},v={name:"Diane Torres",role:"VP of Operations, Meridian Logistics",mode:"Sales"},l=(t,e,s)=>({kind:"line",line:{who:"you",text:t,audio:`${T}${e}`,cue:s}}),h=(t,e)=>({kind:"line",line:{who:"them",text:t,audio:`${T}${e}`}}),_=(t,e,s)=>({kind:"steer",label:t,why:e,note:s}),i=t=>({kind:"pause",ms:t}),k=[l("Thanks for making time today — I know budgets are tight this quarter.","hf_20260904_184435_c0b94ae9-1b9e-426e-96ab-8503782419fa.mp3"),i(500),h("Honestly, the price is higher than what we budgeted this quarter.","hf_20260904_184347_9cc0261f-b490-4ab7-95f7-15ab1c77e8e6.mp3"),i(600),_("Ask what changed","They had budget. Something moved.",{eyebrow:"TalkPilot · right now",text:"It heard her. This is its suggestion — live, before you’ve said a word."}),i(1400),l("Fair enough — what changed since the budget got approved?","hf_20260904_184347_d6db8328-b29b-4e72-ae09-2ebf794223be.mp3"),i(500),h("We cut the tooling line mid-year.","hf_20260904_184347_91c28096-4f4d-4209-8eab-52980ec0802b.mp3"),i(600),_("Name the cost of waiting","A cut has a reason. Tie it to the problem."),i(1400),l("Got it. What's that costing the team right now, doing it the old way?","hf_20260904_184347_ce65c8bd-77db-4ea6-b0b8-7c79d7a2138b.mp3"),i(500),h("Probably a few hours a week across the team, if I'm honest.","hf_20260904_184347_c7ac21df-e7b9-4b45-a3b7-54663efb42de.mp3"),i(900),l("If we piloted this with one team, when would you want to see results?","hf_20260904_184347_0c389b9e-78b2-4323-8c7d-78370048811e.mp3",{text:"Slow down",atMs:1400,note:{eyebrow:"Live cue",text:"You’d started rushing. It noticed."}}),i(500),h("End of the quarter, ideally — before the next budget cycle.","hf_20260904_184347_af36aa78-ce82-4392-ade0-007e480ff1a3.mp3"),i(600),_("Close on a date","They just gave you a deadline."),i(1400),l("Then let's start the pilot Monday, so you have results well before then.","hf_20260904_184603_bc527f85-375c-4d63-a884-8f25fd3a7c08.mp3"),i(500),h("Okay. Send me the proposal and we'll go through it Thursday.","hf_20260904_184347_50a7d8d2-8c5f-4e61-9851-76c2d7b0cd7a.mp3")];k.filter(t=>t.kind==="steer").length;k.filter(t=>t.kind==="line"&&t.line.cue).length;const D=matchMedia("(prefers-reduced-motion: reduce)").matches,I=t=>new Promise(e=>setTimeout(e,t)),n=document.getElementById("stage");n.className="film";n.innerHTML=`
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
    <p class="eyebrow">TalkPilot × Even G2</p>
    <h1>Your next sales call,<br /><em>through the glasses.</em></h1>
    <p class="lede">Seventy seconds. Sound on.</p>
    <button class="cta" type="button">Put on the glasses</button>
    <p class="meta">${v.name} · ${v.role} · Q3 renewal</p>
  </section>

  <section class="overlay outro" hidden>
    <p class="eyebrow">That was TalkPilot</p>
    <h1><em>It coached the whole call.</em><br />Nobody saw it.</h1>
    <p class="lede">Three steers and one cue, each in the corner of your eye, each gone before she'd notice you'd looked.</p>
    <button class="cta" type="button">Watch again</button>
    <a class="link" href="./live.html">Try it live with your own iPhone →</a>
  </section>
`;const o=t=>n.querySelector(t),E=o(".photo"),p=o(".intro"),y=o(".outro"),u=o(".hud-steer"),F=o(".hud-label"),V=o(".hud-why"),c=o(".hud-cue"),L=o(".hud-status"),f=o(".note"),Y=o(".note-eyebrow"),j=o(".note-text"),d=o(".subtitle"),B=o(".sub-who"),G=o(".sub-text");E.addEventListener("error",()=>n.classList.add("no-photo"));E.addEventListener("load",()=>n.classList.add("has-photo"));E.src=W.primary;const $=O(),H={subtitle(t,e){if(!t){d.classList.remove("show");return}B.textContent=t==="you"?"You":v.name.split(" ")[0]??"",G.textContent=e,d.dataset.who=t,d.hidden=!1,d.classList.remove("show"),d.offsetWidth,d.classList.add("show")},steer(t,e){F.textContent=t,V.textContent=e,u.hidden=!1,u.classList.remove("show"),u.offsetWidth,u.classList.add("show")},clearSteer(){u.classList.remove("show")},cue(t){c.textContent=t,c.hidden=!1,c.classList.remove("show"),c.offsetWidth,c.classList.add("show")},clearCue(){c.classList.remove("show")},note({eyebrow:t,text:e}){Y.textContent=t,j.textContent=e,f.hidden=!1,f.classList.remove("show"),f.offsetWidth,f.classList.add("show")},clearNote(){f.classList.remove("show")}},x=new M(k,H,{earcon:t=>$.play(t)});x.preload();let q=0,r=null;function P(){const t=Math.floor((Date.now()-q)/6e4);L.textContent=`LIVE ${t}m · ${v.mode}`}let w=0;async function N(){const t=++w;await $.unlock(),y.hidden=!0,p.classList.add("gone"),n.classList.remove("ended"),n.classList.add("on"),L.textContent="",await I(D?250:1500),t===w&&(p.hidden=!0,q=Date.now(),P(),r=setInterval(P,6e4),await x.play(),t===w&&(r&&clearInterval(r),r=null,L.textContent="Call ended",await I(1700),t===w&&(n.classList.add("ended"),y.hidden=!1)))}function R(){x.stop(),r&&clearInterval(r),r=null,n.classList.remove("on"),p.hidden=!1,p.classList.remove("gone"),y.hidden=!0,requestAnimationFrame(()=>void N())}p.querySelector(".cta").addEventListener("click",()=>void N());y.querySelector(".cta").addEventListener("click",R);
//# sourceMappingURL=main-Prs-ExDU.js.map
