import{c as q}from"./earcon-QKEuBldU.js";const v=t=>new Promise(e=>setTimeout(e,t)),T=3e3,P=1100,W=t=>500+t.length*62;class D{constructor(e,s,a={}){this.beats=e,this.surface=s,this.opts=a}clips=new Map;stopped=!1;run=0;timers=[];steerOnStage=!1;preload(){for(const e of this.beats){if(e.kind!=="line"||this.clips.has(e.line.audio))continue;const s=new Audio(e.line.audio);s.preload="auto",this.clips.set(e.line.audio,s)}}async play(){this.stopped=!1;const e=++this.run,s=()=>this.stopped||e!==this.run;for(const a of this.beats){if(s())return;if(a.kind==="pause"){await v(a.ms);continue}if(a.kind==="steer"){if(a.note&&(this.surface.note(a.note),await v(T),s()))return;this.surface.steer(a.label,a.why),this.steerOnStage=!0,this.opts.earcon?.("steer"),a.note&&await v(P);continue}await this.speak(a.line,s)}}stop(){this.stopped=!0;for(const e of this.timers)clearTimeout(e);this.timers=[];for(const e of this.clips.values())e.pause(),e.currentTime=0;this.surface.subtitle(null,""),this.surface.clearSteer(),this.surface.clearCue(),this.surface.clearNote(),this.steerOnStage=!1}async speak(e,s){this.surface.subtitle(e.who,e.text),e.who==="you"&&this.steerOnStage&&(this.later(2200,()=>{this.surface.clearSteer(),this.steerOnStage=!1}),this.later(3400,()=>this.surface.clearNote()));const a=this.clips.get(e.audio)??new Audio(e.audio);let l=0;if(e.cue){const{text:r,atMs:d,note:I}=e.cue;I?(l=T+P,this.later(d,()=>{a.pause(),this.surface.note(I),this.later(T,()=>{this.surface.cue(r),this.opts.earcon?.("cue"),this.later(3200,()=>this.surface.clearCue()),this.later(4200,()=>this.surface.clearNote())}),this.later(l,()=>void a.play().catch(()=>{}))})):this.later(d,()=>{this.surface.cue(r),this.opts.earcon?.("cue"),this.later(3200,()=>this.surface.clearCue())})}await this.playClip(a,W(e.text)+l),!s()&&(await v(380),!s()&&this.surface.subtitle(null,""))}later(e,s){const a=setTimeout(()=>{this.stopped||s()},e);this.timers.push(a)}playClip(e,s){return new Promise(a=>{let l=!1;const r=()=>{l||(l=!0,e.removeEventListener("ended",r),e.removeEventListener("error",d),a())},d=()=>{setTimeout(r,s)};e.addEventListener("ended",r),e.addEventListener("error",d),e.currentTime=0,e.play().catch(d),setTimeout(r,s*3)})}}const k="https://d8j0ntlcm91z4.cloudfront.net/user_39Sc4IESvT5qnaaFOInFTw3LqPV/",F={primary:`${k}hf_20260904_184438_20dee674-d4ba-47d3-9f04-e6b95cc46b27.png`},g={name:"Diane Torres",role:"VP of Operations, Meridian Logistics",mode:"Sales"},f=(t,e,s)=>({kind:"line",line:{who:"you",text:t,audio:`${k}${e}`,cue:s}}),p=(t,e)=>({kind:"line",line:{who:"them",text:t,audio:`${k}${e}`}}),L=(t,e,s)=>({kind:"steer",label:t,why:e,note:s}),i=t=>({kind:"pause",ms:t}),x=[f("Thanks for making time today — I know budgets are tight this quarter.","hf_20260904_184435_c0b94ae9-1b9e-426e-96ab-8503782419fa.mp3"),i(500),p("Honestly, the price is higher than what we budgeted this quarter.","hf_20260904_184347_9cc0261f-b490-4ab7-95f7-15ab1c77e8e6.mp3"),i(600),L("Ask what changed","They had budget. Something moved.",{eyebrow:"TalkPilot · right now",text:"It heard her. Watch the glass: its suggestion is about to land — live, before you’ve said a word."}),i(1400),f("Fair enough — what changed since the budget got approved?","hf_20260904_184347_d6db8328-b29b-4e72-ae09-2ebf794223be.mp3"),i(500),p("We cut the tooling line mid-year.","hf_20260904_184347_91c28096-4f4d-4209-8eab-52980ec0802b.mp3"),i(600),L("Name the cost of waiting","A cut has a reason. Tie it to the problem."),i(1400),f("Got it. What's that costing the team right now, doing it the old way?","hf_20260904_184347_ce65c8bd-77db-4ea6-b0b8-7c79d7a2138b.mp3"),i(500),p("Probably a few hours a week across the team, if I'm honest.","hf_20260904_184347_c7ac21df-e7b9-4b45-a3b7-54663efb42de.mp3"),i(900),f("If we piloted this with one team, when would you want to see results?","hf_20260904_184347_0c389b9e-78b2-4323-8c7d-78370048811e.mp3",{text:"Slow down",atMs:1400,note:{eyebrow:"Live cue",text:"You’ve started rushing. TalkPilot noticed."}}),i(500),p("End of the quarter, ideally — before the next budget cycle.","hf_20260904_184347_af36aa78-ce82-4392-ade0-007e480ff1a3.mp3"),i(600),L("Close on a date","They just gave you a deadline."),i(1400),f("Then let's start the pilot Monday, so you have results well before then.","hf_20260904_184603_bc527f85-375c-4d63-a884-8f25fd3a7c08.mp3"),i(500),p("Okay. Send me the proposal and we'll go through it Thursday.","hf_20260904_184347_50a7d8d2-8c5f-4e61-9851-76c2d7b0cd7a.mp3")];x.filter(t=>t.kind==="steer").length;x.filter(t=>t.kind==="line"&&t.line.cue).length;const H=matchMedia("(prefers-reduced-motion: reduce)").matches,N=t=>new Promise(e=>setTimeout(e,t)),n=document.getElementById("stage");n.className="film";n.innerHTML=`
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
    <p class="meta">${g.name} · ${g.role} · Q3 renewal</p>
  </section>

  <section class="overlay outro" hidden>
    <p class="eyebrow">That was TalkPilot</p>
    <h1><em>It coached the whole call.</em><br />Nobody saw it.</h1>
    <p class="lede">Three steers and one cue, each in the corner of your eye, each gone before she'd notice you'd looked.</p>
    <button class="cta" type="button">Watch again</button>
    <a class="link" href="./live.html">Try it live with your own iPhone →</a>
  </section>
`;const o=t=>n.querySelector(t),S=o(".photo"),w=o(".intro"),_=o(".outro"),m=o(".hud-steer"),G=o(".hud-label"),R=o(".hud-why"),h=o(".hud-cue"),E=o(".hud-status"),b=o(".note"),V=o(".note-eyebrow"),Y=o(".note-text"),u=o(".subtitle"),j=o(".sub-who"),B=o(".sub-text");S.addEventListener("error",()=>n.classList.add("no-photo"));S.addEventListener("load",()=>n.classList.add("has-photo"));S.src=F.primary;const M=q(),z={subtitle(t,e){if(!t){u.classList.remove("show");return}j.textContent=t==="you"?"You":g.name.split(" ")[0]??"",B.textContent=e,u.dataset.who=t,u.hidden=!1,u.classList.remove("show"),u.offsetWidth,u.classList.add("show")},steer(t,e){G.textContent=t,R.textContent=e,m.hidden=!1,m.classList.remove("show"),m.offsetWidth,m.classList.add("show")},clearSteer(){m.classList.remove("show")},cue(t){h.textContent=t,h.hidden=!1,h.classList.remove("show"),h.offsetWidth,h.classList.add("show")},clearCue(){h.classList.remove("show")},note({eyebrow:t,text:e}){V.textContent=t,Y.textContent=e,b.hidden=!1,b.classList.remove("show"),b.offsetWidth,b.classList.add("show")},clearNote(){b.classList.remove("show")}},C=new D(x,z,{earcon:t=>M.play(t)});C.preload();let $=0,c=null;function O(){const t=Math.floor((Date.now()-$)/6e4);E.textContent=`LIVE ${t}m · ${g.mode}`}let y=0;async function A(){const t=++y;await M.unlock(),_.hidden=!0,w.classList.add("gone"),n.classList.remove("ended"),n.classList.add("on"),E.textContent="",await N(H?250:1500),t===y&&(w.hidden=!0,$=Date.now(),O(),c=setInterval(O,6e4),await C.play(),t===y&&(c&&clearInterval(c),c=null,E.textContent="Call ended",await N(1700),t===y&&(n.classList.add("ended"),_.hidden=!1)))}function Q(){C.stop(),c&&clearInterval(c),c=null,n.classList.remove("on"),w.hidden=!1,w.classList.remove("gone"),_.hidden=!0,requestAnimationFrame(()=>void A())}w.querySelector(".cta").addEventListener("click",()=>void A());_.querySelector(".cta").addEventListener("click",Q);
//# sourceMappingURL=main-DS34Pr3-.js.map
