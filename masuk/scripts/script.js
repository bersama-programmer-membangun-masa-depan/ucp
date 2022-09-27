const container = document.querySelector(".container");
(function() {
    const n = ()=>{
        const a = Bahasa[bahasa].landing
          , e = document.createElement("main");
        e.classList.add("Landing"),
        e.innerHTML = `\n            <h1>Blogandre</h1>\n            <button data-button="email-cancel" class="kembali"><i class="fa-solid fa-chevron-left"></i></button>\n            <label for="email_login_input"><h2>${a.email}</h2></label>\n            <input data-input="email-login" type="email" name="email_login_input" id="email_login_input" placeholder="${a.emailPlaceholder}"/>\n        `;
        const o = e.querySelector('[data-input="email-login"]')
          , t = document.createElement("button");
        t.classList.add("kecil"),
        t.innerHTML = '<i class="fa-duotone fa-circle-check"></i> Submit',
        t.onclick = (()=>s(o.value));
        const l = document.createElement("button");
        l.classList.add("kecil"),
        l.innerHTML = a.check;
        const c = e.querySelector('[data-button="email-cancel"]');
        c.onclick = (()=>{
            e.remove(),
            i()
        }
        ),
        e.appendChild(t),
        container.innerHTML = "",
        container.appendChild(e),
        o.focus();
        const s = i=>{
            t.remove(),
            e.appendChild(l);
            const o = {
                url: `${window.location.origin}/masuk/`,
                handleCodeInApp: !0
            };
            firebase.auth().sendSignInLinkToEmail(i, o).then(()=>{
                window.localStorage.setItem("BlogandreEmailSignIn", i),
                Notipin.Alert({
                    msg: a.successLine1,
                    type: "blue"
                }),
                e.innerHTML = `\n                    <h1>Blogandre</h1>\n                    <i><b>${a.successLine1}</b></i>\n                    <i><b>${a.successLine2}</b></i>\n                `
            }
            ).catch(i=>{
                Notipin.Alert({
                    msg: i,
                    type: "blue"
                }),
                n()
            }
            )
        }
    }
      , i = ()=>{
        const a = Bahasa[bahasa].landing
          , e = document.createElement("main");
        e.classList.add("Landing"),
        e.innerHTML = `\n            <h1 class="judul">Blogandre</h1>\n            <select name="bahasa" data-option="bahasa">\n                <option value="">Language</option>\n                <option value="indonesia">Bahasa Indonesia</option>\n                <option value="english">English</option>\n            </select>\n            <p class="deskripsi">${a.desc}</p>\n            <button class="google" data-button="login-google"><i class="fa-brands fa-google"></i> ${a.google}</button>\n                        <button class="email" data-button="login-email"><i class="fa-regular fa-envelope"></i> ${a.email}</button>\n        `,
        container.innerHTML = "",
        container.appendChild(e);
        const o = e.querySelector('[data-option="bahasa"]');
        o.onchange = (()=>{
            "indonesia" != o.value && "english" != o.value || (getLang.ganti(o.value),
            i())
        }
        );
        const t = e.querySelector("[data-button='login-google']")

          , c = e.querySelector("[data-button='login-email']");
        t.onclick = (()=>{
            t.innerHTML = '<i class="fa-brands fa-google"></i> Loading',
            c.style.visibility = "hidden",
            l.style.visibility = "hidden",
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider)
        }
        ),
        c.onclick = (()=>n())
    }
    ;
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
        const n = Bahasa[bahasa].landing;
        let i = window.localStorage.getItem("BlogandreEmailSignIn");
        i || Notipin.Prompt({
            msg: n.emailConfirm,
            onYes: i=>{
                firebase.auth().signInWithEmailLink(i, window.location.href).then(()=>{
                    window.location.href = `${window.location.origin}/meja/`
                }
                ).catch(i=>{
                    Notipin.Confirm({
                        msg: i,
                        onNo: ()=>window.location.reload(),
                        onYes: ()=>window.location.href = window.location.origin,
                        yes: n.cancel,
                        no: n.tryAgain
                    })
                }
                )
            }
            ,
            type: "info"
        }),
        firebase.auth().signInWithEmailLink(i, window.location.href).then(()=>{
            let n = window.localStorage.getItem("BlogandreEmailSignIn");
            n && window.localStorage.removeItem("BlogandreEmailSignIn"),
            window.location.href = `${window.location.origin}/meja/`
        }
        ).catch(i=>{
            Notipin.Alert({
                msg: i,
                onNo: ()=>window.location.reload(),
                onYes: ()=>window.location.href = window.location.origin,
                yes: n.cancel,
                no: n.tryAgain
            })
        }
        )
    }
    auth.onAuthStateChanged(n=>{
        n ? window.location.href = `${window.location.origin}/meja/` : i()
    }
    )
}
)();