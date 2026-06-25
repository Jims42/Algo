# 📚 Mémo Java

## 📌 Sommaire
* [regex](#1-REGEX)
* [split](#2-SPLIT())


---

# 1. REGEX
---
```js
regex=/^\.+$/
regex.test(phrase)
```
est il la meme chose que cette syntaxe
```js
phrase.match(/^\.+$/)
```
**Oui, c'est presque exactement la même chose** dans ce contexte, mais il y a une petite différence dans ce que ces deux méthodes renvoient.

Voici les détails :

### 1. `regex.test(phrase)`

Cette méthode est conçue pour être rapide. Elle vérifie simplement si la regex correspond au texte et renvoie un **booléen**.

* Si la phrase contient uniquement un ou plusieurs points, elle renvoie `true`.
* Sinon, elle renvoie `false`.

### 2. `phrase.match(/^\.+$/)`

Cette méthode cherche une correspondance et renvoie un **objet (un tableau)** ou `null`.

* Si la phrase contient uniquement un ou plusieurs points, elle renvoie un tableau contenant la chaîne correspondante et des informations sur l'index : `['...']`.
* Si aucune correspondance n'est trouvée, elle renvoie `null`.

---

### En pratique (dans une condition `if`)

Si vous utilisez ces syntaxes dans un bloc `if`, elles se comporteront de la même manière car JavaScript évalue un tableau comme "vrai" (*truthy*) et `null` comme "faux" (*falsy*).

```javascript
const phrase = "...";
const regex = /^\.+$/;

// Approche 1 : Renvoie true
if (regex.test(phrase)) {
    console.log("C'est un match !");
}

// Approche 2 : Renvoie ['...'] (qui est évalué comme vrai)
if (phrase.match(regex)) {
    console.log("C'est un match aussi !");
}

```

> **Conseil de performance :** Si vous voulez juste vérifier si une chaîne respecte un format (sans récupérer le texte trouvé), utilisez toujours **`regex.test()`**. C'est plus rapide et plus léger en mémoire.

---

# 2. SPLIT()

```javascript
let personneList='Jerome Provent'
let hotmail;
let sep; //sep=separtion du (exemple prenom et nom )
sep=personneList.split(" ");
tabmail=sep[0][0].toLowerCase()+"."+sep[1].toLowerCae()+"gmail.com";
console.log(hotmail); //affichage : "jprovent@gmail.com"
```
`[sep[0][0],sep[1]]` est equivalent à `[sep[0].charAt(0),sep[1]]`

