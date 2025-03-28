class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Bien sûr, voici une explication détaillée de la ligne suivante, en français :

// ### Code :
// ```javascript
// Error.captureStackTrace(this, this.constructor);
// ```

// ### Explication :

// #### **1. `Error.captureStackTrace` :**
// `Error.captureStackTrace` est une méthode spécifique à V8, le moteur JavaScript utilisé par Chrome et Node.js. Elle permet de capturer une trace de la pile d'exécution (stack trace) au moment où une erreur se produit. La trace de la pile est un enregistrement des appels de fonction dans le programme qui ont conduit à l'endroit où l'erreur a été lancée.

// Une trace de la pile est extrêmement utile pour le débogage, car elle permet de retracer les étapes qui ont conduit à l'erreur.

// #### **2. Pourquoi utiliser `Error.captureStackTrace` ?**
// Dans JavaScript, lorsqu'une erreur est lancée (par exemple via `throw` ou lors de l'instanciation d'un objet `Error`), la trace de la pile est automatiquement attachée à l'objet erreur. Cette trace indique la séquence des appels de fonction qui ont mené à l'erreur.

// Cependant, par défaut, la trace de la pile contient aussi des informations sur le constructeur de l'objet erreur (dans ce cas, la classe `ErrorHandler`), ce qui peut rendre la trace moins lisible ou utile, car cela inclut souvent des détails internes comme la ligne du code où l'instance de l'erreur a été créée, ce qui n'est pas toujours nécessaire.

// #### **3. `this.constructor` :**
// `this.constructor` fait référence au constructeur de l'objet courant. Dans le cas de la classe `ErrorHandler`, `this.constructor` fait référence à la fonction constructeur de la classe `ErrorHandler` elle-même.

// #### **4. Fonctionnement de `Error.captureStackTrace(this, this.constructor)` :**

// - **`this`** : Cela fait référence à l'objet erreur actuel (c'est-à-dire l'instance de la classe `ErrorHandler`).
// - **`this.constructor`** : Cela fait référence à la fonction constructeur de la classe `ErrorHandler`.

// En appelant `Error.captureStackTrace(this, this.constructor)`, vous indiquez au moteur JavaScript de capturer la trace de la pile **à partir de l'endroit où l'erreur a été lancée**, mais sans inclure la trace du constructeur de l'erreur dans la pile. Cela signifie que la trace de la pile commencera à partir du point où l'erreur a été réellement générée et n'inclura pas la méthode `ErrorHandler` comme une partie de la pile.

// Cela permet de **rendre la trace de la pile plus claire et plus lisible** car elle ne contient pas des informations supplémentaires sur la création de l'erreur elle-même.

// #### **5. Exemple :**
// Supposons que vous ayez une erreur dans votre code avec une fonction qui appelle un constructeur d'erreur comme suit :

// ```javascript
// function myFunction() {
//   throw new ErrorHandler('Something went wrong', 500);
// }
// ```

// Si vous ne capturez pas la trace avec `Error.captureStackTrace`, la trace pourrait ressembler à ceci :

// ```
// Error: Something went wrong
//     at ErrorHandler (<path-to-your-file>:5:13)
//     at myFunction (<path-to-your-file>:7:9)
//     at Object.<anonymous> (<path-to-your-file>:9:1)
// ```

// Cela montre où l'erreur a été lancée dans le constructeur `ErrorHandler`.

// En utilisant `Error.captureStackTrace(this, this.constructor)`, la trace sera plus propre et ressemblera à ceci :

// ```
// Error: Something went wrong
//     at myFunction (<path-to-your-file>:7:9)
//     at Object.<anonymous> (<path-to-your-file>:9:1)
// ```

// Comme vous pouvez le voir, la trace commence directement à partir de `myFunction`, et la partie liée à l'instanciation de l'erreur (c'est-à-dire le constructeur `ErrorHandler`) est omise, ce qui rend la trace plus concise et utile.

// ### Conclusion :

// `Error.captureStackTrace(this, this.constructor)` permet d'améliorer la qualité des traces d'erreurs en excluant les informations sur le constructeur de l'erreur lui-même. Cela donne des traces plus claires et plus pertinentes, ce qui facilite le débogage. Cette méthode est spécifique à V8 (moteur JavaScript de Chrome et Node.js) et est donc généralement utilisée dans des environnements basés sur ce moteur.

module.exports = ErrorHandler;
