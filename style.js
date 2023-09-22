const titreSpans = document.querySelectorAll('h4 span');
const titreSpan = document.querySelectorAll('div span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

window.addEventListener('load', () => {
    const TL = gsap.timeline({paused: true})

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(medias, 1, {right: -500, ease: "power2.out"}, 0.3, '-=1')
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
   
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2');
   




    TL.play();
})
//fin de l'animation de texte 
//ici c'est le debut de la mise en place de la montre
let hr = document.querySelector("#her");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let hour = document.querySelector("#hour");
let munites = document.querySelector("#minutes");
let secods = document.querySelector("#seconds");
let asym = document.querySelector("#asym");
setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mi = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    let va = hh + (mi / 12);
    hr.style.transform = "rotateZ(" + va + "deg)";
    min.style.transform = "rotateZ(" + mi + "deg)";
    sec.style.transform = "rotateZ(" + ss + "deg)";
    var am = h >= 12 ? "PM" : "AM";
    if(h>12){
        h=h-12;
    }
    h=(h<10)? "0"+h:h;
    m=(m<10)? "0"+m:m;
    s=(s<10)? "0"+s:s;
    hour.innerHTML = h;
    munites.innerHTML = m;
    secods.innerHTML = s;
    asym.innerHTML = am;
})
//ici c'est la fin de la mise en place de la montre
//fin section accuel
//debut de la mise en place du  menu
let sidebar = document.querySelector(".sidebar");
let option =[...document.querySelectorAll(".alan")];
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bxl-c-plus-plus");
  let containers =document.querySelector("body")
  let sections =[...document.querySelectorAll("section")];
  let links=[...document.querySelectorAll(".links_name")]
  
  window.addEventListener("scroll",()=>{
    if(window.scrollY !== 0 && sidebar.classList.contains("open")){
      sidebar.classList.remove("open");
      containers.style.paddingLeft=3+"rem"
    }
  })
    closeBtn.addEventListener("click", ()=>{
      const largeur = sidebar.offsetWidth;
     if(window.innerWidth <476 && largeur <36)
     {
       for(var i=0; i<sections.length ; i++)
       {
        sections[i].style.visibility="hidden"
       }
     }
     for(var j= 0;j<links.length;j++)
     {
      links[j].addEventListener("click",()=>{
        for(var i=0; i<sections.length; i++)
       {
        sections[i].style.visibility="visible"
        sidebar.classList.toggle("open");
        containers.style.paddingLeft=3+"rem"
      }
    })
     }
    if(largeur<=70 && largeur>=28)
      {
      
        containers.style.paddingLeft=14+"rem"
        sidebar.classList.toggle("open");
        
      }
    else
     {
        containers.style.paddingLeft=3+"rem"
        sidebar.classList.toggle("open");
        
      }
     
    
    menuBtnChange();
  });
  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//ici j'ai effectu" un changement d'icon
   }else {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//j'ai effectu" un changement d'icon
   }
  }
//fin menu
//debut section tache
const tabs = [...document.querySelectorAll('.tab')]

tabs.forEach(tab => tab.addEventListener("click", tabsAnimation))

const tabContents = [...document.querySelectorAll(".tab-content")]

function tabsAnimation(e){

  const indexToRemove = tabs.findIndex(tab => tab.classList.contains("active-tab"))

  tabs[indexToRemove].setAttribute("aria-selected", "false")
  tabs[indexToRemove].setAttribute("tabindex", "-1")
  tabs[indexToRemove].classList.remove("active-tab");
  tabContents[indexToRemove].classList.remove("active-tab-content");

  const indexToShow = tabs.indexOf(e.target)

  tabs[indexToShow].setAttribute("tabindex", "0")
  tabs[indexToShow].setAttribute("aria-selected", "true")
  tabs[indexToShow].classList.add("active-tab")
  tabContents[indexToShow].classList.add("active-tab-content")
}
 //ici debut de la gestion de la selection avec les touches entrée,top,bottom,rigth,left
tabs.forEach(tab => tab.addEventListener("keydown", arrowNavigation))

let tabFocus = 0;
function arrowNavigation(e){
console.log(e.keyCode);
  if(e.keyCode === 39 || e.keyCode === 37) {
    tabs[tabFocus].setAttribute("tabindex", -1)

    if(e.keyCode === 39) {
      tabFocus++;

      if(tabFocus >= tabs.length) {
        tabFocus = 0;
      }
    } else if (e.keyCode === 37) {
      tabFocus--;

      if(tabFocus < 0) {
        tabFocus = tabs.length -1;
      }
    }

    tabs[tabFocus].setAttribute("tabindex", 0)
    tabs[tabFocus].focus()
  }

}
// Écouteur d'événement pour le chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    // Récupérer toutes les clés (identifiants) des tâches stockées dans localStorage
   
    const keys = Object.keys(localStorage);
  
    // Parcourir toutes les clés et mettre à jour le statut "termine" de chaque tâche
    keys.forEach((key) => {
      mettreAJourStatutTerminé(key);
    });
    setInterval(()=>{
        misejourApresCheck();
    })

     
    //selectionner les elements de DOM
    const icon=document.querySelector('.ajouter');
    const nom = document.getElementById('noms');
    const heure = document.getElementById('times');
    const dates = document.getElementById('dates');
    
    icon.addEventListener('click',(e)=>
    {
        ajouterOuModifierTache(nom,heure,dates);
       
    })  
  
    const tachetemine=document.querySelector('.tache-temine');
    var tachestermines=filtrerTachesTermineesMarquees();
    tachestermines.forEach(function(local){
        var objet=JSON.parse(local)
         tachetemine.innerHTML+=
         `<form class="tache" draggable="true">
          <span id="${objet.daten}">${objet.noms}</span>
         <button type="button"
         class ="supprimer"><i class="fas fa-delete-left"></i>supprimer</button>
        <button type="button"
        class ="modifier"><i class="fas fa-edit"></i>modifier</button>
        <label for="${objet.id}"></label>
       <input type="checkbox" id="${objet.id}"class="checkbox" placeholder="3" />
      </form> 
    `
  
    misejourApresCheck();
    specificationdetacheterminer(tachetemine)
    })
    const tachetemptemine=document.querySelector('.tache-temp-temine');
    var tacheterminenonmarquer=filtrerTachesTermineesNonMarquees();
    tacheterminenonmarquer.forEach(function(local){
        const tacheObj = JSON.parse(local);
        tachetemptemine.innerHTML+=
        `<form class="tache" draggable="true">
         <span id="${tacheObj.daten}">${tacheObj.noms}</span>
        <button type="button"
        class ="supprimer"><i class="fas fa-delete-left"></i>supprimer</button>
       <button type="button"
       class ="modifier"><i class="fas fa-edit"></i>modifier</button>
       <label for="${tacheObj.id}"></label>
      <input type="checkbox" id="${tacheObj.id}"class="checkbox" placeholder="3" />
     </form> 
   `
   misejourApresCheck();
   specificationdetachenonmarquer(tachetemptemine);

   })
    const nouvelletache=document.querySelector(".nouvelle-tache")
    const tachesnonterminernonmarquer=filtrerTachesNonTermineesNonMarquees()
    tachesnonterminernonmarquer.forEach(function(local){
        const tacheObj = JSON.parse(local);
        nouvelletache.innerHTML+=
        `<form class="tache" draggable="true">
         <span id="${tacheObj.daten}">${tacheObj.noms}</span>
        <button type="button"
        class ="supprimer"><i class="fas fa-delete-left"></i>supprimer</button>
       <button type="button"
       class ="modifier"><i class="fas fa-edit"></i>modifier</button>
       <label for="${tacheObj.id}"></label>
      <input type="checkbox" id="${tacheObj.id}"class="checkbox" placeholder="3" />
     </form> 
   `  
   misejourApresCheck();
  
   specificationdetachenonterminer(nouvelletache,tacheObj.dates)
   })
   var modi = [...document.querySelectorAll('.modifier')];
   var tachesf = [...document.querySelectorAll('.tache')];
   for (var i = 0; i < modi.length; i++) 
   {
     modi[i].addEventListener('click', (event) => 
     {
       var bouton = event.target;//recuperation du bouton qui correspond la tâche à supprimer
 
       var tacheAmodifier = bouton.closest('.tache');//recuperation du bouton qui correspond la tâche à supprimer
 
       if (tacheAmodifier)//verifier le bouton existe rélement
       {
         var enfant =tacheAmodifier.firstElementChild;
 
         modifier(enfant) //appel de fonction supprimer pour supprimer la tâche
       }
     });
   }

   var suprime = [...document.querySelectorAll('.supprimer')];
  var tachesf = [...document.querySelectorAll('.tache')];
  for (var i = 0; i < suprime.length; i++) 
  {
    suprime[i].addEventListener('click', (event) => 
    {

      var bouton = event.target;//recuperation du bouton qui correspond la tâche à supprimer

      var tacheASupprimer = bouton.closest('.tache');
      if (tacheASupprimer) //verifier le bouton existe rélement
      {
        var enfant =tacheASupprimer.firstElementChild;//si oui je reupere son premier enfant

        delect(enfant);//appel de fonction supprimer pour supprimer la tâche
      }
    });
  }
   
   
   const tabs=[...document.querySelectorAll(".tab")];
    
   const divtab=[...document.querySelectorAll("#tacheparent")]
 
    for(var i=0 ; i<tabs.length;i++){
      var spane=tabs[i].querySelector("span");
      var nombretache= compterTache(divtab[i]);
      console.log(nombretache);
      spane.textContent=nombretache;
      spane.style.color="white"
    }
  });



  let popup=document.querySelector(".popup");
  let bouton=document.querySelector(".popup button")
  let image=document.querySelector(".popup img")
  function openpopup(infodetail,infobref,colorv)
  {
  const varinfo=document.querySelector(".info-alert");
  const varinfodetai=document.querySelector(".info-detail")
  varinfo.textContent=infobref;
  varinfodetai.textContent=infodetail;
  bouton.style.backgrounColor=colorv;
  image.style.backgrounColor=colorv;
  popup.classList.add("open-popup")
  }
  function closepopup(){
      popup.classList.remove("open-popup")
  }
  
  //fin de sugnal
  
  const sortableList = new Sortable(document.querySelector('.nouvelle-tache'),
  {
    animation: 140,
    onStart(evt)
    {
      const item = evt.item;
      item.classList.add('dragging');
    },
    onEnd(evt) 
    {
      const item = evt.item;
      item.classList.remove('dragging');
    },
  });
  
  const sortableLis = new Sortable(document.querySelector('.tache-temine'),
  {
    animation: 140,
    onStart(evt)
    {
      const item = evt.item;
      item.classList.add('dragging');
    },
    onEnd(evt) 
    {
      const item = evt.item;
      item.classList.remove('dragging');
    },
  });
  const sortableLs = new Sortable(document.querySelector('.tache-temp-temine'),
  {
    animation: 140,
    onStart(evt)
    {
      const item = evt.item;
      item.classList.add('dragging');
    },
    onEnd(evt) 
    {
      const item = evt.item;
      item.classList.remove('dragging');
    },
  });
  


// Fonction pour vérifier si une tâche avec le même nom existe
function tacheExiste(nom) {
    const keys = Object.keys(localStorage);
    for (const key of keys) {
      const local = JSON.parse(localStorage.getItem(key));
      console.log(local)
      if (local !== null) {
        if( nom.trim() === local.noms.trim()){
            return true;
        }
        
      }
    }
    return false;
  }
  
  // Fonction pour ajouter ou modifier une tâche
  function ajouterOuModifierTache(nom, heure, date)
   { 
    if (nom.value===""|| date.value ===""|| heure.value ==="")
  {
   alert("Veuillez remplir le formulaire");//si oui alert
  }
else{
    const cle = Date.now().toString(); // Utilisez une clé unique comme identifiant
    const tache = {
      id: cle,
      noms: nom.value,
      heurel: heure.value,
      daten: date.value,
      termine: false,
      iputche: false,
      dates: new Date().toISOString(), // Utilisez une date formatée pour stocker la date actuelle
    };
  
    if (tacheExiste(nom.value)) {
      // Demandez à l'utilisateur s'il souhaite modifier la tâche existante
      const confirmation = window.confirm("La tâche existe déjà. Voulez-vous la modifier ?");
      if (confirmation) {
        // Mettez à jour la tâche existante
        const keys = Object.keys(localStorage);
        for (const key of keys) {
          const local = JSON.parse(localStorage.getItem(key));
          if (local !== null && nom.value.trim() === local.noms.trim()) {
            localStorage.removeItem(key);
            localStorage.setItem(cle, JSON.stringify(tache));
            break;
          }
        }
      }
    } else {
      // Ajoutez la nouvelle tâche au localStorage
      localStorage.setItem(cle, JSON.stringify(tache));
    }
}
  }
// Fonction pour filtrer les tâches terminées et marquées comme terminées
function filtrerTachesTermineesMarquees() {
    const taches = Object.values(localStorage);
    const tachesFiltrees = taches.filter((tache) => {
      const tacheObj = JSON.parse(tache);
      return tacheObj.termine && tacheObj.iputche;
    });
    return tachesFiltrees;
  }
  
  // Fonction pour filtrer les tâches terminées mais non marquées comme terminées
  function filtrerTachesTermineesNonMarquees() {
    const taches = Object.values(localStorage);
    const tachesFiltrees = taches.filter((tache) => {
      const tacheObj = JSON.parse(tache);
      return tacheObj.termine && !tacheObj.iputche;
    });
    return tachesFiltrees;
  }
  
  // Fonction pour filtrer les tâches non terminées et non marquées comme terminées
  function filtrerTachesNonTermineesNonMarquees() {
    const taches = Object.values(localStorage);
    const tachesFiltrees = taches.filter((tache) => {
      const tacheObj = JSON.parse(tache);
      return (!tacheObj.termine && !tacheObj.iputche)||(!tacheObj.termine && tacheObj.iputche);
    });
    return tachesFiltrees;
  }
  
  function estTacheTerminee(idTache) {
    // Récupérer la tâche existante dans localStorage
    const tacheExistante = JSON.parse(localStorage.getItem(idTache));
  
    if (tacheExistante) {
      // Obtenir la date et l'heure de fin de la tâche
      const dateFinTache = new Date(tacheExistante.daten + 'T' + tacheExistante.heurel);
  
      // Obtenir la date et l'heure actuelles
      const dateActuelle = new Date();
  
      // Vérifier si la date et l'heure actuelles sont postérieures à la date de fin de la tâche
      if (dateActuelle > dateFinTache) {
        return true; // La tâche est terminée
      } else {
        return false; // La tâche n'est pas encore terminée
      }
    } else {
      return false; // La tâche n'a pas été trouvée dans localStorage
    }
  }
  
  function mettreAJourStatutTerminé(idTache) {
    const tacheExistante = JSON.parse(localStorage.getItem(idTache));
  
    if (tacheExistante) {
      // Vérifier si la tâche est terminée en tenant compte de la date et de l'heure de fin
      const estTerminée = estTacheTerminee(idTache);
  
      // Mettre à jour la propriété "termine" en fonction du statut de la tâche
      tacheExistante.termine = estTerminée;
  
      // Réenregistrer la tâche mise à jour dans localStorage
      localStorage.setItem(idTache, JSON.stringify(tacheExistante));
    }
  }
  function recupererRetardTacheTerminée(idTache) {
    const tacheExistante = JSON.parse(localStorage.getItem(idTache));
  
    if (tacheExistante) {
      // Vérifier si la tâche est terminée en tenant compte de la date et de l'heure de fin
      const estTerminée = estTacheTerminee(idTache);
  
      // Vérifier si la tâche est marquée comme terminée
      const estMarquéeTerminée = tacheExistante.iputche;
  
      // Si la tâche est terminée mais non marquée comme terminée, calculer le retard
      if (estTerminée && !estMarquéeTerminée) {
        const dateFin = new Date(tacheExistante.daten + ' ' + tacheExistante.heurel);
        const dateActuelle = new Date();
        const differenceEnMillisecondes = dateActuelle - dateFin;
  
        if (differenceEnMillisecondes > 0) {
          const secondesDeRetard = Math.floor(differenceEnMillisecondes / 1000);
          const minutesDeRetard = Math.floor(secondesDeRetard / 60);
          const heuresDeRetard = Math.floor(minutesDeRetard / 60);
          const joursDeRetard = Math.floor(heuresDeRetard / 24);
  
          return {
            jours: joursDeRetard,
            heures: heuresDeRetard % 24,
            minutes: minutesDeRetard % 60,
            secondes: secondesDeRetard % 60,
          };
        }
      }
    }
  
    // Retourne null si la tâche n'est pas en retard ou si elle n'est pas terminée
    return null;
  }
  
  function misejourApresCheck() {
    // Sélectionnez toutes les cases à cocher de type checkbox
 const checkbox = document.querySelectorAll('input[type="checkbox"]');
    checkbox.forEach((chech) => {
      chech.addEventListener('click', () => {
        const key = chech.id;
        const local = JSON.parse(localStorage.getItem(key.toString()));
  
        if (local) {
          if (chech.checked) {
            local.iputche = true;
            localStorage.setItem(local.id, JSON.stringify(local));
          } else {
            local.iputche = false;
            localStorage.setItem(local.id, JSON.stringify(local));
          }
        }
      });
    });
  }
  

  function specificationdetachenonmarquer(nomcategorie){
    const taches= nomcategorie.querySelectorAll(".tache");
    taches.forEach(function(tache){
     const checkboxtache=tache.querySelector('input[type="checkbox"]')
        const temp=recupererRetardTacheTerminée(checkboxtache.id)
         const span=tache.querySelector("span")
         const label=tache.querySelector("label")
         span.classList.add("rouge-vif")
         const jour=(temp.jours===0)? "":temp.jours+" "+"j"
         const heur=(temp.heures===0)? "":temp.heures+" "+"h"
         const minut=(temp.minutes===0)? "":temp.minutes+" "+"m"
         const secon=(temp.secondes===0)? "":temp.secondes+" "+"s"
        label.textContent=jour+"  "+heur+" "+minut+ " "+secon

    })
  }

  function specificationdetacheterminer(nomcategorie){
    const taches= nomcategorie.querySelectorAll(".tache");
    taches.forEach(function(tache){
     const checkboxtache=tache.querySelector('input[type="checkbox"]')
        
         const span=tache.querySelector("span")
         const label=tache.querySelector("label")
         span.classList.add("marquetermine")
         label.textContent="terminée";

    })
  }
  function estNouvelleTache(dateCreation) {
    const dateCreationTache = new Date(dateCreation);
    const dateActuelle = new Date();
    
    // Définissez ici votre critère pour considérer une tâche comme nouvelle,
    // par exemple, si elle a été créée au cours des 30 dernières minutes.
    const differenceEnMinutes = (dateActuelle - dateCreationTache) / (1000 * 60);
  
    // Vous pouvez ajuster la condition selon vos besoins
    if (differenceEnMinutes <= 30) {
      return true; // La tâche est considérée comme nouvelle
    } else {
      return false; // La tâche n'est pas considérée comme nouvelle
    }
  }

  function specificationdetachenonterminer(nomcategorie,datecreation){
    const taches= nomcategorie.querySelectorAll(".tache");
    taches.forEach(function(tache){
     const checkboxtache=tache.querySelector('input[type="checkbox"]')
        
         const span=tache.querySelector("span")
         const label=tache.querySelector("label")
        
        if(estNouvelleTache(datecreation)){
            label.textContent="nouvelle";
            if(checkboxtache.checked)
            {
                const label=tache.querySelector("label")
               label.textContent="encour";
            }
         }
        else{
            const label=tache.querySelector("label")
            label.textContent="plus de 30m";
        }
    })
  }
  function compterTache(nomparent){
    if(nomparent){
      var nombre=nomparent.childElementCount;
    }
    return nombre;
  }

  function delect(name) {
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        const storedItem = JSON.parse(localStorage[key]);
        if (storedItem && name.innerHTML.trim() === storedItem.noms.trim()) {
          localStorage.removeItem(key);
          const parent = name.parentNode;
          parent.classList.add('netoyer');
          parent.classList.remove('tache');
        }
      }
    }
  }

  function modifier(taskName) {
    const keys = Object.keys(localStorage);
  
    for (const key of keys) {
      const storedItem = JSON.parse(localStorage.getItem(key));
  
      if (storedItem && storedItem.noms.trim().toUpperCase() === taskName.textContent.trim().toUpperCase()) {
        // Remplir les champs de formulaire avec les données de la tâche
        document.getElementById("noms").value = storedItem.noms;
        const heureArray = storedItem.heurel.split(':');
        const heures = heureArray[0];
        const minutes = heureArray[1];
        document.getElementById('times').value = `${heures}:${minutes}`;
        const dateArray = storedItem.daten.split('-');
        const annee = dateArray[0];
        const mois = dateArray[1];
        const jour = dateArray[2];
        const dat = `${annee}-${mois}-${jour}`;
        document.getElementById('dates').value = dat;
  
        // Supprimer la tâche de localStorage (ou commenter cette ligne si ce n'est pas nécessaire)
        localStorage.removeItem(key);
        break;
      }
    }
  }
  

  
  
  
  

  
  
  
  