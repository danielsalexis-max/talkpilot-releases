import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{a as M,r as R,s as c,S as N,b as U,G as z,C as B}from"./stage-CwkRK0tk.js";import{r as V,D as O,d as A,b as j,c as J}from"./earcon-BtTFJXvc.js";import"./index-BLaI6yU2.js";const t=M(R()),l=new N({live:t.live,paused:t.paused,calibrating:t.calibrating,listening:t.listening,noSession:""}),f=J(),k=V(),r=document.getElementById("stage");r.className="film live";r.innerHTML=`
  <div class="scene" aria-hidden="true">
    <div class="photo-fallback"></div>
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
    </div>
  </div>

  <section class="overlay gate">
    <p class="eyebrow">${t.eyebrow} <span class="device-name">${O[k]}</span></p>
    <h1>${t.gateTitleA}<br /><em>${t.gateTitleB}</em></h1>
    <ol class="steps">
      <li>${t.step1}</li>
      <li>${t.step2}</li>
      <li>${t.step3}</li>
    </ol>
    <p class="hint in-app" id="in-app-hint" hidden>${t.inAppHint}</p>
    <div class="providers" id="providers">
      <button class="provider" type="button" data-provider="google">${t.continueWith} Google</button>
      <button class="provider" type="button" data-provider="apple">${t.continueWith} Apple</button>
      <button class="provider" type="button" data-provider="azure">${t.continueWith} Microsoft</button>
      <button class="link-btn" type="button" id="use-email">${t.useEmail}</button>
    </div>
    <form class="signin" id="signin" hidden>
      <input name="email" type="email" autocomplete="username" placeholder="${t.email}" required />
      <input name="password" type="password" autocomplete="current-password" placeholder="${t.password}" required />
      <button class="cta" type="submit">${t.signIn}</button>
      <button class="link-btn" type="button" id="send-code">${t.sendCode}</button>
      <button class="link-btn" type="button" id="use-providers">${t.useProviders}</button>
    </form>
    <form class="signin" id="code" hidden>
      <p class="hint" id="code-hint"></p>
      <input name="token" inputmode="numeric" pattern="[0-9]{6}" maxlength="6" autocomplete="one-time-code" placeholder="${t.codePlaceholder}" required />
      <button class="cta" type="submit">${t.verify}</button>
      <button class="link-btn" type="button" id="code-back">${t.useProviders}</button>
    </form>
    <p class="error" id="signin-error" hidden></p>
    ${A(k,t.yourGlasses)}
    <a class="link" href="./">${t.watchFilm}</a>
  </section>

  <section class="overlay waiting" hidden>
    <p class="eyebrow" id="who"></p>
    <h1><em>${t.waitingTitleA}</em><br />${t.waitingTitleB}</h1>
    <p class="lede">${t.waitingLede}</p>
    <p class="status" id="link-status">${t.connecting}</p>
    <p class="glasses" id="glasses" hidden>${t.glassesOn}</p>
    ${A(k,t.yourGlasses)}
    <button class="signout" id="signout" type="button">${t.signOut}</button>
  </section>
`;const s=e=>r.querySelector(e),E=s(".gate"),S=s(".waiting"),K=s("#who"),C=s("#link-status"),Q=s("#glasses"),p=s(".hud-steer"),F=s(".hud-label"),_=s(".hud-why"),D=s(".hud-cue"),X=s(".hud-cue-text"),x=s(".hud-status");j(r,k,e=>{for(const n of r.querySelectorAll(".device-name"))n.textContent=O[e]});let m=null,v=null,I=null,L=!1,$=null;function h(e,n){n?(e.hidden=!1,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")):e.classList.remove("show")}function Y(e){const n=I;if(I=e,x.textContent=e.footer,e.kind==="cue"){X.textContent=e.primary,(n?.kind!=="cue"||n.primary!==e.primary)&&(h(D,!0),f.play("cue")),h(p,!1);return}if(h(D,!1),e.kind==="steer"){(n?.kind!=="steer"||n.primary!==e.primary)&&(F.textContent=e.primary,_.textContent=e.secondary,h(p,!0),f.play("steer"));return}h(p,!1),e.kind==="status"&&e.primary&&(F.textContent="",_.textContent=e.primary,p.hidden=!1,p.classList.add("show"))}function Z(){$&&clearTimeout($),$=null,S.hidden=!0,r.classList.add("on")}function ee(){x.textContent=t.callEnded,$=setTimeout(()=>{r.classList.remove("on"),x.textContent="",E.hidden&&(S.hidden=!1)},1600)}function te(){const e=l.frame(),n=l.sessionActive;n&&!L&&Z(),!n&&L&&ee(),L=n,U(I,e)||(Y(e),m?.render(e))}setInterval(te,250);function ne(e,n){C.className=`status ${e==="connected"?"on":e==="error"?"warn":""}`,C.textContent=e==="connected"?"":e==="error"?t.channelError:t.connecting,n&&(C.title=n)}async function P(e){v||(v=new B),await v.open(e,{onState:n=>l.onState(n),onSteer:n=>l.onSteer(n),onCue:n=>l.onCue(n),onCaption:()=>{},onStatus:ne})}async function se(){await v?.close()}function W(e){e||w(b?"email":"providers"),e?(K.textContent=`${t.connectedAs} ${e}`,E.hidden=!0,l.sessionActive||(S.hidden=!1)):(E.hidden=!1,S.hidden=!0,r.classList.remove("on"))}const T=s("#providers"),a=s("#signin"),g=s("#code"),ie=s("#code-hint"),oe=s("#in-app-hint"),u=s("#signin-error");let H="";function q(){const e=new URL(location.href);e.hash="";for(const n of["code","error","error_code","error_description","access_token","refresh_token","token_type","expires_in","type"])e.searchParams.delete(n);return e.toString()}function y(e,n){u.textContent=n?`${e} ${n}`:e,u.hidden=!1}function w(e){T.hidden=e!=="providers",a.hidden=e!=="email",g.hidden=e!=="code",u.hidden=!0,e==="email"&&a.querySelector("input[name=email]")?.focus(),e==="code"&&g.querySelector("input[name=token]")?.focus()}function d(e,n,i){e.disabled=n,e.textContent=i}function G(e){const n=e.message.toLowerCase();return n.includes("invalid login credentials")?t.wrongPassword:n.includes("email not confirmed")?t.emailNotConfirmed:null}T.addEventListener("click",async e=>{const n=e.target.closest(".provider");if(!n)return;await f.unlock();const i=n.dataset.provider;d(n,!0,t.signingIn);const{error:o}=await c.auth.signInWithOAuth({provider:i,options:{redirectTo:q(),...i==="azure"?{scopes:"email openid profile"}:{}}});o&&(d(n,!1,`${t.continueWith} ${i==="azure"?"Microsoft":i==="apple"?"Apple":"Google"}`),y(t.signInFailed,o.message))});s("#use-email").addEventListener("click",()=>w("email"));s("#use-providers").addEventListener("click",()=>w(b?"email":"providers"));s("#code-back").addEventListener("click",()=>w(b?"email":"providers"));a.addEventListener("submit",async e=>{e.preventDefault(),await f.unlock();const n=a.querySelector("button[type=submit]");d(n,!0,t.signingIn),u.hidden=!0;const i=new FormData(a),{error:o}=await c.auth.signInWithPassword({email:String(i.get("email")??"").trim(),password:String(i.get("password")??"")});d(n,!1,t.signIn),o&&y(G(o)??t.signInFailed,G(o)?null:o.message)});s("#send-code").addEventListener("click",async e=>{const n=e.currentTarget,i=String(new FormData(a).get("email")??"").trim();if(!i){a.querySelector("input[name=email]")?.reportValidity();return}await f.unlock(),d(n,!0,t.sendingCode),u.hidden=!0;const{error:o}=await c.auth.signInWithOtp({email:i,options:{shouldCreateUser:!1,emailRedirectTo:q()}});if(d(n,!1,t.sendCode),o){y(t.codeFailed,o.message);return}H=i,ie.textContent=`${t.codeSent} ${i}.`,w("code")});g.addEventListener("submit",async e=>{e.preventDefault();const n=g.querySelector("button[type=submit]");d(n,!0,t.verifying),u.hidden=!0;const i=String(new FormData(g).get("token")??"").trim(),{error:o}=await c.auth.verifyOtp({email:H,token:i,type:"email"});d(n,!1,t.verify),o&&y(t.codeWrong)});{const e=new URLSearchParams(location.search),n=e.get("error_description")??e.get("error");n&&y(t.signInFailed,n.replace(/\+/g," "))}let b=!1;s("#signout").addEventListener("click",()=>void c.auth.signOut());function ae(e){const n=e==="tap"?"requestSuggestion":e==="doubleTap"?"requestReflection":l.isPaused?"resumeSession":"pauseSession";v?.send(n)}async function re(){m=await z.connect(),Q.hidden=!m,m?.onInput(ae),b=!!m,b&&(oe.hidden=!1,T.hidden=!0,a.hidden=!1,a.querySelector("input[name=password]").required=!1,s("#use-providers").hidden=!0);const{data:{session:e}}=await c.auth.getSession();W(e?.user.email??null),e&&await P(e.user.id),/[?&](code|access_token|error)=/.test(location.search+location.hash)&&history.replaceState(null,"",q()),c.auth.onAuthStateChange((n,i)=>{W(i?.user.email??null),i?P(i.user.id):se()})}re();
//# sourceMappingURL=live-CmEy1-tN.js.map
