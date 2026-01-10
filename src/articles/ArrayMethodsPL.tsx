import CodeBlock from "../components/CodeBlock/CodeBlock";

const ArrayMethodsPL = () => {
  return (
    <div className="article">
      <h1>array methods</h1>
      <b>tablica</b> – obiekt służący do przechowywania wielu wartości w
      uporządkowanej liście, do których mamy dostęp poprzez indeks. Indeksy
      tablicy zaczynają się od 0.
      <p>
        <b>shallow copy</b> – tzw. płytka kopia. Tworzy nową tablicę, ale
        kopiuje elementy tylko na pierwszym poziomie. <b>Primitive values</b>{" "}
        (number, string, boolean itd.) są kopiowane przez wartość, natomiast
        obiekty są kopiowane przez referencję. Oznacza to, że zmiana obiektu w
        kopii wpłynie również na oryginał.{" "}
        <p>
          Zasada: używaj shallow copy, gdy tablica zawiera wyłącznie primitive
          values.
        </p>
      </p>
      <CodeBlock
        code={`const original = [1, 2, 3];
const copy = [...original]; // shallow copy
copy[0] = 99;
console.log(original); // [1, 2, 3] 
console.log(copy);     // [99, 2, 3]`}
      />
      <CodeBlock
        code={`const original = [{ a: 1 }];
const copy = [...original];
copy[0].a = 99;
console.log(original[0].a); // 99 ZMIANA RÓWNIEŻ W ORYGINALE`}
      />
      <p>
        <b>array.from()</b> - metoda służąca do tworzenia <b>shallow copy</b>.
        Alternatywa dla <b>spread operator [...arguments]</b>. Jako drugi
        argument może przyjąć funkcje.
      </p>
      <CodeBlock
        code={`Array.from("abc");
// ["a", "b", "c"]`}
      />
      <CodeBlock
        code={`Array.from([1, 2, 3], x => x * 2);
// [2, 4, 6]`}
      />
      <p>
        <b>array.of()</b> - tworzy nową tablicę z przekazanych argumentów.
        <CodeBlock
          code={`const arr = Array.of(1, "b", { name: "ala" });
// [1, "b", { name: "ala" }]`}
        />
      </p>
      <p>
        <b>at()</b> - zwraca dany element po indeksie. Jako argument przyjmuje
        indeks array. Jeśli jako argument podamy -1 to zwróci ostatni element,
        -2 przedostatni itd.
        <CodeBlock
          code={`const arr = [2,6,7];
arr.at(0); // 2
arr.at(-1) // 7 `}
        />
      </p>
      <p>
        <b>concat()</b> - łączy dwie lub więcej tablic w jedną i zwraca nową
        tablicę. Oryginalne tablice pozostają niezmienione.
        <CodeBlock
          code={`const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const newArray = array1.concat(array2, array3, 7, 8);

console.log(newArray);
// [1, 2, 3, 4, 5, 6, 7, 8]`}
        />
      </p>
      <p>
        <b>every()</b> - jako argument przyjmuje callback function. Zwraca true
        gdy wszystkie elementy tablicy spełniają warunek. Iteruje po elementach
        tablicy i sprawdza warunek dla każdego elementu. Jeśli jeden z nich to
        false to metoda zwraca false dla całości tablicy.
        <CodeBlock
          code={`const highScore = (currentScore) => currentScore > 10
const arr = [11, 20, 15, 22, 3];
console.log(arr.every(highScore)); // false 
`}
        />
      </p>
      <p>
        <b>fill()</b> - metoda służąca do wstawiania elementów do tablicy.
        Pierwszy argument to value. Drugi opcjonalny to start index (0 based).
        Trzeci, również opcjonalny to end index (0 based).
        <CodeBlock
          code={`const array = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array.fill(6));
// Expected output: Array [6, 6, 6, 6]
`}
        />
      </p>
      <p>
        <b>filter()</b> - metoda tworzy shallow copy. Jako argument przyjmuje
        callback function. Zwraca te elementy, które spełniają warunek.
        <CodeBlock
          code={`// lets filter numbers greater than 10
const numbers = [1, 22, 123, 4, 0, 53];
const result = numbers.filter((num) => num > 10);
console.log(result); // [22, 123, 53]       
`}
        />
      </p>
      <p>
        <b>find()</b> - metoda zwraca pierwszy element, który spełnia warunek.
        Jako argument przyjmuje callback function. Jeśli żaden element nie
        spełnia warunku - dostaniemy <b>undefined</b>.
        <CodeBlock
          code={`const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }
`}
        />
      </p>
      <p>
        <b>findLast()</b> - metoda zwraca pierwszy element, który spełnia
        warunek iterując od końca tablicy (od ostatniego elementu). Jako
        argument przyjmuje callback function. Jeśli żaden element nie spełnia
        warunku - dostaniemy <b>undefined</b>.
        <CodeBlock
          code={`const array = [5, 12, 50, 130, 44];
const found = array.findLast((element) => element > 45);
console.log(found);
// Expected output: 130
`}
        />
      </p>
      <p>
        <b>findIndex()</b> - zwraca indeks pierwszego elementu, który spełnia
        warunek. Jako argument przyjmuje callback function. Gdy nie znajdzie
        elementu spełniającego warunek, zwraca -1. Pomocna gdy chcemy usunąć lub
        edytować element. Gdy chcesz iterować od końca użyj{" "}
        <b>findLastIndex()</b>.
        <CodeBlock
          code={`const users = [
  { id: 1, name: "Ala" },
  { id: 2, name: "Ola" }
];

const index = users.findIndex(u => u.id === 2);

if (index !== -1) {
  users[index].name = "Ela";
}
`}
        />
      </p>
      <p>
        <b>flat()</b> - metoda tworząca jedną tablicę, jeśli tablica sama w
        sobie zawiera tablicę. Jako argument może przyjąć stopień zagdnieżdzenia
        jako numer. Domyślnie to: 1. Możliwość podania jako argumentu{" "}
        <b>Infinity</b> - w ten sposób tworzymy jedną tablicę niezależnie od
        wielkośći zagdnieżdzenia. Zwraca nową tablicę.
        <CodeBlock
          code={`const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`}
        />
      </p>
      <p>
        <b>flatMap()</b> - to metoda, która łączy map() i flat(1) w jednym
        kroku. Najpierw mapuje elementy tablicy, a potem spłaszcza wynik o jeden
        poziom. Nie spłaszcza tablicy wejściowej — spłaszcza TABLICE ZWRÓCONE
        PRZEZ CALLBACK.
        <CodeBlock
          code={`const sentences = ["hello world", "js is cool"];

// split zwraca nową, zagnieżdżoną tablicę
const words = sentences.flatMap(sentence => sentence.split(" "));

console.log(words); // ["hello", "world", "js", "is", "cool"]`}
        />
      </p>
      <p>
        <b>forEach()</b> - jako argument przyjmuje callback function, który jest
        egzekwowana na każdym elemencie tablicy. Metoda nie zwraca nowej
        tablicy.
        <CodeBlock
          code={`const items = ["apple", "banana", "grape"];
const copy = [];

items.forEach(item => {
  copy.push(item);
});

console.log(copy);
// ["apple", "banana", "grape"]`}
        />
      </p>
      <p>
        <b>includes()</b> - jako argument przyjmuje szukaną wartość i zwraca
        true lub false.
        <CodeBlock
          code={`const array = [1, 2, 3];
console.log(array.includes(2)); // true
`}
        />
      </p>
      <p>
        <b>indexOf()</b> - zwraca indeks szukanego elementu bądź -1 gdy go nie
        znajdzie. Porównuje elementy za pomocą <b>strict equality (===)</b> -
        czyli sprawdza też typ. Nie działa z obiektami. Dla obiektów użyj{" "}
        <b>findIndex()</b>.
        <CodeBlock
          code={`const items = ["apple", "banana", "grape"];
items.indexOf("apple"); // 0

// DOES NOT WORK FOR OBJECTS
const arr = [{ a: 1 }];
arr.indexOf({ a: 1 }); // -1 
`}
        />
      </p>
      <p>
        <b>join()</b> - łączy wszystkie elementy tablicy w jeden string i zwraca
        go. Jako argument przyjmuje separator (domyślnie przecinek). Metoda nie
        modyfikuje oryginalnej tablicy. Null i undefined są traktowane jako
        pusty string.
        <CodeBlock
          code={`const items = ["apple", "banana", "grape"];
items.join();
// "apple,banana,grape"
items.join("-");
// "apple-banana-grape"
`}
        />
      </p>
      <p>
        <b>map()</b> – tworzy nową tablicę, stosując funkcję callback do każdego
        elementu tablicy. Nie modyfikuje oryginalnej tablicy i zawsze zwraca
        tablicę o tej samej długości.
        <CodeBlock
          code={`const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);
console.log(doubled);
// [2, 4, 6, 8]

// oryginalna tablica pozostaje bez zmian
console.log(numbers);
// [1, 2, 3, 4]`}
        />
      </p>
      <p>
        <b>pop()</b> – usuwa ostatni element tablicy i go zwraca. Modyfikuje
        oryginał. Zwraca undefined gdy tablica jest pusta.
        <CodeBlock
          code={`const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop()); // "tomato"
console.log(plants); // ["broccoli", "cauliflower", "cabbage", "kale"]
`}
        />
      </p>
      <p>
        <b>push()</b> – dodaje element na koniec tablicy. Modyfikuje oryginał i
        zwraca jej nową długość.
        <CodeBlock
          code={`const animals = ["pigs", "goats", "sheep"];
animals.push("cows");
console.log(animals); // ["pigs", "goats", "sheep", "cows"]
`}
        />
      </p>
    </div>
  );
};

export default ArrayMethodsPL;
