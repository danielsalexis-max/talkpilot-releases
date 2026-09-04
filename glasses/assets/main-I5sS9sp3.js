import{c as O}from"./earcon-5QYAo-VN.js";const S=t=>new Promise(e=>setTimeout(e,t)),A=t=>500+t.length*62;class M{constructor(e,s,a={}){this.beats=e,this.surface=s,this.opts=a}clips=new Map;stopped=!1;timers=[];steerOnStage=!1;preload(){for(const e of this.beats){if(e.kind!=="line"||this.clips.has(e.line.audio))continue;const s=new Audio(e.line.audio);s.preload="auto",this.clips.set(e.line.audio,s)}}async play(){this.stopped=!1;for(const e of this.beats){if(this.stopped)return;if(e.kind==="pause"){await S(e.ms);continue}if(e.kind==="steer"){this.surface.steer(e.label,e.why),this.steerOnStage=!0,this.opts.earcon?.("steer");continue}await this.speak(e.line)}}stop(){this.stopped=!0;for(const e of this.timers)clearTimeout(e);this.timers=[];for(const e of this.clips.values())e.pause(),e.currentTime=0;this.surface.subtitle(null,""),this.surface.clearSteer(),this.surface.clearCue(),this.steerOnStage=!1}async speak(e){if(this.surface.subtitle(e.who,e.text),e.who==="you"&&this.steerOnStage&&this.later(2200,()=>{this.surface.clearSteer(),this.steerOnStage=!1}),e.cue){const{text:s,atMs:a}=e.cue;this.later(a,()=>{this.surface.cue(s),this.opts.earcon?.("cue"),this.later(3200,()=>this.surface.clearCue())})}await this.playClip(e.audio,A(e.text)),!this.stopped&&(await S(380),this.surface.subtitle(null,""))}later(e,s){const a=setTimeout(()=>{this.stopped||s()},e);this.timers.push(a)}playClip(e,s){const a=this.clips.get(e)??new Audio(e);return new Promise(q=>{let E=!1;const p=()=>{E||(E=!0,a.removeEventListener("ended",p),a.removeEventListener("error",w),q())},w=()=>{setTimeout(p,s)};a.addEventListener("ended",p),a.addEventListener("error",w),a.currentTime=0,a.play().catch(w),setTimeout(p,s*3)})}}const _="https://d8j0ntlcm91z4.cloudfront.net/user_39Sc4IESvT5qnaaFOInFTw3LqPV/",W={primary:`${_}hf_20260904_184438_20dee674-d4ba-47d3-9f04-e6b95cc46b27.png`},b={name:"Diane Torres",role:"VP of Operations, Meridian Logistics",mode:"Sales"},l=(t,e,s)=>({kind:"line",line:{who:"you",text:t,audio:`${_}${e}`,cue:s}}),h=(t,e)=>({kind:"line",line:{who:"them",text:t,audio:`${_}${e}`}}),y=(t,e)=>({kind:"steer",label:t,why:e}),o=t=>({kind:"pause",ms:t}),L=[l("Thanks for making time today — I know budgets are tight this quarter.","hf_20260904_184435_c0b94ae9-1b9e-426e-96ab-8503782419fa.mp3"),o(500),h("Honestly, the price is higher than what we budgeted this quarter.","hf_20260904_184347_9cc0261f-b490-4ab7-95f7-15ab1c77e8e6.mp3"),o(600),y("Ask what changed","They had budget. Something moved."),o(1400),l("Fair enough — what changed since the budget got approved?","hf_20260904_184347_d6db8328-b29b-4e72-ae09-2ebf794223be.mp3"),o(500),h("We cut the tooling line mid-year.","hf_20260904_184347_91c28096-4f4d-4209-8eab-52980ec0802b.mp3"),o(600),y("Name the cost of waiting","A cut has a reason. Tie it to the problem."),o(1400),l("Got it. What's that costing the team right now, doing it the old way?","hf_20260904_184347_ce65c8bd-77db-4ea6-b0b8-7c79d7a2138b.mp3"),o(500),h("Probably a few hours a week across the team, if I'm honest.","hf_20260904_184347_c7ac21df-e7b9-4b45-a3b7-54663efb42de.mp3"),o(900),l("If we piloted this with one team, when would you want to see results?","hf_20260904_184347_0c389b9e-78b2-4323-8c7d-78370048811e.mp3",{text:"Slow down",atMs:1400}),o(500),h("End of the quarter, ideally — before the next budget cycle.","hf_20260904_184347_af36aa78-ce82-4392-ade0-007e480ff1a3.mp3"),o(600),y("Close on a date","They just gave you a deadline."),o(1400),l("Then let's start the pilot Monday, so you have results well before then.","hf_20260904_184603_bc527f85-375c-4d63-a884-8f25fd3a7c08.mp3"),o(500),h("Okay. Send me the proposal and we'll go through it Thursday.","hf_20260904_184347_50a7d8d2-8c5f-4e61-9851-76c2d7b0cd7a.mp3")];L.filter(t=>t.kind==="steer").length;L.filter(t=>t.kind==="line"&&t.line.cue).length;const D=matchMedia("(prefers-reduced-motion: reduce)").matches,x=t=>new Promise(e=>setTimeout(e,t)),n=document.getElementById("stage");n.className="film";n.innerHTML=`
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
    <p class="meta">${b.name} · ${b.role} · Q3 renewal</p>
  </section>

  <section class="overlay outro" hidden>
    <p class="eyebrow">That was TalkPilot</p>
    <h1><em>It coached the whole call.</em><br />Nobody saw it.</h1>
    <p class="lede">Three steers and one cue, each in the corner of your eye, each gone before she'd notice you'd looked.</p>
    <button class="cta" type="button">Watch again</button>
    <a class="link" href="./live.html">Try it live with your own iPhone →</a>
  </section>
`;const i=t=>n.querySelector(t),T=i(".photo"),f=i(".intro"),v=i(".outro"),u=i(".hud-steer"),N=i(".hud-label"),F=i(".hud-why"),c=i(".hud-cue"),g=i(".hud-status"),d=i(".subtitle"),V=i(".sub-who"),j=i(".sub-text");T.addEventListener("error",()=>n.classList.add("no-photo"));T.addEventListener("load",()=>n.classList.add("has-photo"));T.src=W.primary;const I=O(),B={subtitle(t,e){if(!t){d.classList.remove("show");return}V.textContent=t==="you"?"You":b.name.split(" ")[0]??"",j.textContent=e,d.dataset.who=t,d.hidden=!1,d.classList.remove("show"),d.offsetWidth,d.classList.add("show")},steer(t,e){N.textContent=t,F.textContent=e,u.hidden=!1,u.classList.remove("show"),u.offsetWidth,u.classList.add("show")},clearSteer(){u.classList.remove("show")},cue(t){c.textContent=t,c.hidden=!1,c.classList.remove("show"),c.offsetWidth,c.classList.add("show")},clearCue(){c.classList.remove("show")}},k=new M(L,B,{earcon:t=>I.play(t)});k.preload();let P=0,r=null;function C(){const t=Math.floor((Date.now()-P)/6e4);g.textContent=`LIVE ${t}m · ${b.mode}`}let m=0;async function $(){const t=++m;await I.unlock(),v.hidden=!0,f.classList.add("gone"),n.classList.remove("ended"),n.classList.add("on"),g.textContent="",await x(D?250:1500),t===m&&(f.hidden=!0,P=Date.now(),C(),r=setInterval(C,6e4),await k.play(),t===m&&(r&&clearInterval(r),r=null,g.textContent="Call ended",await x(1700),t===m&&(n.classList.add("ended"),v.hidden=!1)))}function G(){k.stop(),r&&clearInterval(r),r=null,n.classList.remove("on"),f.hidden=!1,f.classList.remove("gone"),v.hidden=!0,requestAnimationFrame(()=>void $())}f.querySelector(".cta").addEventListener("click",()=>void $());v.querySelector(".cta").addEventListener("click",G);
//# sourceMappingURL=main-I5sS9sp3.js.map
