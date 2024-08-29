// const { log } = require("console");

let logoSrc = document.querySelectorAll('.logo-asset');
console.log(logoSrc);
console.log(logoSrc.src);
for (let i = 0; i < logoSrc.length; i++) {
    logoSrc[i].setAttribute('src', 'assets/img/images/logo/logo-350x222.png');
}


// Tamaños de textos en "Categorias"
let textosIntros = document.querySelectorAll('.breadcrumb-content p');
textosIntros.forEach(element => {
    element.setAttribute('class', 'fs-5');    
});

// SELECTORES
let pageCategorias = document.querySelector('.categorias');
// linkear cada pagina con su html
let dataObrasPublicas = document.querySelector('.data-obras-publicas');
// let dataObrasPrivadas = document.querySelector('.data-obras-privadas');
let dataObrasPrivadas = document.querySelector('.obras-privadas-single');
let parquizacionesSingle = document.querySelector(".parquizaciones-single");
let espaciosVerdesSingle = document.querySelector(".espacios-verdes-single");
let mantenimientoEdilicioSingle = document.querySelector(".mantenimiento-edilicio-single");
let plazasSingle = document.querySelector(".plazas-single");

//OBRAS PRIVADAS
let obrasPublicasIntro = "";
// CONTACTO
let direccionPrincipal = "Zeballos 2739, Edificio Uruguay I, Piso 2 – Beccar";
let direccionSecundaria = "Carlos Pellegrini 1075  – CABA";
let addressMain = document.querySelectorAll('.address-main');
let addressSecondary = document.querySelectorAll('.address-secondary');

if (addressMain) {
    for (let i = 0; i < addressMain.length; i++) {
        addressMain[i].textContent = direccionPrincipal;
        
    }
    console.log(addressMain.textContent);
    // addressMain.textContent = direccionPrincipal;

} else {
    console.log("no address");
}
if (addressSecondary) {
    for (let i = 0; i < addressSecondary.length; i++) {
        addressSecondary[i].textContent = direccionSecundaria;
    }
    console.log(addressSecondary.textContent);
    // addressMain.textContent = direccionPrincipal;

} else {
    console.log("no address 2");
}

let emailPrincipal = "ventas@assetconstrucciones.com.ar";
let emailFront = document.querySelectorAll('.email-address');
if (emailFront) {
    for (let i = 0; i < emailFront.length; i++) {
        emailFront[i].textContent = emailPrincipal;
        emailFront[i].setAttribute("href", `mailto:${emailPrincipal}`);
    }
    emailFront.textContent = emailPrincipal;
    // emailFront.href = `mailto:${emailPrincipal}`;
}else{
    console.log("no email");
}

let telefonoMain = document.querySelectorAll('.telefono1');
let telefonoSecondary = document.querySelectorAll('.telefono2');
let telefono1 = "+54 (9) 11 6784 0949";
let telefono2 = "+54 (9) 11 2014 0860";
if (telefonoMain && telefonoSecondary) {
    for (let i = 0; i < telefonoMain.length; i++) {
        telefonoMain[i].textContent = telefono1;
    }
    telefonoMain.textContent = telefono1;

    for (let i = 0; i < telefonoSecondary.length; i++) {
        telefonoSecondary[i].textContent = telefono2;
    }
    telefonoSecondary.textContent = telefono2;
} else {
    
}


// console.log(dataObrasPublicas.p);
if (dataObrasPublicas) {
    let introObrasPublicas = 'Construyendo infraestructuras duraderas que conectan comunidades y mejoran la calidad de vida.';
    let imgObrasPublicas = document.querySelector('.img-responsive.obras-publicas');
    imgObrasPublicas.setAttribute('src', 'assets/img/projects/obraPublica.webp');

    let linkASingleObras = document.querySelector('.data-obras-publicas .link-a-single');
    linkASingleObras.setAttribute('href', 'obras-publicas.html');

    let textoFrontObrasPublicas = document.querySelector('.data-obras-publicas p');
    textoFrontObrasPublicas.innerText = introObrasPublicas;
} else {
    let obrasPublicasImg2 = document.querySelector('.obras-publicas-single .img-secundaria');
    if (obrasPublicasImg2) {
        console.log(obrasPublicasImg2);
        obrasPublicasImg2.setAttribute('src', 'assets/img/projects/obraPublica-2-532x449.webp');
    } else {
        console.log("no foto secundaria");
    }
}

if (dataObrasPrivadas) {
    let titulo = "Obras Privadas";
    let breadcrumbText = document.querySelector(".obras-privadas-single .breadcrumb-item.active");
    console.log(breadcrumbText);
    breadcrumbText.textContent = titulo;

    let introObrasPrivadas = 'Construyendo infraestructuras duraderas que conectan comunidades y mejoran la calidad de vida.';
    let imgObrasPrivadas = document.querySelector('.obras-privadas-single .img-principal');
    imgObrasPrivadas.setAttribute('src', 'assets/img/projects/obras-privadas-748x395.webp');

    let textoFrontObrasPrivadas = document.querySelector('.obras-privadas-single p');
    textoFrontObrasPrivadas.innerText = introObrasPrivadas;

    let obrasPrivadasImg2 = document.querySelector('.obras-privadas-single .img-secundaria');
    let obrasPrivadasImg3 = document.querySelector('.obras-privadas-single .img-terciaria');

    if (obrasPrivadasImg2) {
        console.log(obrasPrivadasImg2);
        obrasPrivadasImg2.setAttribute('src', 'assets/img/projects/obras-privadas-2-553x449.webp');
    } else {
        console.log("no foto secundaria");
    }
    if (obrasPrivadasImg3) {
        console.log(obrasPrivadasImg3);
        obrasPrivadasImg3.setAttribute('src', 'assets/img/projects/obras-privadas-2-553x270.webp');
    } else {
        console.log("no foto terciaria");
    }
}

if (parquizacionesSingle) {
    let titulo = "Parquizaciones";
    let h2 = document.querySelector(".breadcrumb-content h2");
    h2.textContent = titulo
    let breadcrumbText = document.querySelector(".parquizaciones-single .breadcrumb-item.active");
    console.log(breadcrumbText);
    breadcrumbText.textContent = titulo;
    
    let introParquizaciones = 'La creación de espacios verdes es una parte integral de nuestro trabajo en ASSET CONSTRUCCIONES. Cuidamos cada planta y árbol con esmero, diseñando parques y jardines que son refugios de biodiversidad en la ciudad.';
    let textoFrontParquizaciones = document.querySelector('.parquizaciones-single p');
    textoFrontParquizaciones.innerText = introParquizaciones;

    let imgParquizaciones = document.querySelector('.parquizaciones-single .img-principal');
    imgParquizaciones.setAttribute('src', 'assets/img/projects/parquizaciones748x395.webp');

    let parquizacionesImg2 = document.querySelector('.parquizaciones-single .img-single-secundaria img');
    let parquizacionesImg3 = document.querySelector('.parquizaciones-single .img-single-terciaria');

    if (parquizacionesImg2) {
        console.log(parquizacionesImg2);
        parquizacionesImg2.setAttribute('src', 'assets/img/projects/parquizaciones-2-553x449.webp');
    } else {
        console.log("no foto secundaria");
    }
    if (parquizacionesImg3) {
        console.log(parquizacionesImg3);
        parquizacionesImg3.setAttribute('src', 'assets/img/projects/parquizaciones-2-553x270.webp');
    } else {
        console.log("no foto terciaria");
    }
}

if (espaciosVerdesSingle) {
    let titulo = "Mantenimiento de espacios Verdes";
    let h2 = document.querySelector(".breadcrumb-content h2");
    h2.textContent = titulo;
    let breadcrumbText = document.querySelector(".espacios-verdes-single .breadcrumb-item.active");
    console.log(breadcrumbText);
    breadcrumbText.textContent = titulo;

    let introEspaciosVerdes = 'El mantenimiento de espacios verdes es una parte importante de nuestro compromiso con la sostenibilidad y el cuidado del medio ambiente. Nos especializamos en el mantenimiento de parques, jardines y áreas verdes públicas y privadas, garantizando que se mantengan en óptimas condiciones durante todo el año.';
    let textoFrontEspaciosVerdes = document.querySelector('.espacios-verdes-single p');
    textoFrontEspaciosVerdes.innerText = introEspaciosVerdes;

    let imgEspaciosVerdes = document.querySelector('.espacios-verdes-single .img-principal');
    imgEspaciosVerdes.setAttribute('src', 'assets/img/projects/mantenimiento-espacios-verdes748x395.webp');

    let espaciosVerdesImg2 = document.querySelector('.espacios-verdes-single .img-single-secundaria img');
    let espaciosVerdesImg3 = document.querySelector('.espacios-verdes-single .img-single-terciaria');

    if (espaciosVerdesImg2) {
        console.log(espaciosVerdesImg2);
        espaciosVerdesImg2.setAttribute('src', 'assets/img/projects/mantenimiento-espacios-verdes-2-553x449.webp');
    } else {
        console.log("no foto secundaria");
    }
    if (espaciosVerdesImg3) {
        console.log(espaciosVerdesImg3);
        espaciosVerdesImg3.setAttribute('src', 'assets/img/projects/parquizaciones-2-553x270.webp');
    } else {
        console.log("no foto terciaria");
    }
}

if (mantenimientoEdilicioSingle) {
    let titulo = "Mantenimiento edilicio";
    let h2 = document.querySelector(".breadcrumb-content h2");
    h2.textContent = titulo;
    let breadcrumbText = document.querySelector(".mantenimiento-edilicio-single .breadcrumb-item.active");
    console.log(breadcrumbText);
    breadcrumbText.textContent = titulo;

    let intro = 'El mantenimiento de espacios verdes es una parte importante de nuestro compromiso con la sostenibilidad y el cuidado del medio ambiente. Nos especializamos en el mantenimiento de parques, jardines y áreas verdes públicas y privadas, garantizando que se mantengan en óptimas condiciones durante todo el año.';
    let textoFront = document.querySelector('.mantenimiento-edilicio-single p');
    textoFront.innerText = intro;

    let img1 = document.querySelector('.mantenimiento-edilicio-single .img-principal');
    img1.setAttribute('src', 'assets/img/projects/mantenimiento-espacios-verdes748x395.webp');

    // mantenimiento-edilicio-2-553x449.webp
    let img2 = document.querySelector('.mantenimiento-edilicio-single .img-single-secundaria img');
    let img3 = document.querySelector('.mantenimiento-edilicio-single .img-single-terciaria');

    if (img2) {
        console.log(img2);
        img2.setAttribute('src', 'assets/img/projects/mantenimiento-edilicio-2-553x449.webp');
    } else {
        console.log("no foto secundaria");
    }
    if (img3) {
        console.log(img3);
        img3.setAttribute('src', 'assets/img/projects/mantenimiento-edilicio-2-553x449.webp');
    } else {
        console.log("no foto terciaria");
    }
}

if (plazasSingle) {
    let titulo = "Plazas";
    let h2 = document.querySelector(".breadcrumb-content h2");
    h2.textContent = titulo;
    let breadcrumbText = document.querySelector(".plazas-single .breadcrumb-item.active");
    console.log(breadcrumbText);
    breadcrumbText.textContent = titulo;

    let intro = 'En ASSET CONSTRUCCIONES, creemos que las plazas son mucho más que simples espacios públicos; son lugares donde se construyen lazos sociales y se fortalecen las comunidades.';
    let textoFront = document.querySelector('.plazas-single p');
    textoFront.innerText = intro;

    let img1 = document.querySelector('.plazas-single .img-principal');
    img1.setAttribute('src', 'assets/img/projects/plazas748x395.webp');

    let img2 = document.querySelector('.plazas-single .img-single-secundaria img');
    let img3 = document.querySelector('.plazas-single .img-single-terciaria');
    // plazas-2-553x449.webp
    if (img2) {
        console.log(img2);
        img2.setAttribute('src', 'assets/img/projects/plazas-2-553x449.webp');
    } else {
        console.log("no foto secundaria");
    }
    if (img3) {
        console.log(img3);
        img3.setAttribute('src', 'assets/img/projects/parquizaciones-2-553x270.webp');
    } else {
        console.log("no foto terciaria");
    }
}

// SLOGAN FOOTER
let textoSlogan = `Nuestro compromiso con la innovación y la excelencia se refleja en cada proyecto que emprendemos, donde transformamos ideas en estructuras extraordinarias.`;
let footerSlogan = document.querySelector('.footer-slogan');
if (footerSlogan) {
    footerSlogan.textContent = textoSlogan;
} else {
    console.log("no slogan");
}

// **********************************************************************************
// **********************************************************************************
// LISTADO DE CATEGORIAS
let menuCategorias = document.querySelector(".dropdown-menu-list.lista-categorias");
let categoriasMobile = document.querySelector(".category-menu li.category.categorias .subcategory");
console.log(categoriasMobile);

let categorias = [];
let cateTodas = {
    title: "Ver todas",
    url: "categorias.html",
}
let cate1 = {
    title: "Obras Públicas",
    url: "obras-publicas.html",
}
let cate2 = {
    title: "Obras Privadas",
    url: "obras-privadas.html",
}
let cate3 = {
    title: "Parquizaciones",
    url: "parquizaciones.html",
}
let cate4 = {
    title: "Mantenimiento de espacios verdes",
    url: "mantenimiento-de-espacios-verdes.html",
}
let cate5 = {
    title: "Mantenimiento edilicio",
    url: "mantenimiento-edilicio.html",
}
let cate6 = {
    title: "Plazas",
    url: "plazas.html",
}

categorias.push(cateTodas);
categorias.push(cate1);
categorias.push(cate2);
categorias.push(cate3);
categorias.push(cate4);
categorias.push(cate5);
categorias.push(cate6);

for (let i = 0; i < categorias.length; i++) {
    let titulo = categorias[i].title;
    let link = categorias[i].url;
    let li = document.createElement("li");
    li.setAttribute("class", "dropdown-menu-item");
    let a = document.createElement("a");
    a.setAttribute("class", "dropdown-menu-link");
    a.setAttribute("href", link);
    a.textContent = titulo;
   li.appendChild(a);
    menuCategorias.append(li);
    console.log(categorias[i]);
    categoriasMobile.append(li);
}

let favicon = document.querySelector(".meta-favicon");
if (favicon) {
    favicon.setAttribute("href", "assets/img/favicon-asset.png")
} else {
    console.log("no class en favicon");
}

let offcanvasManu = document.querySelector("#offcanvasManu");
let btnOffCanvasContacto = document.querySelector(".category.btn-off-contacto");


btnOffCanvasContacto.addEventListener("click", function toggleMenu() {
    let offCanvasGral = document.querySelector(".offcanvas-backdrop.fade.show");
    console.log("btn");
    offcanvasManu.classList.toggle("show");
    console.log(offcanvasManu);
    // offCanvasGral.classList.toggle("offcanvas-backdrop");
    console.log(offCanvasGral);
    offCanvasGral.style.opacity = 0;
})